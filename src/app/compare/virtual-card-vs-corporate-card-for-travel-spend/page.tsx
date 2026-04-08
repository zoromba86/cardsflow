import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RecommendationCallout, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Virtual Card vs Corporate Card for Travel Spend | CardsFlow",
  description: "Compare virtual cards and corporate cards for travel workflows, booking control, and vendor separation.",
};

export default function CompareTravelSpendPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Virtual Card vs Corporate Card for Travel Spend"
        supportCopy="Which card type gives your travel workflows more structure and less payment sprawl?"
        primaryCtaText="See Travel Spend Setup"
        primaryCtaLink="/use-cases/travel-spend-management"
        secondaryCtaText="Review Fees"
        secondaryCtaLink="/trust/fees-and-disclosures"
      />
      
      <DirectAnswerBlock>
        For travel workflows, virtual cards are usually better when the goal is vendor separation, temporary purchasing control, and cleaner operational structure. Corporate cards can still make sense for broad employee spending, but they are not always the best fit for travel-specific workflows.
      </DirectAnswerBlock>

      <div className="max-w-5xl mx-auto px-5 sm:px-12 lg:px-20 py-16">
        <h2 className="text-2xl font-bold text-zinc-200 mb-4">The short answer</h2>
        <p className="text-zinc-400 text-lg mb-12">If you want general-purpose employee spend flexibility, a corporate card may still work well. If you want tighter travel controls and better vendor separation, virtual cards are usually the stronger option.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Corporate cards */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">🏦</div>
              <h3 className="text-xl font-bold text-zinc-200 m-0">Corporate Card</h3>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-4">Where it fits</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> employees need broad spending flexibility</li>
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> travel is only one part of a wider expense profile</li>
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> spending is ongoing and general-purpose</li>
            </ul>
          </div>

          {/* Virtual cards */}
          <div className="bg-[#E5B220]/5 border border-[#E5B220]/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-[#E5B220] bg-[#E5B220]/10 px-3 py-1 rounded-full">Recommended</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E5B220]/20 flex items-center justify-center text-lg">💳</div>
              <h3 className="text-xl font-bold text-zinc-200 m-0">Virtual Cards</h3>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-4">Where they fit</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> travel vendors should be separated from other business expenses</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> temporary access is needed for trips or coordinators</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> booking workflows need more structure</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> travel spend needs clearer reconciliation boundaries</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-zinc-200 mb-4">Bottom line</h3>
          <p className="text-zinc-400">Use virtual cards when travel needs its own payment process. Use corporate cards when general employee expense coverage matters more than operational separation.</p>
        </div>
      </div>

      <RecommendationCallout>
        If your organization has more than three travel bookings per month, dedicated virtual cards almost always simplify reconciliation and reduce vendor exposure.
      </RecommendationCallout>

      <CTASection 
        title="Ready to structure your travel spend?"
        description="Create dedicated virtual cards for bookings, trips, and travel-related vendors."
        primaryCtaText="See Travel Spend Setup"
        primaryCtaLink="/use-cases/travel-spend-management"
        secondaryCtaText="Get Started"
        secondaryCtaLink="/onboarding"
      />

      <RelatedLinksModule 
        links={[
          { title: "Travel Spend Management", href: "/use-cases/travel-spend-management" },
          { title: "How Virtual Cards Work", href: "/guides/how-virtual-cards-work-for-online-payments" },
          { title: "Trust Center", href: "/trust" }
        ]} 
      />
    </SubPageLayout>
  );
}
