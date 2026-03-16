"use client";

import { motion } from "framer-motion";

const arbitrageFeatures = [
  {
    title: "Instant Card Issuance",
    description: "Get cards in seconds and use them immediately."
  },
  {
    title: "Ads Without Risk of Blocks",
    description: "Work with Facebook Ads, Google Ads, and TikTok Ads with minimal risk of bans."
  },
  {
    title: "Unlimited Usage",
    description: "No limits on the number of cards or spending volume."
  },
  {
    title: "Low Fees",
    description: "Minimal costs for card issuance and maintenance."
  },
  {
    title: "Secure Payments",
    description: "Reliable transaction protection for your peace of mind."
  },
  {
    title: "Support for Apple Pay & Google Pay",
    description: "Pay for purchases via smartphone with NFC—fast and convenient."
  },
  {
    title: "Professional Support",
    description: "We respond to requests promptly and resolve any issues quickly."
  },
  {
    title: "Zero-Knowledge Protocol",
    description: "No verification needed. Start in seconds."
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-transparent px-6 py-24 z-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-[#E5B220] font-bold tracking-wider text-sm uppercase mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Arbitrage & Traffic
        </motion.p>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center text-[#0F172A] mb-16 max-w-3xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Why choose <span className="text-[#1A9C78]">Cardsflow</span> for traffic and ad arbitrage?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arbitrageFeatures.map((feature, idx) => {
            return (
              <motion.div
                key={idx}
                className="bg-white shadow-sm border border-zinc-200 rounded-2xl p-6 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                data-clickable
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
