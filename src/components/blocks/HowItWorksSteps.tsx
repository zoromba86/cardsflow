import React from "react";

export interface StepItem {
  title: string;
  description: React.ReactNode;
}

export interface HowItWorksStepsProps {
  title?: string;
  steps: StepItem[];
}

export function HowItWorksSteps({
  title = "How it works",
  steps,
}: HowItWorksStepsProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative before:absolute before:inset-0 before:top-6 before:hidden lg:before:block before:h-px before:bg-gradient-to-r before:from-[#E5B220]/50 before:to-transparent before:-z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col pt-2">
            <div className="w-10 h-10 rounded-full bg-[#E5B220] flex items-center justify-center text-[#0F1B2D] font-bold text-lg mb-6 shadow-[0_0_20px_rgba(229,178,32,0.3)]">
              {idx + 1}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
            <div className="text-slate-600 leading-relaxed max-w-sm prose prose-slate prose-p:text-slate-600">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
