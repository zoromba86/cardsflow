import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "How We Review Content | CardsFlow",
  description: "Learn how we research, write, review, and update content related to virtual cards, payment workflows, and supported use cases.",
};

export default function HowWeReviewContentPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="How We Review Content"
        supportCopy="Transparency in how we create, review, and maintain payment-related content."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="lead text-xl text-zinc-300">
          This page explains how Cardsflow creates, reviews, and updates the content published on this site.
        </p>

        <p>Our goal is to make payment-related information clear, practical, and easy to evaluate. Because people use this content to make operational and financial decisions, we aim to present information in a way that is transparent, responsibly scoped, and easy to verify.</p>

        <h3>What this content is designed to do</h3>
        <p>Our content is designed to help users understand:</p>
        <ul>
          <li>how virtual cards work in supported workflows</li>
          <li>when a structured payment setup may be useful</li>
          <li>how different spending categories can be separated more clearly</li>
          <li>where to find product boundaries, support information, and disclosures</li>
        </ul>
        <p>Our content is <strong>not</strong> designed to replace legal, tax, accounting, compliance, or other professional advice.</p>

        <h3>Our content principles</h3>

        <h4>1. Clarity over hype</h4>
        <p>We aim to explain products and workflows in plain language. Where possible, we prefer direct explanations over exaggerated claims, vague positioning, or overly promotional language.</p>

        <h4>2. Supported workflows only</h4>
        <p>We write about the workflows this product is actually designed to support. If a topic falls outside supported use cases, we aim to say so clearly rather than imply coverage we do not intend to provide.</p>

        <h4>3. Boundaries matter</h4>
        <p>Where a payment workflow carries risk, limitations, or unsupported assumptions, we try to include those boundaries directly on the page. We believe trust improves when pages explain <strong>what a product is for</strong> and <strong>what it is not for</strong>.</p>

        <h4>4. Review ownership is visible</h4>
        <p>Editorial and trust-sensitive pages should identify the responsible author, reviewer, and update date where applicable. This helps users evaluate whether content is current, relevant, and connected to a real review process.</p>

        <h3>How content is created</h3>
        <p>Our process generally follows these steps:</p>

        <h4>Research</h4>
        <p>We identify the core question a user is trying to answer and map it to a supported workflow or policy area.</p>

        <h4>Drafting</h4>
        <p>A writer creates the first version with a focus on:</p>
        <ul>
          <li>direct answers</li>
          <li>practical explanations</li>
          <li>workflow clarity</li>
          <li>realistic limitations</li>
        </ul>

        <h4>Review</h4>
        <p>A reviewer checks the page for:</p>
        <ul>
          <li>accuracy against the current product and policy scope</li>
          <li>consistency with trust and support documentation</li>
          <li>clarity of wording</li>
          <li>unsupported claims or ambiguous statements</li>
        </ul>

        <h4>Update</h4>
        <p>We revise pages when:</p>
        <ul>
          <li>product capabilities change</li>
          <li>fees or disclosures change</li>
          <li>support policies change</li>
          <li>a page becomes outdated or unclear</li>
          <li>a workflow needs clearer boundaries</li>
        </ul>

        <h3>What we do not do</h3>
        <p>We do not intentionally publish content that:</p>
        <ul>
          <li>misrepresents product capabilities</li>
          <li>suggests unsupported or prohibited uses are acceptable</li>
          <li>hides important limitations</li>
          <li>implies legal, compliance, or professional advice where none is being given</li>
          <li>uses vague claims in place of real explanation</li>
        </ul>

        <h3>How to report an issue</h3>
        <p>If you believe a page is unclear, outdated, incomplete, or inaccurate, please contact us:</p>
        <p><strong>Support email:</strong> support@cardsflow.net</p>
        <p><strong>Support page:</strong> <a href="/trust/support-and-escalations">/trust/support-and-escalations/</a></p>
        <p>Please include:</p>
        <ul>
          <li>the page URL</li>
          <li>the issue you noticed</li>
          <li>any correction or clarification you recommend</li>
        </ul>

        <div className="h-px w-full bg-white/10 my-8"></div>
        <p className="text-sm text-zinc-500 italic">Last updated: April 2026</p>
      </div>
      <RelatedLinksModule 
        links={[
          { title: "Trust Center", href: "/trust" },
          { title: "Prohibited Use", href: "/trust/prohibited-use" },
          { title: "Security & Data Handling", href: "/trust/security-and-data-handling" },
          { title: "Support & Escalations", href: "/trust/support-and-escalations" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" }
        ]} 
      />
    </SubPageLayout>
  );
}
