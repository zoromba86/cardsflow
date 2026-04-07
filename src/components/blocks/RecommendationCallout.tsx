import React from "react";
import { Lightbulb } from "lucide-react";

export interface RecommendationCalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function RecommendationCallout({
  title = "Recommended Setup",
  children,
}: RecommendationCalloutProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-8">
      <div className="max-w-4xl border border-[#E5B220]/30 bg-gradient-to-br from-[#E5B220]/10 to-transparent p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B220]/10 rounded-full blur-3xl" />
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-[#E5B220]/10 border border-[#E5B220]/20 flex items-center justify-center text-[#E5B220]">
            <Lightbulb className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
          <div className="text-zinc-300 leading-relaxed text-sm sm:text-base prose prose-invert prose-p:text-zinc-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
