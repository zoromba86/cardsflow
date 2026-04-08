"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Bitcoin, Globe, Crosshair, Fingerprint } from "lucide-react";

const FEATURES = [
  {
    id: "instant-issuance",
    icon: <Zap className="w-8 h-8 text-[#E5B220]" />,
    title: "Instant Issuance",
    description: "Generate virtual cards in under 8 seconds. No paperwork, no delays — cards are live the moment you need them.",
    label: "Speed",
  },
  {
    id: "zero-fees",
    icon: <Shield className="w-8 h-8 text-slate-700" />,
    title: "Zero Transaction Fees",
    description: "No hidden charges. Transparent pricing with zero fees on every transaction you make, allowing you to maximize your operational budget.",
    label: "Pricing",
  },
  {
    id: "crypto-funded",
    icon: <Bitcoin className="w-8 h-8 text-slate-700" />,
    title: "100% Crypto-Funded",
    description: "Fund cards directly with crypto. Seamless conversion, instant balance — bridge the gap between web3 and traditional online payments effortlessly.",
    label: "Funding",
  },
  {
    id: "global-acceptance",
    icon: <Globe className="w-8 h-8 text-[#E5B220]" />,
    title: "Global Acceptance",
    description: "95% merchant acceptance worldwide. Works natively with Apple Pay & Google Pay for frictionless mobile and desktop checkouts.",
    label: "Reach",
  },
  {
    id: "real-time",
    icon: <Crosshair className="w-8 h-8 text-slate-700" />,
    title: "Real-Time Controls",
    description: "Set strict spending limits per workflow, freeze and unfreeze instantly, and receive real-time transaction alerts for deep oversight.",
    label: "Control",
  },
  {
    id: "zk-protocol",
    icon: <Fingerprint className="w-8 h-8 text-[#E5B220]" />,
    title: "Zero-Knowledge Protocol",
    description: "Built on absolute privacy-first architecture. No identity verification needed. Your corporate and personal data stays yours — always.",
    label: "Privacy",
  },
];

export function FeaturesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll<HTMLElement>(".reveal-card");
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0) translateZ(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    cards.forEach((card) => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="lg:sticky lg:top-32 lg:pb-32">
              <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-[#E5B220]/10 border border-[#E5B220]/20">
                Platform Capabilities
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Everything you need.
                <br />
                <span className="text-slate-400">Nothing you don&apos;t.</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                We stripped away the legacy banking bloat. What's left is a razor-sharp toolkit designed exclusively for speed, privacy, and absolute financial control.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column (Stacked Cards) */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-8 pb-10">
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                className="reveal-card flex flex-col sm:flex-row gap-6 md:gap-8 items-start p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] will-change-transform"
                style={{
                  opacity: 0,
                  transform: "translateY(30px) translateZ(0)",
                  transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.05}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.05}s`,
                }}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {f.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900 font-bold text-2xl tracking-tight">
                      {f.title}
                    </h3>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      {f.label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
