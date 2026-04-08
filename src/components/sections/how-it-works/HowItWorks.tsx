"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    step: "01",
    title: "Create your account",
    description: "Open your workspace and access cards, wallets, and operations from one controlled dashboard.",
    accent: "from-[#E5B220] to-[#FCD34D]",
    border: "border-[#E5B220]/30",
    bgHover: "hover:bg-[#E5B220]/5",
  },
  {
    step: "02",
    title: "Fund your wallet",
    description: "Prepare balances for card orders, top ups, and payment flows with a cleaner funding journey.",
    accent: "from-sky-400 to-cyan-300",
    border: "border-sky-400/30",
    bgHover: "hover:bg-sky-400/5",
  },
  {
    step: "03",
    title: "Go live with cards",
    description: "Issue virtual cards, monitor spend, and control transactions through a premium operational layer.",
    accent: "from-violet-500 to-fuchsia-400",
    border: "border-violet-500/30",
    bgHover: "hover:bg-violet-500/5",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Observe step cards for fade-in
    const cards = section.querySelectorAll<HTMLElement>(".timeline-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateX(0) translateZ(0)";
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    cards.forEach((c) => obs.observe(c));

    // Scroll listener for the vertical gradient line
    const handleScroll = () => {
      if (!lineRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the section has travelled through the viewport
      const totalScrollable = rect.height + viewportHeight;
      const scrolled = viewportHeight - rect.top;
      
      let percentage = (scrolled / totalScrollable) * 100;
      percentage = Math.max(0, Math.min(percentage * 1.5, 100)); // speed up the fill

      lineRef.current.style.height = `${percentage}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full bg-[#E5B220]/[0.06] border border-[#E5B220]/10">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Three steps to
            <br />
            <span className="text-slate-400">financial control.</span>
          </h2>
        </div>

        {/* Vertical Scrollytelling Timeline */}
        <div className="relative pl-6 md:pl-20">
          
          {/* Background Track Line */}
          <div className="absolute top-0 bottom-0 left-[29px] md:left-[87px] w-1 bg-slate-200 rounded-full" />
          
          {/* Animated Fill Line */}
          <div 
            ref={lineRef}
            className="absolute top-0 left-[29px] md:left-[87px] w-1 bg-gradient-to-b from-[#E5B220] via-sky-400 to-violet-500 rounded-full transition-all duration-100 ease-out will-change-[height]" 
            style={{ height: "0%" }}
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {STEPS.map((s, i) => (
              <div 
                key={s.step} 
                className="relative pl-10 md:pl-16 flex flex-col justify-center"
              >
                {/* Node Circle */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[-11px] w-8 h-8 rounded-full bg-white border-4 border-slate-100 shadow-sm z-20 flex flex-col items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${s.accent}`} />
                </div>

                {/* Step Card */}
                <div 
                  className={`timeline-card relative p-8 md:p-10 rounded-3xl bg-white border border-slate-200 ${s.bgHover} transition-colors duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] will-change-transform`}
                  style={{
                    opacity: 0,
                    transform: "translateX(40px) translateZ(0)",
                    transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${i * 0.15}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${i * 0.15}s`
                  }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${s.accent}`}>
                      {s.step}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light">
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
