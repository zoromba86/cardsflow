"use client";

import { motion } from "framer-motion";

interface HeroContentProps {
  isMobile?: boolean;
  isLoaded?: boolean;
}

export default function HeroContent({
  isMobile = false,
  isLoaded = false,
}: HeroContentProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-start sm:justify-center pointer-events-none px-5 sm:px-8 md:px-12 lg:px-16 pt-[20vh] sm:pt-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-zinc-400 mb-4 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B220]" />
          <span>Secure</span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span>Instant</span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span>Global</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-black tracking-tight leading-[1.06] bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-100 to-zinc-400 text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl max-w-[15rem] sm:max-w-xl md:max-w-2xl"
        >
          Reliable Virtual Cards for Modern Online Payments
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-zinc-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-[16rem] sm:max-w-sm md:max-w-xl font-light leading-relaxed"
        >
          A premium virtual card issuing platform built on absolute
          zero-knowledge protocols — ensuring total financial privacy and
          industry-leading global acceptance rates.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pointer-events-auto w-full sm:w-auto"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group bg-[#E5B220] text-[#0F1B2D] font-black rounded-xl px-7 py-3.5 text-sm sm:text-base shadow-[0_0_32px_rgba(229,178,32,0.35)] hover:shadow-[0_0_52px_rgba(229,178,32,0.55)] transition-shadow overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-semibold text-white/75 hover:text-white bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 backdrop-blur-sm rounded-xl px-7 py-3.5 text-sm sm:text-base transition-all flex items-center justify-center"
          >
            View Documentation
          </motion.button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-5 sm:mt-6 text-zinc-600 text-[11px] sm:text-xs font-medium tracking-wide"
        >
          99.8% merchant acceptance · Zero-knowledge · Instant issuance
        </motion.p>
      </div>

      {/* Scroll indicator — desktop */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-zinc-600 text-[9px] uppercase tracking-[0.25em] font-bold">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 origin-top bg-gradient-to-b from-zinc-500 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Scroll indicator — mobile (mouse icon) */}
      {isMobile && isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <motion.div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">
            Scroll
          </span>
        </motion.div>
      )}
    </div>
  );
}
