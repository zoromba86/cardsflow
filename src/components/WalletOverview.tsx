"use client";

import { motion } from "framer-motion";

export default function WalletOverview() {
  return (
    <section id="wallets" className="relative z-20 py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
            Wallet overview ready for backend integration
          </h2>
          <p className="text-zinc-500 text-lg">
            These preview cards mirror the same structure expected from the live wallet API in the current backend.
          </p>
        </motion.div>

        {/* Wallets */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* USD Wallet */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-sm border border-zinc-200 p-6 rounded-3xl w-full md:w-[350px] flex gap-4 items-center hover:-translate-y-1 transition-transform"
          >
            <div>
               <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">USD Wallet</div>
               <div className="text-3xl font-bold text-[#0F172A] mb-2">$1250.00</div>
               <div className="flex items-center gap-2 text-xs">
                 <span className="text-zinc-500">Currency: USD</span>
                 <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Status: active</span>
               </div>
            </div>
          </motion.div>

          {/* Affiliate Wallet */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-sm border border-zinc-200 p-6 rounded-3xl w-full md:w-[350px] flex gap-4 items-center hover:-translate-y-1 transition-transform"
          >
            <div>
               <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Affiliate Wallet</div>
               <div className="text-3xl font-bold text-[#0F172A] mb-2">$35.00</div>
               <div className="flex items-center gap-2 text-xs">
                 <span className="text-zinc-500">Currency: USD</span>
                 <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Status: active</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
