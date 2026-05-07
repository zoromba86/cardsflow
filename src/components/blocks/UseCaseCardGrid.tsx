import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            <div className="h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-teal-200 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-5 group-hover:scale-110 group-hover:bg-teal-100 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-teal-600 group-hover:underline mt-auto">
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
