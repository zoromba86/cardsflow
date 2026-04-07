import React from "react";
import { Metadata } from "next";
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
  title: "How Virtual Cards Work for Online Payments | CardsFlow",
  description: "A complete guide to how virtual cards process online payments behind the scenes, from authorization to settlement.",
};

export default function howvirtualcardsworkforonlinepaymentsPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="How Virtual Cards Work for Online Payments"
        supportCopy="A complete guide to how virtual cards process online payments behind the scenes, from authorization to settlement."
        primaryCtaText="Get Started"
        primaryCtaLink="/onboarding"
        secondaryCtaText="View Demo"
      />
      
      <DirectAnswerBlock>
        To effectively manage how virtual cards work for online payments, a virtual card provides isolated risk, strict spending limits, and transparent tracking compared to traditional shared physical cards.
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
