"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Bitcoin, Globe, Crosshair, Fingerprint } from "lucide-react";

const FEATURES = [
  {
    id: "instant-issuance",
    icon: <Zap className="w-8 h-8 text-[#E5B220]" />,
    title: "Instant virtual issuance",
    description: "Generate new cards instantly for a specific vendor or workflow. Delete them just as fast.",
    label: "Speed",
  },
  {
    id: "physical-cards",
    icon: <Shield className="w-8 h-8 text-slate-700" />,
    title: "Physical cards on demand",
    description: "Order standard physical CardsFlow Visa cards for employee travel, offline usage, and ATM withdrawals.",
    label: "Physical",
  },
  {
    id: "spend-limits",
    icon: <Bitcoin className="w-8 h-8 text-slate-700" />,
    title: "Spend limits & rules",
    description: "Set maximum budgets, restrict usage to specific merchants, or set rules that automatically pause cards on unexpected charges.",
    label: "Control",
  },
  {
    id: "zk-eligibility",
    icon: <Fingerprint className="w-8 h-8 text-[#E5B220]" />,
    title: "Zero-knowledge eligibility",
    description: "CardsFlow verifies your account with zero-knowledge cryptography. No passport upload, no raw identity data persisted.",
    label: "Privacy",
  },
  {
    id: "real-time",
    icon: <Crosshair className="w-8 h-8 text-slate-700" />,
    title: "Real-time controls",
    description: "Freeze, pause, or delete a specific workflow's card instantly—without affecting your other active vendors.",
    label: "Control",
  },
  {
    id: "global-acceptance",
    icon: <Globe className="w-8 h-8 text-[#E5B220]" />,
    title: "Global Visa Acceptance",
    description: "Your dedicated cards are standard US-issued Visa products—meaning they work exactly where Visa works.",
    label: "Reach",
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
      className="w-full py-16 md:py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Centered Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-[#E5B220]/10 border border-[#E5B220]/20">
            Platform Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Everything you need.
            <br />
            <span className="text-slate-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            One interface to create, fund, and control every payment method you need to run your team—without the physical mail and long bank setup times.
          </p>
        </div>

        {/* 3-Column Grid of Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              className="reveal-card group flex flex-col p-7 md:p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#E5B220]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] will-change-transform transition-all duration-500"
              style={{
                opacity: 0,
                transform: "translateY(30px) translateZ(0)",
                transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.07}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.07}s`,
              }}
            >
              {/* Icon + Label Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-[#E5B220]/20 flex items-center justify-center transition-colors duration-500">
                  {f.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  {f.label}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-slate-900 font-bold text-xl tracking-tight mb-2">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
