import React from "react";
import { Check, X } from "lucide-react";

export interface ComparisonSummaryProps {
  optionA: {
    title: string;
    description: string;
    whenToUse: string[];
  };
  optionB: {
    title: string;
    description: string;
    whenToUse: string[];
  };
  recommendation: React.ReactNode;
}

export function ComparisonSummaryBlock({
  optionA,
  optionB,
  recommendation,
}: ComparisonSummaryProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        
        {/* Option A */}
        <div className="p-8 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-4">{optionA.title}</h3>
          <p className="text-zinc-400 mb-8 flex-grow">{optionA.description}</p>
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">When it works best</h4>
            <ul className="space-y-3">
              {optionA.whenToUse.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-zinc-400">
                  <Check className="w-4 h-4 text-[#E5B220] mt-0.5 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Option B */}
        <div className="p-8 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-4">{optionB.title}</h3>
          <p className="text-zinc-400 mb-8 flex-grow">{optionB.description}</p>
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">When it works best</h4>
            <ul className="space-y-3">
              {optionB.whenToUse.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-zinc-400">
                  <Check className="w-4 h-4 text-[#E5B220] mt-0.5 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#E5B220]/10 border border-[#E5B220]/20 text-center">
        <span className="text-[#E5B220] font-black uppercase tracking-widest text-xs sm:text-sm mb-4 block">
          Recommendation
        </span>
        <div className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
          {recommendation}
        </div>
      </div>
    </div>
  );
}
