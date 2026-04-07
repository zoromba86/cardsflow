import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface UseCaseCard {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}

export interface UseCaseCardGridProps {
  cards: UseCaseCard[];
}

export function UseCaseCardGrid({ cards }: UseCaseCardGridProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <Link href={card.href} key={i} className="group block">
            <div className="h-full p-6 rounded-2xl bg-[#14233A]/50 border border-white/5 hover:border-[#E5B220]/50 hover:bg-[#14233A] transition-all duration-300">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#E5B220] mb-5 group-hover:scale-110 group-hover:bg-[#E5B220]/10 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-[#E5B220] group-hover:underline mt-auto">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
