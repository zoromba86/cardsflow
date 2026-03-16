"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Meta", text: "META ADS" },
  { name: "Google", text: "GOOGLE ADS" },
  { name: "TikTok", text: "TIKTOK FOR BUSINESS" },
  { name: "OpenAI", text: "OPENAI API" },
  { name: "AWS", text: "AMAZON WEB SERVICES" },
  { name: "Stripe", text: "STRIPE BILLING" },
  { name: "X", text: "X ADS" },
  { name: "Snapchat", text: "SNAPCHAT ADS" },
];

// Duplicate the array to create a seamless infinite loop
const marqueeLogos = [...logos, ...logos, ...logos];

export function TrustMarquee() {
  return (
    <section className="w-full py-16 bg-[#0B1120] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-zinc-500">
          Powering over $50M in monthly spend across global platforms
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full group">
        {/* Gradient masks for smooth fading at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-16 md:pl-24"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white/80">
                {logo.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
