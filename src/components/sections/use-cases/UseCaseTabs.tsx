"use client";

import { motion } from "framer-motion";
import { ElectricCard } from "@/components/ui/electric-card";
import { USE_CASE_CARDS } from "./data";

export default function UseCaseTabs() {
  return (
    <section
      id="user-case"
      className="bg-transparent py-16 md:py-24 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 text-center"
        >
          <span className="text-[#E5B220] text-xs font-black uppercase tracking-[0.2em] mb-3 block">
            User Case
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Built for every payment scenario
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 max-w-xl mx-auto font-light px-2">
            Issue unlimited virtual cards instantly. Our zero-knowledge
            infrastructure ensures your identity stays private while providing
            an unmatched 95% success rate across platforms.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {USE_CASE_CARDS.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <ElectricCard
                variant={uc.variant}
                color={uc.color}
                badge={uc.badge}
                title={uc.title}
                description={uc.desc}
                width="min(18rem, 90vw)"
                aspectRatio="5 / 7"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
