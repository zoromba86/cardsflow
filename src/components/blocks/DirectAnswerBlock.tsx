import React from "react";

export interface DirectAnswerBlockProps {
  children: React.ReactNode;
}

export function DirectAnswerBlock({ children }: DirectAnswerBlockProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-8">
      <div className="p-6 sm:p-12 bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl max-w-4xl">
        <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
