"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Meta", text: "META ADS" },
  { name: "Google", text: "GOOGLE ADS" },
  { name: "TikTok", text: "TIKTOK FOR BUSINESS" },
  { name: "OpenAI", text: "OPENAI API" },
  { name: "AWS", text: "AMAZON WEB SERVICES" },
  { name: "Stripe", text: "STRIPE BILLING" },
  { name: "X", text: "X ADS" },
  { name: "Snapchat", text: "SNAPCHAT ADS" },
];

const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export function TrustMarquee() {
  return (
    <section className="w-full py-16 bg-transparent border-b border-slate-900/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-slate-500">
          Powering over $50M in monthly spend across global platforms
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-16 md:pl-24 marquee-track"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900/80">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .marquee-track {
          animation: scroll-marquee 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
