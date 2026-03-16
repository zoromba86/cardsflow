"use client";

import { motion } from "framer-motion";
import { ElectricCard } from "@/components/ui/electric-card";

/* ─── Electric card data ─── */
const useCaseCards: { badge: string; title: string; desc: string; color: string; variant: "swirl" | "hue" }[] = [
  {
    badge: "Advertising",
    title: "Ads Spend Management",
    desc: "Dedicated cards per ad account with real-time controls for Meta, TikTok, and Google campaigns.",
    color: "#E5B220",
    variant: "swirl",
  },
  {
    badge: "Travel",
    title: "Travel Spend",
    desc: "Frictionless payments for flights, hotels, and travel bookings with dedicated virtual cards per trip.",
    color: "DodgerBlue",
    variant: "hue",
  },
  {
    badge: "SaaS",
    title: "Subscriptions",
    desc: "Issue virtual cards for SaaS tools, cloud services, and recurring subscriptions with auto-limit rules.",
    color: "#dd8448",
    variant: "swirl",
  },
  {
    badge: "E-commerce",
    title: "Cross-border",
    desc: "Global virtual cards optimized for international merchant payments with multi-currency support.",
    color: "#a855f7",
    variant: "hue",
  },
  {
    badge: "Teams",
    title: "Agency Spend",
    desc: "Master + sub-account structure with granular budget controls and role-based permission management.",
    color: "#f43f5e",
    variant: "swirl",
  },
  {
    badge: "Procurement",
    title: "Software Licences",
    desc: "Centralize all software licence payments with dedicated cards and per-vendor spending caps.",
    color: "#06b6d4",
    variant: "hue",
  },
];


/* ─── Main component ─── */
export default function UseCaseTabs() {
  return (
    <>
      {/* User Case */}
      <section id="user-case" className="bg-[#0B1120] py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 text-center"
          >
            <span className="text-[#E5B220] text-xs font-black uppercase tracking-[0.2em] mb-3 block">User Case</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Built for every payment scenario</h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto font-light">Issue unlimited virtual cards instantly. Our zero-knowledge infrastructure ensures your identity stays private while providing an unmatched 99.8% success rate across platforms.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {useCaseCards.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ElectricCard
                  variant={uc.variant}
                  color={uc.color}
                  badge={uc.badge}
                  title={uc.title}
                  description={uc.desc}
                  width="18rem"
                  aspectRatio="5 / 7"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

