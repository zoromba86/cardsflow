import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Refund Policy | CardsFlow",
  description: "Learn about Cardsflow refund policy, processes, fees, and requirements.",
};

export default function RefundPolicyPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Refund Policy"
        supportCopy="Information regarding our manual refund processes and applicable withdrawal fees."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <h2>Manual Processing & Timeframes</h2>
        <p>
          Cardsflow processes refunds manually. Processing time typically ranges from <strong>one day to the next business day</strong>, subject to our internal review and network confirmations.
        </p>

        <h2>Fees & Deductions</h2>
        <p>
          Please be advised that all approved refunds are subject to the following deductions:
        </p>
        <ul>
          <li><strong>Withdrawal Fee:</strong> 4%</li>
          <li><strong>Standard Transaction Fee:</strong> Applied based on network usage</li>
        </ul>

        <h2>Network Requirements</h2>
        <p>
          To ensure clarity and operational efficiency in a globally accessible cryptocurrency framework, we restrict our refund disbursements to a single supported network.
        </p>
        <div className="p-4 bg-zinc-800/50 rounded-lg border border-amber-500/20 text-emerald-400">
          <p className="m-0 font-medium">We strictly process and send refunds <strong>only in USDT via the TRON network (TRC20)</strong>.</p>
        </div>
      </div>
      
      <RelatedLinksModule 
        links={[
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Cardholder Terms", href: "/legal/terms" },
          { title: "Contact Support", href: "/trust/support-and-escalations" }
        ]} 
      />
    </SubPageLayout>
  );
}
