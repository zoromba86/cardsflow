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
      <div className="max-w-4xl border border-teal-200 bg-gradient-to-br from-teal-50 to-transparent shadow-sm p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="flex-shrink-0 z-10">
          <div className="w-12 h-12 rounded-xl bg-teal-100/50 border border-teal-200 flex items-center justify-center text-teal-600">
            <Lightbulb className="w-6 h-6" />
          </div>
        </div>
        <div className="flex-1 z-10">
          <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
          <div className="text-slate-700 leading-relaxed text-sm sm:text-base prose prose-slate prose-p:text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
