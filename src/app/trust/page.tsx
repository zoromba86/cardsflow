import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RelatedLinksModule } from "@/components/blocks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust Center | CardsFlow",
  description: "Learn how we review content, define supported use cases, explain fees, and document risk boundaries.",
};

export default function TrustCenterPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Trust Center"
        supportCopy="CardsFlow policies and documentation for users and partners."
      />
      <DirectAnswerBlock>
        This Trust Center explains how CardsFlow presents information, how supported use cases are defined, where fees and disclosures are published, and how users can evaluate the service responsibly.
      </DirectAnswerBlock>
      
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <h2>Why this page exists</h2>
        <p>Payment-related decisions deserve more clarity than ordinary content categories. That means users should be able to understand:</p>
        <ul>
          <li>who is behind the site</li>
          <li>how content is reviewed</li>
          <li>what the product is designed for</li>
          <li>what the product is not designed for</li>
          <li>how support works</li>
          <li>where pricing and disclosures are documented</li>
        </ul>

        <h2>What you'll find here</h2>
        <h3>Content review standards</h3>
        <p>How educational and decision-support content is written, reviewed, and updated.</p>

        <h3>Supported use cases</h3>
        <p>The workflows this product is designed to support, including ad spend, travel spend, and online service subscriptions.</p>

        <h3>Prohibited or unsupported use</h3>
        <p>Clear boundaries around misuse, unsupported activity, and service limitations.</p>

        <h3>Fees and disclosures</h3>
        <p>Transparent information about fees, accepted payment methods, and relevant commercial details.</p>

        <h3>Security and data handling</h3>
        <p>How operational and user-facing information is handled.</p>

        <h3>Support and escalation</h3>
        <p>Where users go when they need help, clarification, or issue resolution.</p>
        
        <h2>Linked trust resources</h2>
        <ul>
          <li><Link href="/trust/fees-and-disclosures/">Fees and disclosures</Link></li>
          <li><Link href="/trust/how-we-review-content/">How we review content</Link></li>
          <li><Link href="/trust/prohibited-use/">Prohibited use</Link></li>
          <li><Link href="/trust/security-and-data-handling/">Security and data handling</Link></li>
          <li><Link href="/trust/support-and-escalations/">Support and escalations</Link></li>
        </ul>
      </div>

    </SubPageLayout>
  );
}
