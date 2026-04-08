import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "How Virtual Cards Work for Online Payments | CardsFlow",
  description: "Learn how virtual cards work, why teams use them, and how they help with ad spend, travel payments, and subscription management.",
};

export default function HowVirtualCardsWorkPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="How Virtual Cards Work for Online Payments"
        supportCopy="A foundational guide to understanding virtual cards, why teams use them, and how they fit into payment workflows."
        primaryCtaText="Explore Use Cases"
        primaryCtaLink="/use-cases"
        secondaryCtaText="Compare Card Workflows"
        secondaryCtaLink="/compare/virtual-card-vs-shared-team-card-for-ad-spend"
      />
      
      <DirectAnswerBlock>
        A virtual card is a digital payment method designed for online transactions. It gives businesses and professionals a way to make card-based payments without relying on a single physical card for every workflow.
      </DirectAnswerBlock>

      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <h3>What a virtual card actually does</h3>
        <p>Instead of exposing one shared card everywhere, a virtual card lets you separate payment workflows by:</p>
        <ul>
          <li>vendor</li>
          <li>purpose</li>
          <li>budget owner</li>
          <li>department</li>
          <li>recurring service</li>
          <li>operational risk level</li>
        </ul>
        <p>That structure makes payment operations easier to manage.</p>

        <h3>Why teams use virtual cards</h3>
        <p>Most teams use virtual cards for three reasons:</p>

        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-zinc-200 font-bold mb-2 text-base">Better control</h4>
            <p className="text-zinc-400 text-sm m-0">Separate ad spend, travel spending, and recurring services instead of mixing them all together.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">👁️</div>
            <h4 className="text-zinc-200 font-bold mb-2 text-base">Better visibility</h4>
            <p className="text-zinc-400 text-sm m-0">Understand which vendor or workflow is attached to each card.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-zinc-200 font-bold mb-2 text-base">Better containment</h4>
            <p className="text-zinc-400 text-sm m-0">If one billing issue occurs, you only need to update the affected workflow.</p>
          </div>
        </div>

        <h3>Common use cases</h3>

        <h4>Ad Spend Management</h4>
        <p>Use a card for an ad account, platform, or buying workflow. <a href="/use-cases/ad-spend-management">Learn more →</a></p>

        <h4>Travel Spend Management</h4>
        <p>Separate bookings and travel-related vendors from other company expenses. <a href="/use-cases/travel-spend-management">Learn more →</a></p>

        <h4>Online Service Subscriptions</h4>
        <p>Assign cards to recurring tools or service vendors so renewals stay clearer. <a href="/use-cases/online-service-subscriptions">Learn more →</a></p>

        <h3>What virtual cards are not</h3>
        <p>Virtual cards are not a replacement for sensible payment governance.</p>
        <p>They work best when paired with:</p>
        <ul>
          <li>clear ownership</li>
          <li>spending rules</li>
          <li>supported use-case boundaries</li>
          <li>documented review and support policies</li>
        </ul>
      </div>

      <CTASection 
        title="Ready to explore virtual card workflows?"
        description="See how CardsFlow helps teams structure ad spend, travel, and subscription billing."
        primaryCtaText="Explore Use Cases"
        primaryCtaLink="/use-cases"
        secondaryCtaText="Get Started"
        secondaryCtaLink="/onboarding"
      />

      <RelatedLinksModule 
        links={[
          { title: "Ad Spend Management", href: "/use-cases/ad-spend-management" },
          { title: "Travel Spend Management", href: "/use-cases/travel-spend-management" },
          { title: "Online Subscriptions", href: "/use-cases/online-service-subscriptions" },
          { title: "Trust Center", href: "/trust" }
        ]} 
      />
    </SubPageLayout>
  );
}
