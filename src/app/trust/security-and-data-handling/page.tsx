import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Security & Data Handling | CardsFlow",
  description: "Learn how we think about account protection, operational safeguards, and handling the information users share with us.",
};

export default function securityanddatahandlingPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Security & Data Handling"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This page explains how Cardsflow approaches account protection, operational safeguards, and the handling of user information.
        </p>

        <p>We aim to keep this page practical and readable. It is intended to help users understand the kinds of safeguards we use, the limits of those safeguards, and the steps users should take to protect their own accounts and workflows.</p>

        <h3>What this page covers</h3>
        <p>This page provides a general overview of:</p>
        <ul>
          <li>account access protection</li>
          <li>operational controls</li>
          <li>user-submitted information</li>
          <li>support-related information handling</li>
          <li>practical user responsibilities</li>
        </ul>
        <p>This page does <strong>not</strong> replace the full <a href="/legal/privacy">Privacy Policy</a>, <a href="/legal/terms">Terms</a>, or any legally required disclosures.</p>

        <h3>Our general approach</h3>
        <p>We aim to reduce risk by combining:</p>
        <ul>
          <li>clear product boundaries</li>
          <li>limited workflow scope</li>
          <li>controlled support processes</li>
          <li>responsible access practices</li>
          <li>internal review for trust-sensitive content and policies</li>
        </ul>
        <p>Security is not just a technical issue. It also depends on how clearly a product is scoped, how support is handled, and whether users follow good account practices.</p>

        <h3>Information users may share with us</h3>
        <p>Depending on the workflow, users may provide information such as:</p>
        <ul>
          <li>account contact details</li>
          <li>support requests</li>
          <li>billing or workflow questions</li>
          <li>product feedback</li>
          <li>limited operational information needed to resolve issues</li>
        </ul>
        <p>We try to limit information collection to what is reasonably necessary for support, operations, and service delivery.</p>

        <h3>How we handle operational and support information</h3>
        <p>We aim to handle account and support-related information in a way that is:</p>
        <ul>
          <li>limited to the purpose of the request</li>
          <li>reviewed only by appropriate personnel</li>
          <li>retained according to internal policy or legal requirements</li>
          <li>not used beyond the legitimate operation of the service</li>
        </ul>
        <p>Where possible, users should avoid sharing unnecessary sensitive information in open support channels.</p>

        <h3>Account protection: what users should do</h3>
        <p>Users should take reasonable steps to protect their own accounts and workflows, including:</p>
        <ul>
          <li>using strong, unique passwords</li>
          <li>limiting who has access to operational tools</li>
          <li>reviewing payment workflows regularly</li>
          <li>avoiding shared credentials</li>
          <li>contacting support promptly when suspicious activity appears</li>
        </ul>

        <h3>Important limitation</h3>
        <p>No online system can promise zero risk.</p>
        <p>We aim to reduce risk through product design, operational controls, and support processes, but users should still evaluate whether the service is appropriate for their specific workflow and risk tolerance.</p>

        <h3>If you need help with a security or account concern</h3>
        <p>If you believe there is an account issue, security concern, or operational problem that requires attention, please contact support as soon as possible.</p>
        <p><strong>Support email:</strong> support@cardsflow.net</p>
        <p><strong>Support page:</strong> <a href="/trust/support-and-escalations">/trust/support-and-escalations/</a></p>
        <p>If your issue is urgent, include:</p>
        <ul>
          <li>the word &quot;URGENT&quot; in the subject line</li>
          <li>the account email or identifier</li>
          <li>a brief description of the issue</li>
          <li>any relevant timestamps or transaction context</li>
        </ul>

        <div className="h-px w-full bg-white/10 my-8"></div>
        <p className="text-sm text-zinc-500 italic">Last updated: April 2026</p>
      </div>
      <RelatedLinksModule
        links={[
          { title: "Trust Center", href: "/trust" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Support & Escalations", href: "/trust/support-and-escalations" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Terms of Service", href: "/legal/terms" }
        ]}
      />
    </SubPageLayout>
  );
}
