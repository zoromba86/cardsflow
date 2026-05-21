# CardsFlow — Security Posture & Hardening Tracker

This document tracks the security posture of the CardsFlow frontend codebase
and the controls that still need backend coordination before they can be
enabled. It is kept in-repo so it shows up in code review and stays honest as
the codebase evolves.

> Public security contact: `security@cardsflow.net` ([security.txt](../public/.well-known/security.txt))

## Shipped controls (in this codebase)

- Strict Transport Security, `X-Content-Type-Options`, `X-Frame-Options: DENY`,
  `Referrer-Policy: strict-origin-when-cross-origin`, baseline
  `Permissions-Policy` — set by both `src/middleware.ts` and `next.config.ts`.
- Per-request CSP from middleware. `frame-ancestors 'none'`, `object-src 'none'`,
  `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`.
- Private routes (`/dashboard/*`, `/login`, `/register`, `/forgot-password`,
  `/onboarding`) receive `Cache-Control: private, no-store`,
  `X-Robots-Tag: noindex`, `Cross-Origin-Opener-Policy: same-origin`, and
  `Cross-Origin-Resource-Policy: same-site`.
- Dashboard layout wraps every page in a `RequireAuth` guard that redirects
  unauthenticated users to `/login`. Defence-in-depth only — the API must
  still authorise every call server-side.
- Sensitive card data (full PAN, CVV, cardholder name) is **not** modelled or
  fetched by the frontend. The dashboard displays masked PAN, last-four, and
  expiry only. Full reveal will be implemented as a supplier-hosted iframe in
  a follow-up.
- "Query PIN" surface has been removed entirely. Only "Set PIN" remains, with
  no client-side PIN echo.
- Auth tokens are validated for expiry on every read (`Date.parse(expiresAt)`)
  and cleared if past. 401 responses also clear the local cache.
- Withdrawal page enforces TRC20 base58check verification (SHA-256 double-hash
  checksum), double-entry confirmation, paste-disabled confirm field, and a
  single-request cap that mirrors `FEES.MAX_SINGLE_TXN`.
- `/api/md` route validates and normalises the path against an allowlist,
  refuses redirects, enforces a 3 s timeout, and caps upstream body size at
  1 MB to mitigate SSRF / DOS amplification.
- Mock cards service uses `crypto.getRandomValues()` instead of `Math.random()`
  for any pseudo-PAN / ID generation that survives in the production bundle.
- Stronger password policy: 12-char minimum, ≥3 character classes, plus a
  small commonly-leaked-password rejection set.
- Cookie policy public page now describes the storage actually used by the
  shipped app, plus a forward-looking commitment to migrate to HttpOnly
  cookies.

## Deferred (requires backend coordination)

These items require the backend to be online and a coordinated rollout. They
are intentionally **not** half-shipped — a half-finished cookie migration is
worse than the current state.

### Track A — Session cookies + CSRF

- Move `cardsflow_token` out of `localStorage` and into an
  `HttpOnly; Secure; SameSite=Strict; Path=/; __Host-` cookie set by the
  backend on `/auth/login` and cleared on logout.
- Delete the `getToken`/`setItem` paths in `src/lib/api/auth.ts` and
  `src/lib/api/client.ts`; replace with `credentials: 'include'`.
- Add a CSRF double-submit token: backend sets a non-HttpOnly cookie on
  session creation, the client echoes it in `X-CSRF-Token` on every
  state-changing request.

### Track B — Strict CSP (nonce + strict-dynamic)

- Drop `'unsafe-inline'` and `'unsafe-eval'` from `script-src` on the
  dashboard tree.
- Add `force-dynamic` to every `/dashboard/*` page so middleware can inject a
  per-request nonce into the Next.js bootstrap scripts.
- Marketing routes can keep static prerender; serve them a separate, slightly
  looser CSP via `next.config.ts` path-scoped `headers()`.

### Track C — Supplier RSA signing

- Frontend must never see the merchant RSA private key, the AES webhook key,
  or the canonical signing string.
- Build a server-only signing endpoint (Next.js Route Handler or, preferably,
  a dedicated backend) that owns the key, the nonce window, and timestamp
  drift tolerance (±5 min standard).
- Webhook verification: parse JSON, re-canonicalise per the supplier rules,
  HMAC-SHA256 verify in **constant time**, persist `eventId` idempotency
  before any side effect.
- Rename `NEXT_PUBLIC_API_URL` to `API_URL` (server-only). Anything starting
  with `NEXT_PUBLIC_` lands in the client bundle.

### Track D — Sensitive-data reveal flows

- Implement supplier-hosted PAN/CVV reveal: open the supplier's `cardPanUrl`
  in an iframe with `sandbox="allow-scripts allow-same-origin"` (origin
  scoped to the supplier domain only).
- Same pattern for PIN reveal, gated behind step-up auth (password re-prompt
  or WebAuthn).

### Track E — Tighter CSP `connect-src` and `img-src`

- Once the final API and CDN origins are known, replace `connect-src 'self'
  https:` and `img-src 'self' blob: data: https:` with explicit allowlists.

### Track F — CI guardrails

- `@typescript-eslint/no-restricted-imports` rule blocking `localStorage` and
  `sessionStorage` from `src/lib/api/**` and `src/app/dashboard/**`.
- CI grep job rejecting `Math\.random`, `dangerouslySetInnerHTML` (except
  the two known JSON-LD usages on `/faq`), and `process\.env\.NEXT_PUBLIC_.*(?:KEY|SECRET|PRIVATE|TOKEN)`.

### Track G — 2FA / WebAuthn

- Settings page currently shows a "2FA coming soon" placeholder. Wire to the
  backend TOTP enrolment flow once available, prefer WebAuthn (passkeys).
