import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Fees & Disclosures | CardsFlow",
  description: "Review fees, accepted payment methods, supported workflows, and service disclosures.",
};

export default function feesanddisclosuresPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Fees & Disclosures"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This page explains how CardsFlow presents pricing, accepted payment methods, supported workflows, and service disclosures.
        </p>

        <h3>What users should review before purchase</h3>
        <p>Before using CardsFlow, users should review:</p>
        <ul>
          <li>applicable account or access fees</li>
          <li>virtual card creation or operational fees</li>
          <li>funding or currency disclosures</li>
          <li>supported payment workflows</li>
          <li>product limitations and service boundaries</li>
        </ul>

        <h3>Supported use cases</h3>
        <p>CardsFlow is designed for lawful, clearly defined payment workflows such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>If a use case falls outside these categories, users should review the support and policy documentation before relying on the service.</p>

        <h3>Payment methods and availability</h3>
        <p>CardsFlow relies on secure, decentralized infrastructure. Please review our current funding and operational models:</p>
        <ul>
          <li><strong>Accepted Funding Methods:</strong> Exclusive use of USDT over the TRC20 network.</li>
          <li><strong>Supported Currencies:</strong> USD-pegged workflows managed via Tether (USDT).</li>
          <li><strong>Operational Fees:</strong> A standard 4% withdrawal / manual processing fee applies to refund transactions.</li>
          <li><strong>Access Requirements:</strong> Verified account access required for corporate issuance.</li>
        </ul>

        <h3>Important disclosure notes</h3>
        <p>This service should be evaluated based on the actual workflow it supports. Users should not assume that one payment setup is automatically appropriate for every purchasing context.</p>
        <p>When in doubt, consult the support and policy documentation before starting.</p>
      </div>
      <RelatedLinksModule 
        links={[
          { title: "Trust Center", href: "/trust" },
          { title: "Contact Support", href: "/trust/support-and-escalations" }
        ]} 
      />
    </SubPageLayout>
  );
}
