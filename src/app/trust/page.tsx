import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Trust Center | CardsFlow",
  description: "Learn how we review content, define supported use cases, explain fees, and document risk boundaries.",
};

export default function trustPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Trust Center"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This Trust Center explains how Cardsflow presents information, how supported use cases are defined, where fees and disclosures are published, and how users can evaluate the service responsibly.
        </p>

        <h3>Why this page exists</h3>
        <p>Payment-related decisions deserve more clarity than ordinary content categories. That means users should be able to understand:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>who is behind the site</li>
          <li>how content is reviewed</li>
          <li>what the product is designed for</li>
          <li>what the product is not designed for</li>
          <li>how support works</li>
          <li>where pricing and disclosures are documented</li>
        </ul>

        <div className="h-px w-full bg-white/10 my-8"></div>

        <h3>What you&apos;ll find here</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Content review standards</h4>
            <p className="m-0 text-sm">How educational and decision-support content is written, reviewed, and updated.</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Supported use cases</h4>
            <p className="m-0 text-sm">The workflows this product is designed to support, including ad spend, travel spend, and online service subscriptions.</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Prohibited or unsupported use</h4>
            <p className="m-0 text-sm">Clear boundaries around misuse, unsupported activity, and service limitations.</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Fees and disclosures</h4>
            <p className="m-0 text-sm">Transparent information about fees, accepted payment methods, and relevant commercial details.</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Security and data handling</h4>
            <p className="m-0 text-sm">How operational and user-facing information is handled.</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 m-0 mb-2"><span className="text-[#E5B220]">■</span> Support and escalation</h4>
            <p className="m-0 text-sm">Where users go when they need help, clarification, or issue resolution.</p>
          </div>
        </div>
      </div>
      <RelatedLinksModule
        links={[
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "How We Review Content", href: "/trust/how-we-review-content" },
          { title: "Prohibited Use", href: "/trust/prohibited-use" },
          { title: "Security & Data Handling", href: "/trust/security-and-data-handling" },
          { title: "Support & Escalations", href: "/trust/support-and-escalations" }
        ]}
      />
    </SubPageLayout>
  );
}
