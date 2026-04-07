"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    step: "01",
    title: "Create a Card",
    description: "Generate a virtual card for a specific vendor, category, or team use case. Instantly ready in under 8 seconds.",
    accent: "#E5B220",
  },
  {
    step: "02",
    title: "Assign a Purpose",
    description: "Use that card only for the workflow it was created for — ad spend, travel booking, or a recurring subscription.",
    accent: "#06b6d4",
  },
  {
    step: "03",
    title: "Control & Monitor",
    description: "If a billing issue happens, you only update the affected workflow — everything else stays untouched.",
    accent: "#a855f7",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".hiw-step");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0) translateZ(0)";
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 40px 0px" }
    );

    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-[#E5B220]/[0.06] border border-[#E5B220]/10">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Three steps to
            <br />
            <span className="text-slate-400">financial control.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.step}
                className="hiw-step relative"
                style={{
                  opacity: 0,
                  transform: "translateY(40px) translateZ(0)",
                  transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.15}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${i * 0.15}s`,
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Step number circle */}
                <div className="relative z-10 flex justify-center md:justify-start mb-6">
                  <div
                    className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-2xl font-black border border-slate-200 transition-all duration-500 bg-white shadow-sm"
                    style={{
                      color: s.accent,
                    }}
                  >
                    {s.step}
                  </div>
                </div>

                {/* Card body */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 hover:border-slate-300 transition-all duration-500 hover:shadow-lg shadow-sm">
                  <h3 className="text-slate-900 font-bold text-xl mb-3 tracking-tight text-center md:text-left">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light text-center md:text-left">
                    {s.description}
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
