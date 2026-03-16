"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-start justify-start pt-[20vh] px-6 max-w-7xl mx-auto w-full left-0 right-0">
      
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-8"
      >
        <span>Secure</span>
        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
        <span>Instant</span>
        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
        <span>Global</span>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-2xl bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500"
      >
        Reliable Virtual Cards for Modern Online Payments
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-zinc-400 mt-8 text-lg md:text-xl max-w-xl font-light leading-relaxed"
      >
        A premium virtual card issuing platform built on absolute zero-knowledge protocols, ensuring total financial privacy and industry-leading global acceptance rates.
      </motion.p>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-5 pointer-events-auto"
      >
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group bg-[#E5B220] text-black px-8 py-4 rounded-xl font-black text-base shadow-[0_0_40px_rgba(229,178,32,0.3)] hover:shadow-[0_0_60px_rgba(229,178,32,0.5)] transition-shadow overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FFF] to-transparent opacity-0 group-hover:opacity-30 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 ease-in-out" />
          <span className="relative z-10 flex items-center gap-2">
            Get Started Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </motion.button>

        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all text-base"
        >
          View Documentation
        </motion.button>
      </motion.div>

    </div>
  );
}
