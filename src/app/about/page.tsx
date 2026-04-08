import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, CTASection } from "@/components/blocks";

export const metadata: Metadata = {
  title: "About Us | CardsFlow",
  description: "Learn about CardsFlow and our mission to provide financial compartmentalization infrastructure for the global subscription economy.",
};

export default function AboutPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="About Cardsflow"
        supportCopy="We don't just sell virtual cards. We provide financial compartmentalization infrastructure for the global subscription economy."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <p>
          The modern digital landscape is defined by recurring payments, access-over-ownership models, and SaaS platforms. The global subscription economy is projected to grow from $557.8 billion in 2025 to a staggering $1,944.4 billion by 2035, with B2B models leading the market. Today, the average consumer manages roughly 8.2 active subscriptions. However, tying a primary bank account or physical credit card to dozens of disparate digital platforms creates severe vulnerabilities. Between aggressive auto-renewals, unpredictable SaaS billing, and massive cyber events—like the recent 2025 breaches that exposed partial credit card data across major tech platforms and retailers traditional payment methods are no longer sufficient to protect your capital.
        </p>
        <p>
          This is the exact problem Cardsflow solves. True financial security requires strict compartmentalization. We empower users to proactively isolate their digital spending by generating tokenized, reloadable, and merchant-locked virtual payment rails. This infrastructure provides unparalleled financial agility, allowing businesses and individuals to issue reloadable cards for one-off payments and use strict rules to limit exactly where a card functions.
        </p>
        <p>
          Whether you are a digital marketer segregating ad account spend to prevent cross-platform bans, a privacy-conscious consumer protecting your identity from data brokers, or an enterprise managing global SaaS procurement, our tools give you absolute operational control. We operate on the foundational principle of privacy-preserving security, shielding your underlying financial identity while providing the frictionless payment capabilities the modern web demands.
        </p>
        <p className="text-xl font-medium text-white/90">
          Welcome to the secure routing layer for the future of online commerce. Welcome to Cardsflow.
        </p>
      </div>
      <CTASection 
        title="Ready to secure your workflow?"
        description="Join thousands of businesses doing this every day."
        primaryCtaText="Get Started"
        primaryCtaLink="/onboarding"
        secondaryCtaText="View Use Cases"
        secondaryCtaLink="/use-cases"
      />
    </SubPageLayout>
  );
}
