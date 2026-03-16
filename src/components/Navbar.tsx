"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = ["User Case", "FAQ"] as const;

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleNavClick = (label: string) => {
    const sectionId = label.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F1B2D]/95 backdrop-blur-md py-4 shadow-sm" : "bg-[#0F1B2D] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E5B220] rounded-md flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 8L8 14L2 8L8 2Z" fill="#0F1B2D" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">CardsFlow</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-semibold tracking-wide">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="hover:text-white transition-colors duration-200 cursor-pointer outline-none bg-transparent border-none"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E5B220] text-black px-6 py-2.5 rounded-md text-sm font-bold shadow-md"
          >
            Sign In
          </motion.button>
        </div>

      </div>
    </motion.nav>
  );
}
