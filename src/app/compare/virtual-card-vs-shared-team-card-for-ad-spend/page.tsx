import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RecommendationCallout, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Virtual Card vs Shared Team Card for Ad Spend | CardsFlow",
  description: "Compare dedicated virtual cards and shared team cards for media buying, account separation, and ad budget control.",
};

export default function CompareAdSpendPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Virtual Card vs Shared Team Card for Ad Spend"
        supportCopy="Which payment setup gives your ad operations more control, better isolation, and less disruption?"
        primaryCtaText="Explore Ad Spend Management"
        primaryCtaLink="/use-cases/ad-spend-management"
        secondaryCtaText="Get Started"
        secondaryCtaLink="/onboarding"
      />
      
      <DirectAnswerBlock>
        For most teams running multiple ad accounts or platforms, dedicated virtual cards are usually better than one shared team card because they create clearer operational boundaries, reduce billing blast radius, and make troubleshooting easier.
      </DirectAnswerBlock>

      <div className="max-w-5xl mx-auto px-5 sm:px-12 lg:px-20 py-16">
        <h2 className="text-2xl font-bold text-zinc-200 mb-4">The short answer</h2>
        <p className="text-zinc-400 text-lg mb-12">If ad spend is important enough to manage closely, it is usually important enough to separate operationally.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shared team card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">🏢</div>
              <h3 className="text-xl font-bold text-zinc-200 m-0">Shared Team Card</h3>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-4">When it can still work</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> one small team manages one limited ad workflow</li>
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> budgets are centralized and simple</li>
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> billing changes are rare</li>
              <li className="flex items-start gap-2"><span className="text-zinc-500 mt-0.5">•</span> there is very little risk of account overlap</li>
            </ul>
          </div>

          {/* Dedicated virtual cards */}
          <div className="bg-[#E5B220]/5 border border-[#E5B220]/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-[#E5B220] bg-[#E5B220]/10 px-3 py-1 rounded-full">Recommended</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E5B220]/20 flex items-center justify-center text-lg">💳</div>
              <h3 className="text-xl font-bold text-zinc-200 m-0">Dedicated Virtual Cards</h3>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-4">When they are better</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> multiple ad accounts are active</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> different buyers or teams manage separate budgets</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> multiple ad platforms are used</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> billing updates happen regularly</li>
              <li className="flex items-start gap-2"><span className="text-[#E5B220] mt-0.5">✓</span> one payment issue should not affect everything else</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-zinc-200 mb-4">Key tradeoff</h3>
          <p className="text-zinc-400">A shared card may look simpler at first. But as account complexity grows, simplicity often becomes fragility. Dedicated cards add structure. That structure usually improves control, troubleshooting, and budgeting.</p>
        </div>
      </div>

      <RecommendationCallout>
        If your ad operation touches more than one major workflow, start separating payment methods now rather than after the first disruptive billing issue.
      </RecommendationCallout>

      <CTASection 
        title="Ready to structure your ad spend?"
        description="Set up isolated virtual cards for each ad account, platform, or buyer team."
        primaryCtaText="Explore Ad Spend Management"
        primaryCtaLink="/use-cases/ad-spend-management"
        secondaryCtaText="Get Started"
        secondaryCtaLink="/onboarding"
      />

      <RelatedLinksModule 
        links={[
          { title: "Ad Spend Management", href: "/use-cases/ad-spend-management" },
          { title: "How Virtual Cards Work", href: "/guides/how-virtual-cards-work-for-online-payments" },
          { title: "Trust Center", href: "/trust" }
        ]} 
      />
    </SubPageLayout>
  );
}
