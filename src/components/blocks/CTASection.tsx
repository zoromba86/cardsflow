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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B2D] to-[#0B1120]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E5B220]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl font-light">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href={primaryCtaLink} className="w-full sm:w-auto">
            <MagnetizeButton className="w-full sm:w-auto bg-[#E5B220] text-[#0F1B2D] px-8 py-4">
               {primaryCtaText} <MoveRight className="w-4 h-4" />
            </MagnetizeButton>
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink} className="w-full sm:w-auto">
               <button className="w-full sm:w-auto font-semibold text-white/75 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-8 py-4 transition-all whitespace-nowrap">
                  {secondaryCtaText}
               </button>
            </Link>
          )}
        </div>

        {proofPoint && (
          <p className="mt-8 text-sm text-zinc-500 font-medium tracking-wide">
            {proofPoint}
          </p>
        )}
      </div>
    </div>
  );
}
