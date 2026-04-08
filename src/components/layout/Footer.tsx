import Link from "next/link";
import { FOOTER_COLUMNS } from "./data";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-slate-50 pt-20 pb-12 px-6 border-t border-slate-200 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Brand section centered */}
        <div className="flex flex-col items-center mb-16 max-w-lg text-center">
          <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 shrink-0 relative">
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
                <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#opt3-left-ft)" opacity="0.9" />
                <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#opt3-right-ft)" />
                <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#opt3-top-ft)" />
                <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill="#F8FAFC" />
              </svg>
            </div>
            <span className="text-slate-900 font-extrabold text-xl tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
              CardsFlow
            </span>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            The world&apos;s first virtual card issuance platform built on absolute
            zero-knowledge protocols. Industry-leading 95% global merchant
            acceptance rate.
          </p>
        </div>

        {/* Dynamic link columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16 w-full max-w-4xl text-center">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col items-center">
              <h4 className="text-slate-900 font-semibold mb-6 text-sm uppercase tracking-wider">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-slate-500">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#D97706] hover:tracking-wide transition-all duration-300"
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
        <div className="w-full pt-8 border-t border-slate-200 flex flex-col items-center gap-3">
          <p className="text-xs text-slate-400 font-light text-center">
            Powered by zero-knowledge infrastructure
          </p>
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} CardsFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
