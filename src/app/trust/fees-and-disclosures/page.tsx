import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Fees & Disclosures | CardsFlow",
  description: "Transparent breakdown of all platform fees, card issuance costs, and transaction charges.",
};

export default function FeesAndDisclosuresPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Fees & Disclosures"
        supportCopy={
          <>
            Two simple ideas keep our pricing honest. <strong>Deposits are free</strong> — you only fund a $60 minimum before your card is issued. <strong>Top-ups are tiered</strong> — once you have a card, every reload follows a declining 7% / 6% / 5% scale starting at a $25 minimum top-up.
          </>
        }
      />
      
      <div className="max-w-5xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6">
            <span className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 block">DEPOSIT FEE</span>
            <span className="text-slate-900 text-3xl font-bold block mb-2">Zero</span>
            <span className="text-slate-600 text-sm">No fees on funding your wallet</span>
          </div>
          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6">
            <span className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 block">MINIMUM DEPOSIT</span>
            <span className="text-slate-900 text-3xl font-bold block mb-2">$60</span>
            <span className="text-slate-600 text-sm">Programmatic floor before issuance</span>
          </div>
          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6">
            <span className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 block">VIRTUAL CARD</span>
            <span className="text-slate-900 text-3xl font-bold block mb-2">$5</span>
            <span className="text-slate-600 text-sm">Issuance fee, one-time</span>
          </div>
          <div className="bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6">
            <span className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 block">PHYSICAL CARD</span>
            <span className="text-slate-900 text-3xl font-bold block mb-2">$50</span>
            <span className="text-slate-600 text-sm">Issuance fee, one-time</span>
          </div>
        </div>

        <h2>Deposit (pre-card funding)</h2>
        <p>
          Funding your CardsFlow wallet carries <strong>no fees</strong>. The only requirement is a $60 minimum so we can issue your CardsFlow Visa. Pay with any supported cryptocurrency — conversion to USD happens automatically.
        </p>

        <div className="not-prose p-5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 mb-12 shadow-sm">
          <p className="m-0 text-sm leading-relaxed">
            <strong>How it works:</strong> send $60 or more in any supported coin. Funds typically credit in minutes. Once credited, you can issue a virtual ($5) or physical ($50) CardsFlow Visa from your dashboard.
          </p>
        </div>

        <h2>Top-up fees (after card issuance)</h2>
        <p>
          Once a card is active, every top-up to that card follows a declining tier fee schedule. The minimum top-up amount is $25.
        </p>

        <div className="not-prose overflow-hidden rounded-2xl border border-slate-200 shadow-sm my-8">
          <table className="w-full text-sm tabular-nums">
            <thead className="bg-slate-900 text-white text-left">
              <tr>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider">Top-up amount</th>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider">Fee</th>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider">Effective fee at floor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-amber-50/50">
                <td className="py-4 px-6 font-medium text-slate-900">$25 — $1,999</td>
                <td className="py-4 px-6 text-slate-700">Flat 7%</td>
                <td className="py-4 px-6 text-slate-700">Min top-up $25</td>
              </tr>
              <tr className="bg-emerald-50/50">
                <td className="py-4 px-6 font-medium text-slate-900">$2,000 — $4,999</td>
                <td className="py-4 px-6 text-slate-700">Flat 6%</td>
                <td className="py-4 px-6 text-slate-700">Tier 2</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="py-4 px-6 font-medium text-slate-900">$5,000 and above</td>
                <td className="py-4 px-6 text-slate-700">Flat 5%</td>
                <td className="py-4 px-6 text-slate-700">Tier 3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
            <span className="text-slate-900 font-bold block mb-1">$25 top-up</span>
            <span className="text-slate-600 text-sm">Tier 1 (7%): fee = <strong>$1.75</strong></span>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
            <span className="text-slate-900 font-bold block mb-1">$500 top-up</span>
            <span className="text-slate-600 text-sm">Tier 1 (7%): fee = <strong>$35</strong></span>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
            <span className="text-slate-900 font-bold block mb-1">$2,500 top-up</span>
            <span className="text-slate-600 text-sm">Tier 2 (6%): fee = <strong>$150</strong></span>
          </div>
          <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-5">
            <span className="text-slate-900 font-bold block mb-1">$5,000 top-up</span>
            <span className="text-slate-600 text-sm">Tier 3 (5%): fee = <strong>$250</strong></span>
          </div>
        </div>

        <h2>Spending & withdrawal limits</h2>
        <div className="not-prose overflow-hidden rounded-2xl border border-slate-200 shadow-sm my-8 mb-16">
          <table className="w-full text-sm tabular-nums">
            <thead className="bg-slate-900 text-white text-left">
              <tr>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider w-1/2">Limit</th>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider w-1/2">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr><td className="py-4 px-6 text-slate-700">Maximum single transaction</td><td className="py-4 px-6 font-medium text-slate-900">$20,000</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Daily spend per card</td><td className="py-4 px-6 font-medium text-slate-900">$100,000</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Monthly spend per card</td><td className="py-4 px-6 font-medium text-slate-900">$1,000,000</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Cards per account</td><td className="py-4 px-6 font-medium text-slate-900">3</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Single ATM withdrawal</td><td className="py-4 px-6 font-medium text-slate-900">$2,500</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Daily ATM withdrawals</td><td className="py-4 px-6 font-medium text-slate-900">6 / day</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Monthly ATM cap</td><td className="py-4 px-6 font-medium text-slate-900">$100,000</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Card validity</td><td className="py-4 px-6 font-medium text-slate-900">5 years from issuance</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Other charges</h2>
        <div className="not-prose overflow-hidden rounded-2xl border border-slate-200 shadow-sm my-8 mb-16">
          <table className="w-full text-sm tabular-nums">
            <thead className="bg-slate-900 text-white text-left">
              <tr>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider w-1/2">Charge</th>
                <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider w-1/2">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr><td className="py-4 px-6 text-slate-700">Foreign exchange (non-USD merchants)</td><td className="py-4 px-6 font-medium text-slate-900">+1.2% above interbank</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">ATM withdrawal handling</td><td className="py-4 px-6 font-medium text-slate-900">$2.00 + 2.5% of amount</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Pre-authorization network fee</td><td className="py-4 px-6 font-medium text-slate-900">$0.20 / transaction</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Dispute / chargeback handling</td><td className="py-4 px-6 font-medium text-slate-900">$35 / case (refunded if upheld)</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Refund processing</td><td className="py-4 px-6 font-medium text-slate-900">Manual review - paid in USDT (Tron / TRC20) only - 1-10 business days</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Inactivity fee</td><td className="py-4 px-6 font-medium text-slate-900">None</td></tr>
              <tr><td className="py-4 px-6 text-slate-700">Account closure</td><td className="py-4 px-6 font-medium text-slate-900">Free</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Eligibility & verification</h2>
        <div className="not-prose p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 flex items-start gap-4 my-8 shadow-sm">
          <div className="bg-emerald-600 text-white rounded-md px-2 py-1 text-xs font-bold shrink-0 mt-0.5">
            ZK
          </div>
          <p className="m-0 font-medium text-sm">
            Zero-knowledge eligibility — CardsFlow does not collect, store, or see your identity documents.
          </p>
        </div>
        <p>
          Our verification partner returns only a cryptographic proof that you meet the eligibility criteria. No passport upload. No biometric capture. No raw identity data persisted on CardsFlow.
        </p>

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
