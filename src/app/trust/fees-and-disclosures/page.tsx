import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Fees & Disclosures | CardsFlow",
  description: "Review fees, accepted payment methods, supported workflows, and service disclosures.",
};

export default function FeesAndDisclosuresPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Fees & Disclosures"
        supportCopy="Review fees, accepted payment methods, supported workflows, and service disclosures."
      />
      <DirectAnswerBlock>
        This page explains how CardsFlow presents pricing, accepted payment methods, supported workflows, and service disclosures.
      </DirectAnswerBlock>
      
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <h2>What users should review before purchase</h2>
        <p>Before using CardsFlow, users should review:</p>
        <ul>
          <li>applicable account or access fees</li>
          <li>virtual card creation or operational fees</li>
          <li>funding or currency disclosures</li>
          <li>supported payment workflows</li>
          <li>product limitations and service boundaries</li>
        </ul>

        <h2>Supported use cases</h2>
        <p>CardsFlow is designed for lawful, clearly defined payment workflows such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>If a use case falls outside these categories, users should review the support and policy documentation before relying on the service.</p>

        <h2>Payment methods and availability</h2>
        <ul className="bg-zinc-800/30 p-6 rounded-xl border border-zinc-700/50">
          <li><strong>Accepted Funding:</strong> Bank Transfer (ACH/Wire), major Credit/Debit options</li>
          <li><strong>Supported Currencies:</strong> USD, EUR, GBP (and 30+ regional currencies)</li>
          <li><strong>Supported Regions:</strong> Global merchant acceptance, available for registered businesses worldwide subject to local compliance</li>
          <li><strong>Access Requirements:</strong> Business verification (KYB) and valid identity profile</li>
        </ul>

        <h2>Important disclosure notes</h2>
        <p className="text-zinc-500 italic">
          This service should be evaluated based on the actual workflow it supports. Users should not assume that one payment setup is automatically appropriate for every purchasing context. When in doubt, consult the support and policy documentation before starting.
        </p>
      </div>
      
      <RelatedLinksModule 
        links={[
          { title: "Trust Center", href: "/trust/" },
          { title: "Support and Escalations", href: "/trust/support-and-escalations/" },
          { title: "Explore Use Cases", href: "/use-cases/ad-spend-management" }
        ]} 
      />
    </SubPageLayout>
  );
}
