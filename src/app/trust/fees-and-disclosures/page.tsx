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
          This page explains how Cardsflow presents pricing, accepted payment methods, supported workflows, and service disclosures.
        </p>

        <h3>What users should review before purchase</h3>
        <p>Before using Cardsflow, users should review:</p>
        <div className="not-prose bg-white/5 border border-white/10 rounded-2xl p-6 my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><span className="text-zinc-500 block mb-1">Deposit Fee</span><span className="text-zinc-200 font-semibold">Zero</span></div>
            <div><span className="text-zinc-500 block mb-1">Card Issuance Fee</span><span className="text-zinc-200 font-semibold">$5 per card</span></div>
            <div><span className="text-zinc-500 block mb-1">Monthly Fee</span><span className="text-zinc-200 font-semibold">None</span></div>
            <div><span className="text-zinc-500 block mb-1">Minimum Deposit</span><span className="text-zinc-200 font-semibold">$60</span></div>
            <div className="sm:col-span-2"><span className="text-zinc-500 block mb-1">Max Monthly Spend per Card</span><span className="text-zinc-200 font-semibold">$200,000</span></div>
          </div>
        </div>

        <h4>Top-Up Fees</h4>
        <p>Transparent tiered fees applied as follows:</p>
        <div className="not-prose bg-white/5 border border-white/10 rounded-2xl p-6 my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-zinc-400 pb-3 font-medium">Amount Range</th>
                <th className="text-right text-zinc-400 pb-3 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody className="text-zinc-200">
              <tr className="border-b border-white/5">
                <td className="py-3">$60 – $1,999</td>
                <td className="py-3 text-right font-semibold">Flat 7%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3">$2,000 – $4,999</td>
                <td className="py-3 text-right font-semibold">Flat 6%</td>
              </tr>
              <tr>
                <td className="py-3">&gt;$5,000</td>
                <td className="py-3 text-right font-semibold">Flat 5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Supported use cases</h3>
        <p>Cardsflow is designed for lawful, clearly defined payment workflows such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>If a use case falls outside these categories, users should review the support and policy documentation before relying on the service.</p>

        <h3>Payment methods and availability</h3>
        <p>Cardsflow relies on secure, decentralized infrastructure. Please review our current funding and operational models:</p>
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
          { title: "Support & Escalations", href: "/trust/support-and-escalations" },
          { title: "Use Cases", href: "/use-cases" }
        ]} 
      />
    </SubPageLayout>
  );
}
