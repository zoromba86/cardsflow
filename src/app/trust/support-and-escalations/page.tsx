import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Support & Escalations | CardsFlow",
  description: "Learn how to contact support, what information to include in requests, and how account, billing, and urgent issues are escalated.",
};

export default function SupportAndEscalationsPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Support & Escalations"
        supportCopy="How to get help, what to include, and how issues are prioritized."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This page explains how to contact Cardsflow support, what details to include in your request, and how issues are prioritized or escalated.
        </p>

        <p>Our goal is to make support requests easier to route and easier to resolve.</p>

        <h3>How to contact support</h3>
        <div className="not-prose bg-white/5 border border-white/10 rounded-2xl p-6 my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><span className="text-zinc-500 block mb-1">Email</span><span className="text-zinc-200">support@cardsflow.net</span></div>
            <div><span className="text-zinc-500 block mb-1">Support Hours</span><span className="text-zinc-200">24/7</span></div>
            <div><span className="text-zinc-500 block mb-1">Primary Channel</span><span className="text-zinc-200">Live chat or through our social media official channels</span></div>
          </div>
        </div>
        <p>If you have an urgent issue, include <strong>&quot;URGENT&quot;</strong> in the subject line and provide the most relevant details upfront.</p>

        <h3>What to include in a support request</h3>
        <p>To help us respond faster, include:</p>
        <ul>
          <li>your account email or identifier</li>
          <li>the page, workflow, or vendor involved</li>
          <li>a short description of the issue</li>
          <li>when the issue occurred</li>
          <li>any relevant screenshots or context, if appropriate</li>
        </ul>
        <p>The more clearly a request is described, the faster it can usually be routed.</p>

        <h3>Common support categories</h3>

        <h4>Product questions</h4>
        <p>Use this category if you need help understanding:</p>
        <ul>
          <li>supported use cases</li>
          <li>workflow fit</li>
          <li>product boundaries</li>
          <li>feature-related questions</li>
        </ul>

        <h4>Billing or payment questions</h4>
        <p>Use this category if your question relates to:</p>
        <ul>
          <li>payment workflows</li>
          <li>fees and disclosures</li>
          <li>billing behavior</li>
          <li>a charge or payment issue that needs review</li>
        </ul>

        <h4>Account access or operational concerns</h4>
        <p>Use this category if you need help with:</p>
        <ul>
          <li>account access problems</li>
          <li>changes to account ownership or administration</li>
          <li>suspicious activity or urgent workflow concerns</li>
        </ul>

        <h3>Escalation paths</h3>
        <p>Not every issue is handled the same way. Depending on the issue, requests may be escalated to:</p>
        <ul>
          <li>support operations</li>
          <li>payment operations review</li>
          <li>account review</li>
          <li>policy or compliance review</li>
          <li>technical investigation</li>
        </ul>

        <h3>What counts as urgent</h3>
        <p>Examples of urgent issues may include:</p>
        <ul>
          <li>suspected unauthorized access</li>
          <li>an active account or payment issue affecting time-sensitive workflows</li>
          <li>a support issue where immediate review is necessary to prevent wider disruption</li>
        </ul>
        <p>For urgent concerns, contact support immediately and provide a short, clear summary.</p>

        <h3>Response expectations</h3>
        <p>Response times may vary depending on:</p>
        <ul>
          <li>issue type</li>
          <li>urgency</li>
          <li>account status</li>
          <li>completeness of the information provided</li>
          <li>whether escalation is required</li>
        </ul>
        <p>Where possible, we aim to acknowledge requests promptly and provide clear next steps when further review is needed.</p>

        <h3>Before you contact support</h3>
        <p>Please review the following pages first if your question is policy or workflow-related:</p>
        <ul>
          <li><a href="/trust/fees-and-disclosures">Fees & Disclosures</a></li>
          <li><a href="/trust/prohibited-use">Prohibited Use</a></li>
          <li><a href="/trust/how-we-review-content">How We Review Content</a></li>
          <li><a href="/use-cases">Use Cases</a></li>
        </ul>
        <p>Many common questions can be resolved faster when the relevant documentation is reviewed first.</p>

        <div className="h-px w-full bg-white/10 my-8"></div>
        <p className="text-sm text-zinc-500 italic">Last updated: April 2026</p>
      </div>
      <RelatedLinksModule 
        links={[
          { title: "Trust Center", href: "/trust" },
          { title: "Security & Data Handling", href: "/trust/security-and-data-handling" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Prohibited Use", href: "/trust/prohibited-use" }
        ]} 
      />
    </SubPageLayout>
  );
}
