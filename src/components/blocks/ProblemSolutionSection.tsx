import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export interface ProblemSolutionSectionProps {
  problemIntro: React.ReactNode;
  painPoints: React.ReactNode[];
  recommendedSetupTitle: string;
  recommendedSetupContent: React.ReactNode;
}

export function ProblemSolutionSection({
  problemIntro,
  painPoints,
  recommendedSetupTitle,
  recommendedSetupContent,
}: ProblemSolutionSectionProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Problems Side */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Problem
          </h2>
          <div className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed">
            {problemIntro}
          </div>
          <ul className="space-y-4">
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <XCircle className="w-5 h-5 text-red-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-zinc-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Side */}
        <div className="p-8 sm:p-10 bg-[#E5B220]/10 border border-[#E5B220]/20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <CheckCircle2 className="w-48 h-48 text-[#E5B220]" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">
            {recommendedSetupTitle}
          </h2>
          <div className="text-zinc-300 text-base sm:text-lg space-y-6 relative z-10 leading-relaxed prose prose-invert prose-p:text-zinc-300 prose-headings:text-white prose-headings:font-semibold">
            {recommendedSetupContent}
          </div>
        </div>

      </div>
    </div>
  );
}
