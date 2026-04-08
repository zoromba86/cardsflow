import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Prohibited Use | CardsFlow",
  description: "Review unsupported, restricted, and prohibited uses of our virtual card service and supported payment workflows.",
};

export default function ProhibitedUsePage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Prohibited Use"
        supportCopy="Clear boundaries around what Cardsflow does and does not support."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This page explains the types of activity that are prohibited, unsupported, or outside the intended scope of Cardsflow.
        </p>

        <p>Our product is designed for lawful, clearly defined payment workflows such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>Use outside those boundaries may be restricted, unsupported, reviewed manually, or refused.</p>

        <h3>Why this page exists</h3>
        <p>Payment products require clear boundaries. Not every online payment workflow is appropriate for every payment method, and not every request is compatible with our product scope, service rules, or risk standards.</p>
        <p>We publish this page so users can understand where the product fits — and where it does not.</p>

        <h3>Prohibited use categories</h3>
        <p>The following categories are prohibited or unsupported on Cardsflow.</p>

        <h4>1. Illegal activity</h4>
        <p>You may not use Cardsflow for any unlawful activity, including the purchase of illegal goods or services, fraudulent activity, or transactions that violate applicable law or regulation.</p>

        <h4>2. Deceptive or misleading payment behavior</h4>
        <p>You may not use Cardsflow to misrepresent identity, conceal unauthorized activity, create deceptive billing patterns, or otherwise engage in misleading payment behavior.</p>

        <h4>3. Sanctions, restricted jurisdictions, or prohibited counterparties</h4>
        <p>You may not use Cardsflow in connection with sanctioned persons, prohibited jurisdictions, restricted entities, or any transaction that would create legal or regulatory exposure for the service.</p>

        <h4>4. Fraud, abuse, or unauthorized use</h4>
        <p>You may not use Cardsflow for:</p>
        <ul>
          <li>stolen or unauthorized funds</li>
          <li>card testing</li>
          <li>payment abuse</li>
          <li>refund or chargeback abuse</li>
          <li>account takeover activity</li>
          <li>attempts to bypass service restrictions</li>
        </ul>

        <h4>5. Unsupported high-risk categories</h4>
        <p>Some merchant categories, purchase categories, or operational uses may be unsupported even if they are lawful in some contexts. If a use case is not clearly listed as supported, you should contact support before relying on the service.</p>

        <h4>6. Resale, sublicensing, or third-party misuse without authorization</h4>
        <p>You may not provide access to Cardsflow in a way that transfers responsibility to unauthorized third parties or uses the service outside the intended account structure.</p>

        <h3>Supported use cases</h3>
        <p>At this time, our content and product positioning focus on a defined set of supported workflows:</p>
        <ul>
          <li><a href="/use-cases/ad-spend-management">ad spend management</a></li>
          <li><a href="/use-cases/travel-spend-management">travel spend management</a></li>
          <li><a href="/use-cases/online-service-subscriptions">online service subscriptions</a></li>
        </ul>
        <p>If your use case differs materially from these categories, review all support and policy pages before proceeding.</p>

        <h3>What happens if prohibited use is detected</h3>
        <p>If we detect or reasonably suspect prohibited, abusive, or unsupported use, we may take action including:</p>
        <ul>
          <li>requesting clarification or documentation</li>
          <li>limiting account access</li>
          <li>refusing a transaction or workflow</li>
          <li>suspending or terminating service access</li>
          <li>escalating the matter for review where appropriate</li>
        </ul>

        <h3>If you are unsure whether a use case is allowed</h3>
        <p>If you are uncertain whether your intended workflow is supported, contact us before relying on the service.</p>
        <p><strong>Support email:</strong> support@cardsflow.net</p>
        <p><strong>Support page:</strong> <a href="/trust/support-and-escalations">/trust/support-and-escalations/</a></p>

        <div className="h-px w-full bg-white/10 my-8"></div>
        <p className="text-sm text-zinc-500 italic">Last updated: April 2026</p>
      </div>
      <RelatedLinksModule 
        links={[
          { title: "Trust Center", href: "/trust" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Security & Data Handling", href: "/trust/security-and-data-handling" },
          { title: "Support & Escalations", href: "/trust/support-and-escalations" }
        ]} 
      />
    </SubPageLayout>
  );
}
