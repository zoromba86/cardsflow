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
    <div className="relative w-full py-24 sm:py-32 flex flex-col items-start px-5 sm:px-12 lg:px-20 bg-[#0F1B2D]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-400 max-w-4xl">
        {title}
      </h1>
      
      {supportCopy && (
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
          {supportCopy}
        </p>
      )}

      {(primaryCtaText || secondaryCtaText) && (
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {primaryCtaText && (
            primaryCtaLink ? (
              <Link href={primaryCtaLink}>
                <MagnetizeButton className="bg-[#E5B220] text-[#0F1B2D]">
                  {primaryCtaText}
                </MagnetizeButton>
              </Link>
            ) : (
              <MagnetizeButton className="bg-[#E5B220] text-[#0F1B2D]">
                 {primaryCtaText}
              </MagnetizeButton>
            )
          )}
          {secondaryCtaText && (
            secondaryCtaLink ? (
               <Link href={secondaryCtaLink} className="font-semibold text-white/75 hover:text-white bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 rounded-xl px-7 py-3 transition-all flex items-center justify-center">
                  {secondaryCtaText}
               </Link>
            ) : (
               <button className="font-semibold text-white/75 hover:text-white bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 rounded-xl px-7 py-3 transition-all flex items-center justify-center">
                  {secondaryCtaText}
               </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
