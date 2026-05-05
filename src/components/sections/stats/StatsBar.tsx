"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value?: number;
  textValue?: string;
  suffix?: string;
  label: string;
  prefix?: string;
  decimals?: number;
}

const STATS: StatItem[] = [
  { value: 6, suffix: "s", label: "Card Issuance Time" },
  { value: 5, suffix: "y", label: "Card Validity" },
  { textValue: "$5 / $50", label: "Virtual / Physical cards" },
  { textValue: "$60", label: "Minimum Deposit" },
];

function CountUp({ target, decimals = 0, prefix = "", suffix = "" }: { target: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="w-full py-8 md:py-12 bg-transparent border-b border-slate-900/[0.04]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative text-center py-6 px-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-[#E5B220]/40 shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Glow dot */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#E5B220]/40 group-hover:bg-[#E5B220] transition-colors duration-500" />

              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
                {stat.textValue ? (
                  stat.textValue
                ) : (
                  <CountUp
                    target={stat.value!}
                    decimals={stat.decimals || 0}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                )}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
