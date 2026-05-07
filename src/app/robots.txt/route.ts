import { NextResponse } from "next/server";

const SITE_URL = "https://cardsflow.net";

const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard
Disallow: /dashboard/
Disallow: /login
Disallow: /register
Disallow: /forgot-password
Disallow: /onboarding
Content-Signal: ai-train=no, search=yes, ai-input=no

Sitemap: ${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
