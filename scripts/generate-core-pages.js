const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(srcDir, 'app');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const corePages = [
  {
    slug: 'use-cases/ad-spend-management',
    title: 'Ad Spend Management with Virtual Cards',
    meta: 'Learn how to manage ad spend securely. Keep Facebook, Google, and LinkedIn campaigns running even if a card gets flagged.',
    schemaType: 'Article',
  },
  {
    slug: 'use-cases/travel-spend-management',
    title: 'Travel Spend Management with Virtual Cards',
    meta: 'Learn to use virtual cards for corporate travel. Control limits safely for flights, hotels, and on-site expenses without physical cards.',
    schemaType: 'Article',
  },
  {
    slug: 'use-cases/online-service-subscriptions',
    title: 'Managing Online Service Subscriptions',
    meta: 'Avoid auto-renewal traps. See how virtual cards with rigid limits can enforce subscription scopes automatically.',
    schemaType: 'Article',
  },
  {
    slug: 'compare/virtual-card-vs-shared-team-card-for-ad-spend',
    title: 'Virtual Card vs Shared Team Card for Ad Spend',
    meta: 'Compare virtual cards and shared physical cards for paying ad platforms. Which reduces disruption risk better?',
    schemaType: 'Article',
  },
  {
    slug: 'compare/virtual-card-vs-corporate-card-for-travel-spend',
    title: 'Virtual Card vs Corporate Card for Travel',
    meta: 'Compare virtual cards to traditional physical corporate cards for SaaS and travel expenses.',
    schemaType: 'Article',
  },
  {
    slug: 'guides/how-virtual-cards-work-for-online-payments',
    title: 'How Virtual Cards Work for Online Payments',
    meta: 'A complete guide to how virtual cards process online payments behind the scenes, from authorization to settlement.',
    schemaType: 'Article',
  },
  {
    slug: 'guides/how-to-manage-online-service-renewals',
    title: 'How to Manage Online Service Renewals',
    meta: 'Step-by-step guide to locking down vendor billing and organizing subscriptions so you never pay for an unwanted renewal.',
    schemaType: 'Article',
  },
];

corePages.forEach(page => {
  const pageDir = path.join(appDir, page.slug);
  ensureDir(pageDir);
  const pageContent = `import React from "react";
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
  title: "${page.title} | CardsFlow",
  description: "${page.meta}",
};

export default function ${page.slug.split('/').pop().replace(/-/g, '')}Page() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="${page.title}"
        supportCopy="${page.meta}"
        primaryCtaText="Get Started"
        primaryCtaLink="/onboarding"
        secondaryCtaText="View Demo"
      />
      
      <DirectAnswerBlock>
        To effectively manage ${page.title.toLowerCase()}, a virtual card provides isolated risk, strict spending limits, and transparent tracking compared to traditional shared physical cards.
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
`;
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
  console.log('Generated', page.slug);
});
