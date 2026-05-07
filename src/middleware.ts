import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // CSP notes:
  //  - The Next.js App Router emits inline bootstrap / RSC payload <script>
  //    tags without a nonce. Without 'unsafe-inline' on script-src, every
  //    page renders as a blank screen because the entrance animations
  //    (framer-motion `opacity:0` -> 1) never execute.
  //  - Browsers enforce CSP Level 3: when ANY nonce or hash is present in
  //    script-src, 'unsafe-inline' is silently ignored. So we must NOT include
  //    a nonce here -- otherwise we are effectively back to a strict CSP and
  //    every inline script is blocked.
  //  - 'unsafe-eval' is required by some Tailwind / Turbopack runtimes.
  //  - This matches the production nginx CSP currently served on
  //    cardsflow.net, so behaviour is consistent between dev/preview/prod.
  //  - When Next's nonce propagation is wired (read `headers().get('x-nonce')`
  //    in `src/app/layout.tsx` and propagate to all <script> tags), we can
  //    re-introduce the nonce + 'strict-dynamic' and drop 'unsafe-inline'
  //    safely.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' blob: data: https:;
    font-src 'self' data: https:;
    connect-src 'self' https:;
    worker-src 'self' blob:;
    manifest-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
