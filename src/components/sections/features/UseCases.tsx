"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { STATS, FEATURE_ROWS } from "./data";
import type { StatItem } from "@/types";

// ─── Animated counter ────────────────────────────────────────────────────────

function useCounter(target: number, inView: boolean, duration = 1.8) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, target, { duration, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, target, duration, count]);
  return rounded;
}

function StatCard({ value, label, suffix = "" }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F1B2D] tracking-tight">
        <motion.span>{count}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-zinc-500 font-medium text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

// ─── Check item ───────────────────────────────────────────────────────────────

function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0F1B2D] flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-zinc-600 text-sm leading-relaxed">{children}</span>
    </div>
  );
}

// ─── Platform logos ───────────────────────────────────────────────────────────

const PLATFORMS = [
  {
    name: "Meta",
    svg: (
      <svg viewBox="0 0 50 50" width="52" height="52" fill="none">
        <circle cx="25" cy="25" r="25" fill="#1877F2" />
        <path d="M32.5 17H29c-1.1 0-2 .9-2 2v3h5.5l-.7 5H27v13h-5V27h-3v-5h3v-3c0-3.3 2.7-6 6-6h5v4z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 50 50" width="52" height="52" fill="none">
        <circle cx="25" cy="25" r="25" fill="white" stroke="#E5E7EB" strokeWidth="1" />
        <path d="M35.5 25.3c0-.8-.1-1.6-.2-2.3H25v4.4h5.9c-.3 1.4-1 2.6-2.1 3.4v2.8h3.4c2-1.8 3.3-4.5 3.3-8.3z" fill="#4285F4" />
        <path d="M25 36c2.9 0 5.3-1 7-2.6l-3.4-2.8c-.9.6-2.1 1-3.6 1-2.8 0-5.1-1.9-6-4.4h-3.5v2.9C17.5 33.7 21 36 25 36z" fill="#34A853" />
        <path d="M19 27.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2v-2.9h-3.5C14.5 21.9 14 23.4 14 25s.5 3.1 1.5 4.7L19 27.2z" fill="#FBBC05" />
        <path d="M25 18.6c1.6 0 3 .6 4.1 1.6l3.1-3.1C30.3 15.3 27.9 14 25 14c-4 0-7.5 2.3-9.5 5.7L19 22.5c.9-2.6 3.2-3.9 6-3.9z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    svg: (
      <svg viewBox="0 0 50 50" width="52" height="52" fill="none">
        <circle cx="25" cy="25" r="25" fill="#000000" />
        <path d="M33.5 19.5c-1.4-.9-2.4-2.3-2.7-3.9h-3.3v14.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1v-3.4c-.3 0-.5-.1-.8-.1-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V22.4c1.3.9 2.8 1.4 4.3 1.4v-3.3c-.8 0-1.1-.4-1.6-1z" fill="white" />
      </svg>
    ),
  },
];

// ─── Visual panels ────────────────────────────────────────────────────────────

function VisualPanel({ type }: { type: string }) {
  if (type === "platforms") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center"
      >
        <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
          <motion.div className="absolute inset-0 rounded-full border border-[#E5B220]/20" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute inset-8 rounded-full border border-[#E5B220]/15" animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.08, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0F1B2D] flex items-center justify-center shadow-xl">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M14 4L24 14L14 24L4 14L14 4Z" fill="#E5B220" /></svg>
            </div>
          </div>
          {PLATFORMS.map((p, i) => {
            const angle = (i / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
            const r = 108;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div key={p.name} className="absolute" style={{ left: `calc(50% + ${x}px - 26px)`, top: `calc(50% + ${y}px - 26px)` }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }} whileHover={{ scale: 1.1, rotate: 5 }}>
                <div className="w-[52px] h-[52px] rounded-full shadow-lg">{p.svg}</div>
              </motion.div>
            );
          })}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
            {PLATFORMS.map((_, i) => {
              const angle = (i / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
              const r = 108; const cx = 160; const cy = 160;
              const x = cx + Math.cos(angle) * r;
              const y = cy + Math.sin(angle) * r;
              return (
                <motion.line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#E5B220" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }} />
              );
            })}
          </svg>
        </div>
      </motion.div>
    );
  }

  if (type === "reconciliation") {
    return (
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-full flex items-center justify-center">
        <div className="relative w-72 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden p-6">
          <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E5B220] to-[#0F1B2D]" initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Monthly Report — March 2025</p>
          {[{ label: "Total Transactions", val: "$48,200", up: true }, { label: "Success Rate", val: "96.4%", up: true }, { label: "Chargebacks", val: "2", up: false }, { label: "Active Cards", val: "138", up: true }].map((row, i) => (
            <motion.div key={row.label} className="flex justify-between items-center py-2.5 border-b border-zinc-100 last:border-0" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
              <span className="text-zinc-500 text-sm">{row.label}</span>
              <span className={`font-bold text-sm ${row.up ? "text-[#0F1B2D]" : "text-rose-500"}`}>{row.val}</span>
            </motion.div>
          ))}
          <motion.div className="mt-4 w-full bg-[#0F1B2D] text-white text-sm font-bold py-2.5 rounded-lg text-center" whileHover={{ scale: 1.02 }}>Export CSV / Excel</motion.div>
        </div>
      </motion.div>
    );
  }

  if (type === "card-mgmt") {
    const cards = [
      { num: "**** 1234", status: "Active", color: "from-[#0F1B2D] to-[#1a3050]" },
      { num: "**** 5678", status: "Frozen", color: "from-[#374151] to-[#1f2937]" },
      { num: "**** 9012", status: "Active", color: "from-[#7C3AED] to-[#4C1D95]" },
    ];
    return (
      <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-full flex items-center justify-center">
        <div className="relative w-72 flex flex-col gap-4">
          {cards.map((card, i) => (
            <motion.div key={card.num} className={`bg-gradient-to-r ${card.color} rounded-2xl p-5 text-white shadow-lg`} initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Virtual Card</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.status === "Active" ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-white/50"}`}>{card.status}</span>
              </div>
              <p className="font-mono text-lg font-bold tracking-widest">{card.num}</p>
              <div className="mt-3 flex justify-between text-xs text-white/40"><span>CARDSFLOW</span><span>VISA</span></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // BIN visual
  const bins = ["5367 ••••", "4111 ••••", "5285 ••••", "4000 ••••"];
  return (
    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-full flex items-center justify-center">
      <div className="w-72">
        <div className="bg-white border border-zinc-100 shadow-xl rounded-2xl p-5">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">BIN Routing Engine</p>
          {bins.map((bin, i) => (
            <motion.div key={bin} className="flex items-center justify-between py-2.5 border-b border-zinc-50 last:border-0" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>
              <span className="font-mono font-bold text-[#0F1B2D] text-sm">{bin}</span>
              <motion.span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>{96 - i}% success</motion.span>
            </motion.div>
          ))}
          <motion.div className="mt-4 h-2 rounded-full bg-zinc-100 overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-[#E5B220] to-[#0F1B2D] rounded-full" initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} />
          </motion.div>
          <p className="text-xs text-zinc-400 mt-1.5 text-right font-semibold">95%+ avg. success</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function UseCases() {
  return (
    <section className="bg-background">
      {/* Platform banner */}
      <div className="border-y border-zinc-200 bg-white py-5 overflow-x-auto">
        <motion.div className="flex items-center justify-center gap-8 md:gap-12 text-sm font-semibold text-zinc-500 min-w-max px-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="uppercase tracking-widest text-xs hidden sm:block">Works with</span>
          {PLATFORMS.map((p) => (
            <motion.div key={p.name} className="flex items-center gap-2" whileHover={{ scale: 1.08 }}>
              <div className="w-7 h-7">{p.svg}</div>
              <span className="font-bold text-[#0F1B2D]">{p.name} Ads</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <StatCard {...s} />
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="text-[#E5B220] text-xs font-black uppercase tracking-[0.2em] mb-4 block">Core Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F1B2D] leading-tight mb-5">
            Everything your team needs<br className="hidden md:block" /> to scale ad spend
          </h2>
          <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
            A dedicated VCC platform offering account isolation, budget control, and risk protection — designed for high-volume advertising teams.
          </p>
        </motion.div>
      </div>

      {/* Feature rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 md:pb-32 flex flex-col gap-20 md:gap-32">
        {FEATURE_ROWS.map((feat, idx) => (
          <div key={feat.title} className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center ${feat.reverse ? "md:flex-row-reverse" : ""}`}>
            {/* Text */}
            <motion.div className="flex-1 flex flex-col justify-center" initial={{ opacity: 0, x: feat.reverse ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}>
              <motion.span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.18em] mb-4 bg-[#E5B220]/10 px-3 py-1 rounded-full w-fit" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + idx * 0.04 }}>
                {feat.tag}
              </motion.span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0F1B2D] leading-snug mb-5">{feat.title}</h3>
              <p className="text-zinc-500 text-base font-light leading-relaxed mb-8 max-w-md">{feat.description}</p>
              <ul className="flex flex-col gap-3">
                {feat.checks.map((c, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.1 }}>
                    <Check>{c}</Check>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Visual */}
            <div className="flex-1 flex items-center justify-center w-full">
              <VisualPanel type={feat.visual} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
