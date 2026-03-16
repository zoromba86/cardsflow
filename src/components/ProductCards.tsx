"use client";

import { motion } from "framer-motion";

export default function ProductCards() {
  return (
    <section id="cards" className="relative z-20 py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
            Popular virtual cards
          </h2>
          <p className="text-zinc-500 text-lg">
            This preview can be replaced directly with live data from GET /card-products.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Visa Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-zinc-200 shadow-sm text-[#0F172A] p-8 rounded-3xl flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl tracking-tighter text-[#1CB0BA]">VISA</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visa Virtual USD Card</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">
                Instant virtual card suitable for international online purchases.
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-zinc-100 pt-6 mt-auto">
               <div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase mb-1">Provider: PAY2HOUSE</div>
                  <div className="font-bold text-xl">$10.00</div>
               </div>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="bg-[#0F1B2D] text-white shadow-md px-6 py-2.5 rounded-md text-sm font-bold"
               >
                 View Details
               </motion.button>
            </div>
          </motion.div>

          {/* Mastercard */}
          <motion.div 
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-zinc-200 shadow-sm text-[#0F172A] p-8 rounded-3xl flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl tracking-tighter flex items-center gap-1">
                  <div className="w-5 h-5 bg-[#EB001B] rounded-full mix-blend-multiply opacity-80" />
                  <div className="w-5 h-5 bg-[#F79E1B] rounded-full mix-blend-multiply opacity-80 -ml-2" />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mastercard Virtual EUR-ready</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">
                Professional payment option for ads, subscriptions, and global platforms.
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-zinc-100 pt-6 mt-auto">
               <div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase mb-1">Provider: PAY2HOUSE</div>
                  <div className="font-bold text-xl">$20.00</div>
               </div>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="bg-[#0F1B2D] text-white shadow-md px-6 py-2.5 rounded-md text-sm font-bold"
               >
                 View Details
               </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
