import React from "react";
import Link from "next/link";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export interface HeroSectionProps {
  title: React.ReactNode;
  supportCopy?: React.ReactNode;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function HeroSection({
  title,
  supportCopy,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) {
  return (
    <div className="relative w-full py-24 sm:py-32 flex flex-col items-start px-5 sm:px-12 lg:px-20 bg-slate-50">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 max-w-4xl">
        {title}
      </h1>
      
      {supportCopy && (
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
          {supportCopy}
        </p>
      )}

      {(primaryCtaText || secondaryCtaText) && (
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {primaryCtaText && (
            primaryCtaLink ? (
              <Link href={primaryCtaLink}>
                <MagnetizeButton className="bg-teal-600 text-white hover:bg-teal-700">
                  {primaryCtaText}
                </MagnetizeButton>
              </Link>
            ) : (
              <MagnetizeButton className="bg-teal-600 text-white hover:bg-teal-700">
                 {primaryCtaText}
              </MagnetizeButton>
            )
          )}
          {secondaryCtaText && (
            secondaryCtaLink ? (
               <Link href={secondaryCtaLink} className="font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-7 py-3 shadow-sm transition-all flex items-center justify-center">
                  {secondaryCtaText}
               </Link>
            ) : (
               <button className="font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl px-7 py-3 shadow-sm transition-all flex items-center justify-center">
                  {secondaryCtaText}
               </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
