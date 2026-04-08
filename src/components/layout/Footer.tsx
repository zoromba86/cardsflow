import Link from "next/link";
import { FOOTER_COLUMNS } from "./data";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-slate-50 pt-16 pb-10 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 cursor-pointer">
              <div className="w-7 h-7 shrink-0 relative">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <defs>
                    <linearGradient id="opt3-left-ft" x1="20" y1="40" x2="0" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E5B220" />
                      <stop offset="1" stopColor="#FDE047" />
                    </linearGradient>
                    <linearGradient id="opt3-right-ft" x1="20" y1="40" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D97706" />
                      <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="opt3-top-ft" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FEF08A" />
                      <stop offset="1" stopColor="#FDE047" />
                    </linearGradient>
                  </defs>
                  <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#opt3-left-ft)" opacity="0.9"/>
                  <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#opt3-right-ft)"/>
                  <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#opt3-top-ft)"/>
                  <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill="#F8FAFC"/>
                </svg>
              </div>
              <span className="text-slate-900 font-black text-lg tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                CardsFlow
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
              The world's first virtual card issuance platform built on absolute
              zero-knowledge protocols. Industry-leading 99.8% global merchant
              acceptance rate.
            </p>
          </div>

          {/* Dynamic link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-slate-900 font-semibold mb-4 text-sm">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} CardsFlow. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            Powered by zero-knowledge infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
