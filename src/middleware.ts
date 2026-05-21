import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public marketing routes that opt in to markdown content negotiation.
// Authenticated routes (/dashboard, /login, /register, /onboarding,
// /forgot-password) are intentionally excluded -- they must never be
// agent-readable.
const MARKDOWN_ALLOWLIST_EXACT = new Set<string>([
  "/",
  "/about",
  "/contact",
  "/faq",
  "/features",
  "/pricing",
  "/refund-policy",
  "/blog",
  "/use-cases",
  "/trust",
]);
const MARKDOWN_ALLOWLIST_PREFIXES = [
  "/legal/",
  "/trust/",
  "/blog/",
  "/use-cases/",
  "/compare/",
  "/guides/",
];

function isMarkdownAllowed(pathname: string): boolean {
  if (MARKDOWN_ALLOWLIST_EXACT.has(pathname)) return true;
  return MARKDOWN_ALLOWLIST_PREFIXES.some((p) => pathname.startsWith(p));
}

function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  // Accept: text/markdown[;q=...]  OR  text/markdown ranked above text/html.
  // Keep parsing minimal -- exact substring match is enough for the agents
  // that actually send this header.
  return /\btext\/markdown\b/i.test(accept);
}

// Routes that must never be cached by intermediaries / indexed / framed.
const PRIVATE_PATH_PREFIXES = [
  "/dashboard",
  "/login",
  "/register",
  "/forgot-password",
  "/onboarding",
];
function isPrivatePath(pathname: string): boolean {
  return PRIVATE_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export function middleware(request: NextRequest) {
  // ── Markdown content negotiation (P2) ─────────────────────────────────
  // If the agent explicitly asks for text/markdown AND the path is on the
  // public marketing allowlist, rewrite to the markdown renderer route.
  const { pathname } = request.nextUrl;
  if (
    (request.method === "GET" || request.method === "HEAD") &&
    wantsMarkdown(request.headers.get("accept")) &&
    isMarkdownAllowed(pathname)
  ) {
    const target = request.nextUrl.clone();
    target.pathname = "/api/md";
    target.search = "";
    const headers = new Headers(request.headers);
    headers.set("x-md-path", pathname);
    return NextResponse.rewrite(target, { request: { headers } });
  }
  // CSP — see https://nextjs.org/docs/app/guides/content-security-policy
  //
  // We deliberately do NOT include a nonce in script-src. Reason:
  //  - Most marketing pages on this site are statically prerendered, so the
  //    HTML (including Next.js's inline bootstrap/RSC <script> tags) is built
  //    once at build time and cannot carry a per-request nonce.
  //  - CSP Level 3: when a nonce or hash is present in script-src, browsers
  //    silently ignore 'unsafe-inline'. So adding a nonce to the response
  //    header — without ALSO injecting the same nonce into every prerendered
  //    inline <script> — instantly blocks all hydration scripts and the page
  //    renders blank.
  //  - The remaining directives are still strict: 'unsafe-eval' is required
  //    by Turbopack/some runtimes; 'self' restricts external script origins;
  //    object-src 'none', frame-ancestors 'none', base-uri 'self', and
  //    form-action 'self' close the dangerous attack surfaces. HSTS and the
  //    other security headers are preserved below.
  //  - This matches the production nginx CSP currently served on
  //    cardsflow.net, so behaviour is consistent across dev/preview/prod.
  //
  // To re-introduce nonce + 'strict-dynamic' safely, every page that runs
  // scripts must opt out of static prerender (force-dynamic) so the nonce
  // can be injected at request time — that is a deliberate site-wide change
  // tracked in docs/SECURITY.md.
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
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Keep Permissions-Policy aligned with next.config.ts (which sets the
  // baseline on every route). Listing both interest-cohort and browsing-topics
  // covers the Chrome FLoC rename and any other UAs that still honour either.
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()'
  );

  // Authenticated / sensitive routes: never index, never share-cache, isolate
  // origin against cross-origin window/Spectre-style leaks.
  if (isPrivatePath(pathname)) {
    response.headers.set('Cache-Control', 'private, no-store, max-age=0, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Resource-Policy', 'same-site');
  }

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
