"use client";

import { useEffect, useRef } from "react";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateZ(0)";
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background glow effects - more vibrant for light mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E5B220]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        ref={ref}
        className="max-w-3xl mx-auto px-6 text-center relative z-10"
        style={{
          opacity: 0,
          transform: "translateY(30px) translateZ(0)",
          transition: "opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1)",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Badge */}
        <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-6 px-4 py-1.5 rounded-full bg-[#E5B220]/[0.06] border border-[#E5B220]/10">
          Get Started Today
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          Ready to take
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            control?
          </span>
        </h2>

        <p className="text-slate-500 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Create your first virtual card in under 8 seconds. No verification. No hidden fees. Just instant, global payment power.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-[#E5B220] text-white text-sm font-black uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(229,178,32,0.4)] hover:scale-[1.03] active:scale-[0.98]">
            <span className="relative z-10">Get Your Card Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 text-slate-600 text-sm font-bold uppercase tracking-wider rounded-xl border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-all duration-300 bg-slate-50 hover:bg-slate-100">
            See Fees & Disclosures
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 mt-10 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            No KYC Required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Instant Activation
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Zero Fees
          </span>
        </div>
      </div>
    </section>
  );
}
