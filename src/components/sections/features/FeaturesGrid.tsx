"use client";

import { useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Issuance",
    description: "Generate virtual cards in under 8 seconds. No paperwork, no delays — cards are live the moment you need them.",
    gradient: "from-amber-500/10 to-amber-500/0",
    borderHover: "hover:border-amber-500/30",
    glowColor: "group-hover:shadow-amber-500/10",
  },
  {
    icon: "🔒",
    title: "Zero Transaction Fees",
    description: "No hidden charges. No markup. Transparent pricing with zero fees on every transaction you make.",
    gradient: "from-emerald-500/10 to-emerald-500/0",
    borderHover: "hover:border-emerald-500/30",
    glowColor: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: "₿",
    title: "100% Crypto-Funded",
    description: "Fund your cards directly with crypto. Seamless conversion, instant balance — no traditional banking needed.",
    gradient: "from-orange-500/10 to-orange-500/0",
    borderHover: "hover:border-orange-500/30",
    glowColor: "group-hover:shadow-orange-500/10",
  },
  {
    icon: "🌍",
    title: "Global Acceptance",
    description: "99.8% merchant acceptance worldwide. Works with Apple Pay and Google Pay for frictionless mobile payments.",
    gradient: "from-sky-500/10 to-sky-500/0",
    borderHover: "hover:border-sky-500/30",
    glowColor: "group-hover:shadow-sky-500/10",
  },
  {
    icon: "🎯",
    title: "Real-Time Controls",
    description: "Set spending limits, freeze and unfreeze instantly, and get real-time transaction alerts for every card.",
    gradient: "from-violet-500/10 to-violet-500/0",
    borderHover: "hover:border-violet-500/30",
    glowColor: "group-hover:shadow-violet-500/10",
  },
  {
    icon: "🛡️",
    title: "Zero-Knowledge Protocol",
    description: "Privacy-first architecture. No identity verification needed. Your data stays yours — always.",
    gradient: "from-rose-500/10 to-rose-500/0",
    borderHover: "hover:border-rose-500/30",
    glowColor: "group-hover:shadow-rose-500/10",
  },
];

export function FeaturesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".feature-card");
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0) translateZ(0)";
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    
    cards.forEach((card) => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-white relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle radial glow behind */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#E5B220]/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-[#E5B220]/[0.06] border border-[#E5B220]/10">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Everything you need.
            <br />
            <span className="text-slate-400">Nothing you don't.</span>
          </h2>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card group relative rounded-2xl border border-slate-100 ${f.borderHover} bg-slate-50/50 backdrop-blur-sm p-7 md:p-8 transition-all duration-500 ease-out cursor-default hover:shadow-xl hover:bg-white hover:-translate-y-1`}
              style={{
                opacity: 0,
                transform: "translateY(40px) translateZ(0)",
                transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.08}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.08}s, border-color 0.4s, box-shadow 0.4s, background-color 0.4s`,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Inner gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-5 w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 ease-out shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2.5 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {f.description}
                </p>
              </div>

              {/* Hover lift line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
