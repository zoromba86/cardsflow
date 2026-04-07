import React from "react";

export interface DirectAnswerBlockProps {
  children: React.ReactNode;
}

export function DirectAnswerBlock({ children }: DirectAnswerBlockProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-8">
      <div className="p-6 sm:p-8 bg-zinc-800/30 border border-zinc-700/50 rounded-2xl max-w-4xl">
        <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
