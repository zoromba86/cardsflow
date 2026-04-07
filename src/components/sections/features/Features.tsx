"use client";

import { motion, type Variants } from "framer-motion";
import { ARBITRAGE_FEATURES } from "./data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="relative z-20 py-16 md:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[#E5B220] font-bold tracking-wider text-sm uppercase mb-4 block">
            Why CardsFlow
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-6">
            Frontend ready for card commerce and full wallet operations
          </h2>
          <p className="text-zinc-500 text-lg font-light">
            The experience is inspired by modern payment platforms, while using
            a custom visual identity built on navy, gold, and soft blue-grey tones.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ARBITRAGE_FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white shadow-sm border border-zinc-200 rounded-2xl p-6 flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-lg font-bold text-[#0F172A]">{feat.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
