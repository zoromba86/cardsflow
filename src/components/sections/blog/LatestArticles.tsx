"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ARTICLES = [
  {
    id: 1,
    title: "Ad Spend Card Structure",
    description: "Better isolation for ads.",
    date: "APR 1, 2026",
    author: "CARDSFLOW",
    image: "/images/blog/article_bg_purple.png",
    link: "/blog",
    innerSubtitle: "Dedicated virtual cards for account level control",
  },
  {
    id: 2,
    title: "Trust Center for Payment Products",
    description: "Trust improves conversion.",
    date: "APR 1, 2026",
    author: "CARDSFLOW",
    image: "/images/blog/article_bg_blue.png",
    link: "/blog",
    innerSubtitle: "Clear boundaries, disclosures, and support paths",
  },
  {
    id: 3,
    title: "Subscription Billing Control",
    description: "Manage renewals better.",
    date: "APR 1, 2026",
    author: "CARDSFLOW",
    image: "/images/blog/article_bg_green.png",
    link: "/blog",
    innerSubtitle: "Cleaner subscription billing flows",
  },
];

export function LatestArticles() {
  return (
    <section className="w-full bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="bg-teal-50 border border-teal-200 text-teal-800 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            INSIGHTS & UPDATES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-600">
            Fresh highlights from the CardsFlow blog, including platform updates, operational guidance, and product insights.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <Link 
                href={article.link}
                className="group flex flex-col w-full bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-teal-200 transition-all duration-500 ease-out will-change-transform"
              >
                {/* Premium Image Container with Glassmorphic Overlay */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-100 p-6 flex flex-col justify-center">
                  {/* Background Image */}
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500" />
                  
                  {/* Glassmorphic Inner UI Card (matches inspiration mockup) */}
                  <div className="relative z-10 w-full h-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-5 flex flex-col shadow-2xl transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                    <div className="flex items-center gap-1.5 mb-3 opacity-90">
                      <div className="w-4 h-4 text-white">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                           <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="text-white text-[10px] font-bold tracking-wider">CardsFlow</span>
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{article.title.replace("Card Structure", "Structure").replace(" for Payment Products", "")}</h4>
                    <p className="text-white/80 text-[11px] leading-relaxed mb-auto">{article.innerSubtitle}</p>
                    
                    {/* Skeleton UI blocks at the bottom of the glass card */}
                    <div className="flex gap-2 mt-4">
                      <div className="h-6 flex-1 rounded bg-white/20 border border-white/10" />
                      <div className="h-6 flex-1 rounded bg-white/20 border border-white/10" />
                      <div className="h-6 w-1/4 rounded bg-white/20 border border-white/10" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{article.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-grow">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-teal-600 mt-auto group-hover:text-teal-700 transition-colors">
                    READ ARTICLE
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
