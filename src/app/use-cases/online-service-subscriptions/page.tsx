import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { SubPageLayout } from "@/components/layout";
import { 
  HeroSection, 
  DirectAnswerBlock, 
  UseCaseCardGrid, 
  ProblemSolutionSection, 
  RecommendationCallout, 
  CTASection, 
  HowItWorksSteps 
} from "@/components/blocks";
import { Check, Compass, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Managing Online Service Subscriptions | CardsFlow",
  description: "Avoid auto-renewal traps. See how virtual cards with rigid limits can enforce subscription scopes automatically.",
};

export default function onlineservicesubscriptionsPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Managing Online Service Subscriptions"
        supportCopy="Avoid auto-renewal traps. See how virtual cards with rigid limits can enforce subscription scopes automatically."
        primaryCtaText="Get Started"
        primaryCtaLink="/onboarding"
        secondaryCtaText="View Demo"
        secondaryCtaLink="/contact"
      />
      
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 -mt-12 sm:-mt-20 z-10 relative mb-16">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1B2D]">
          <Image 
            src="/use-cases/subscriptions.png" 
            alt="Online Subscriptions Management Dashboard" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <DirectAnswerBlock>
        To effectively manage managing online service subscriptions, a virtual card provides isolated risk, strict spending limits, and transparent tracking compared to traditional shared physical cards.
      </DirectAnswerBlock>

      <UseCaseCardGrid 
        cards={[
          { title: "Risk Isolation", description: "Keep spending channels completely separate.", icon: <Shield />, href: "#" },
          { title: "Limit Controls", description: "Enforce hard budget limits per campaign or trip.", icon: <Zap />, href: "#" },
          { title: "Global Acceptance", description: "Works wherever standard credit cards are accepted.", icon: <Compass />, href: "#" }
        ]}
      />

      <ProblemSolutionSection
        problemIntro="Traditional cards create systemic risk. When one vendor breaches a shared card, every other vendor payment fails while you wait for a replacement."
        painPoints={["Single point of failure", "Uncontrolled auto-renewals", "Complex expense reconciliation"]}
        recommendedSetupTitle="The Isolated Virtual Workflow"
        recommendedSetupContent={
          <>
            <p>Generate a unique 16-digit card for every single vendor or ad platform.</p>
            <ul>
              <li>If the card is compromised, freeze it instantly.</li>
              <li>Other platforms are completely unaffected.</li>
            </ul>
          </>
        }
      />

      <RecommendationCallout>
        Always set a hard budget limit slightly above the expected spend to allow for authorization holds without exposing the underlying account.
      </RecommendationCallout>

      <CTASection 
        title="Ready to secure your workflow?"
        description="Join thousands of businesses doing this every day."
        primaryCtaText="Start Now"
        primaryCtaLink="/register"
        secondaryCtaText="Talk to Sales"
        secondaryCtaLink="/contact"
        proofPoint="Used by over 10,000 agencies worldwide."
      />

    </SubPageLayout>
  );
}
