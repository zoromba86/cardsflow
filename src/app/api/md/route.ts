import { NextRequest, NextResponse } from "next/server";

// ── Allowlist (must mirror src/middleware.ts) ───────────────────────────
const EXACT = new Set<string>([
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
const PREFIXES = ["/legal/", "/trust/", "/blog/", "/use-cases/", "/compare/", "/guides/"];
function isAllowed(p: string): boolean {
  if (EXACT.has(p)) return true;
  return PREFIXES.some((x) => p.startsWith(x));
}

// ── HTML → Markdown (small, dependency-free) ────────────────────────────
// Scope: the marketing pages on this site only. They use a known subset of
// tags (h1-h6, p, ul, ol, li, a, strong, em, code, pre, blockquote, br, hr).
// We strip everything else.

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "…")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function stripTag(html: string, tag: string): string {
  const re = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?</${tag}>`, "gi");
  return html.replace(re, "");
}

function extractMain(html: string): string {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (m) return m[1];
  const b = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return b ? b[1] : html;
}

function htmlToMarkdown(rawHtml: string): string {
  let html = extractMain(rawHtml);

  // Drop chrome / non-content blocks.
  for (const t of ["script", "style", "noscript", "nav", "header", "footer", "form", "aside", "svg", "button"]) {
    html = stripTag(html, t);
  }

  // Block-level transforms.
  html = html.replace(/<\s*br\s*\/?>/gi, "\n");
  html = html.replace(/<\s*hr\s*\/?>/gi, "\n\n---\n\n");
  for (let i = 6; i >= 1; i--) {
    const hashes = "#".repeat(i);
    html = html.replace(new RegExp(`<h${i}\\b[^>]*>([\\s\\S]*?)</h${i}>`, "gi"), (_m, inner) => `\n\n${hashes} ${inner.trim()}\n\n`);
  }
  html = html.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_m, inner) => `\n\n${inner.trim()}\n\n`);
  html = html.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_m, inner) => {
    const lines = inner.trim().split(/\n+/).map((l: string) => `> ${l.trim()}`).join("\n");
    return `\n\n${lines}\n\n`;
  });
  // Lists -- handle <li> simply (no nesting). Bullet for ul, number for ol.
  html = html.replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, (_m, inner) => {
    const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((x) => `- ${x[1].trim()}`);
    return `\n\n${items.join("\n")}\n\n`;
  });
  html = html.replace(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi, (_m, inner) => {
    const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((x, i) => `${i + 1}. ${x[1].trim()}`);
    return `\n\n${items.join("\n")}\n\n`;
  });
  html = html.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_m, inner) => `\n\n\`\`\`\n${inner.replace(/<[^>]+>/g, "")}\n\`\`\`\n\n`);

  // Inline transforms.
  html = html.replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_m, href, text) => {
    const t = text.replace(/<[^>]+>/g, "").trim();
    return t ? `[${t}](${href})` : "";
  });
  html = html.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/(strong|b)>/gi, (_m, _t, inner) => `**${inner.trim()}**`);
  html = html.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/(em|i)>/gi, (_m, _t, inner) => `*${inner.trim()}*`);
  html = html.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_m, inner) => `\`${inner}\``);

  // Strip any remaining tags.
  html = html.replace(/<[^>]+>/g, "");

  // Decode entities.
  html = decodeEntities(html);

  // Tidy whitespace.
  html = html.replace(/[ \t]+\n/g, "\n");
  html = html.replace(/\n{3,}/g, "\n\n");
  html = html.replace(/^\s+|\s+$/g, "");
  return html + "\n";
}

// ── Route handler ───────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  // Path is provided either via the `x-md-path` header (set by middleware
  // when handling Accept: text/markdown content negotiation) or via the
  // `?path=` query string for direct programmatic access.
  const path = req.headers.get("x-md-path") || req.nextUrl.searchParams.get("path") || "/";
  if (!isAllowed(path)) {
    return new NextResponse("Not allowed.\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const origin = req.nextUrl.origin;
  let html: string;
  try {
    const r = await fetch(`${origin}${path}`, {
      headers: { accept: "text/html", "user-agent": "cardsflow-md-renderer/1.0" },
      cache: "no-store",
    });
    if (!r.ok) {
      return new NextResponse(`# ${path}\n\nUpstream returned ${r.status}.\n`, {
        status: r.status,
        headers: { "content-type": "text/markdown; charset=utf-8" },
      });
    }
    html = await r.text();
  } catch (e) {
    const msg = e instanceof Error ? e.message : "fetch failed";
    return new NextResponse(`# ${path}\n\nRender error: ${msg}\n`, {
      status: 502,
      headers: { "content-type": "text/markdown; charset=utf-8" },
    });
  }

  // Pull <title> for a top-of-doc heading.
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(titleMatch[1].trim()) : path;

  const body = htmlToMarkdown(html);
  const md = `# ${title}\n\n*Source:* \`${path}\` (markdown rendering)\n\n${body}`;

  return new NextResponse(md, {
    status: 200,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=300, stale-while-revalidate=3600",
      "x-robots-tag": "noindex",
      vary: "accept",
    },
  });
}
