"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NAV_LINKS } from "./data";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (link: { sectionId: string; href?: string }) => {
    if (link.href) {
      router.push(link.href);
      setMenuOpen(false);
      return;
    }
    if (pathname !== "/") {
      router.push(`/#${link.sectionId}`);
    } else {
      const el = document.getElementById(link.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md py-3 shadow-sm border-b border-slate-200"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 shrink-0 relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_8px_rgba(229,178,32,0.4)]">
                <defs>
                  <linearGradient id="opt3-left" x1="20" y1="40" x2="0" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5B220" />
                    <stop offset="1" stopColor="#FDE047" />
                  </linearGradient>
                  <linearGradient id="opt3-right" x1="20" y1="40" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D97706" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                  <linearGradient id="opt3-top" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEF08A" />
                    <stop offset="1" stopColor="#FDE047" />
                  </linearGradient>
                </defs>
                <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#opt3-left)" opacity="0.9"/>
                <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#opt3-right)"/>
                <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#opt3-top)"/>
                {/* The C-cutout */}
                <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill={scrolled ? "#FFFFFF" : "#0F1B2D"} className="transition-colors duration-300"/>
              </svg>
            </div>
            <span className={`font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
              CardsFlow
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-slate-600" : "text-zinc-400"
          }`}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link)}
                className={`transition-colors duration-200 cursor-pointer outline-none bg-transparent border-none ${
                  scrolled ? "hover:text-slate-900" : "hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E5B220] text-black px-5 py-2 rounded-md text-sm font-bold shadow-md"
            >
              Sign In
            </motion.button>
            <button
              className={`md:hidden flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
                scrolled 
                  ? "text-slate-900 bg-slate-100 hover:bg-slate-200" 
                  : "text-white bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-[60px] left-0 right-0 z-40 backdrop-blur-md border-b px-4 py-4 flex flex-col gap-1 md:hidden ${
              scrolled 
                ? "bg-white/95 border-slate-200 shadow-lg" 
                : "bg-[#0F1B2D]/98 border-white/10"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNavClick(link)}
                className={`text-left text-base font-semibold py-3 px-4 rounded-xl transition-colors ${
                  scrolled 
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
