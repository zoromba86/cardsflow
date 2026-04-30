import Link from "next/link";
import { FOOTER_COLUMNS } from "./data";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0A1220] pt-20 pb-0 overflow-hidden">
      {/* ── Subtle top-edge gradient ──────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5B220]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Main grid: brand-left · columns-right ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 pb-16">

          {/* ── Brand column (left-aligned) ───────────────────────────────── */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-8 cursor-pointer hover:opacity-90 transition-opacity" aria-label="CardsFlow Home">
              <div className="w-9 h-9 shrink-0 relative">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_12px_rgba(229,178,32,0.3)]">
                  <defs>
                    <linearGradient id="ft-left" x1="20" y1="40" x2="0" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E5B220" />
                      <stop offset="1" stopColor="#FDE047" />
                    </linearGradient>
                    <linearGradient id="ft-right" x1="20" y1="40" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D97706" />
                      <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="ft-top" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEF08A" />
                      <stop offset="1" stopColor="#FDE047" />
                    </linearGradient>
                  </defs>
                  <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#ft-left)" opacity="0.9" />
                  <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#ft-right)" />
                  <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#ft-top)" />
                  <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill="#0A1220" />
                </svg>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                CardsFlow
              </span>
            </Link>

            {/* Contact info — add address & phone when available */}
            <div className="flex flex-col gap-2 text-sm text-slate-500 leading-relaxed">
              <a href="mailto:support@cardsflow.net" className="hover:text-[#E5B220] transition-colors">
                support@cardsflow.net
              </a>
              {/* <p className="text-slate-500">123 Example Street</p> */}
              {/* <p className="text-slate-500">Singapore 123456</p> */}
              {/* <a href="tel:+65XXXXXXXX" className="hover:text-[#E5B220] transition-colors">+65 XXXX XXXX</a> */}
            </div>
          </div>

          {/* ── Link columns (right side) ─────────────────────────────────── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-[#E5B220] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div className="h-px w-full bg-white/[0.06]" />

        {/* ── Bottom bar ──────────────────────────────────────────────────── */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CardsFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/legal/privacy/" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/legal/terms/" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/legal/cookies/" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
