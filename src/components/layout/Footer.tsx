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
              <div className="w-7 h-7 bg-[#E5B220] rounded-md flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 8L8 14L2 8L8 2Z" fill="#f8fafc" />
                </svg>
              </div>
              <span className="text-slate-900 font-bold text-lg tracking-tight">
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
