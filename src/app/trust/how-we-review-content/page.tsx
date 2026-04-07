import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "How We Review Content | CardsFlow",
  description: "Learn how we research, write, review, and update content related to virtual cards, payment workflows, and supported use cases.",
};

export default function howwereviewcontentPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="How We Review Content"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <p>This is the placeholder for the full How We Review Content text.</p>
        <h2>Detailed Section</h2>
        <p>Content to be added here based on the site materials document.</p>
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
