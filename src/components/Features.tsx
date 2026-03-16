"use client";

import { motion, Variants } from "framer-motion";

export default function Features() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="features" className="relative z-20 py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={item}
            className="mb-16 max-w-2xl"
        >
          <span className="text-[#E5B220] font-bold tracking-wider text-sm uppercase mb-4 block">
            Why CardsFlow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-6">
            Frontend ready for card commerce and full wallet operations
          </h2>
          <p className="text-zinc-500 text-lg font-light">
            The experience is inspired by modern payment platforms, while using a custom visual identity built on navy, gold, and soft blue-grey tones.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-white shadow-sm border border-zinc-200 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 mt-4">Bank-Grade Security</h3>
            <p className="text-zinc-500 leading-relaxed">
              Strong protection layers and clear financial auditing for every operation.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-white shadow-sm border border-zinc-200 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 mt-4">Instant Issuance</h3>
            <p className="text-zinc-500 leading-relaxed">
              Fast card ordering with direct wallet and order integration.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-white shadow-sm border border-zinc-200 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 mt-4">Global Acceptance</h3>
            <p className="text-zinc-500 leading-relaxed">
              A professional virtual card storefront built for international spending flows.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
