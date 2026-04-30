import React from "react";
import Link from "next/link";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { MoveRight } from "lucide-react";

export interface CTASectionProps {
  title: string;
  description?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  proofPoint?: string;
}

export function CTASection({
  title,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  proofPoint,
}: CTASectionProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl font-medium">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href={primaryCtaLink} className="w-full sm:w-auto">
            <MagnetizeButton className="w-full sm:w-auto bg-teal-600 text-white px-8 py-4 hover:bg-teal-700">
               {primaryCtaText} <MoveRight className="w-4 h-4" />
            </MagnetizeButton>
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink} className="w-full sm:w-auto">
               <button className="w-full sm:w-auto font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-8 py-4 shadow-sm transition-all whitespace-nowrap">
                  {secondaryCtaText}
               </button>
            </Link>
          )}
        </div>

        {proofPoint && (
          <p className="mt-8 text-sm text-slate-500 font-medium tracking-wide">
            {proofPoint}
          </p>
        )}
      </div>
    </div>
  );
}
