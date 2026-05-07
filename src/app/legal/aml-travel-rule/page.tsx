import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "AML & Travel Rule (USDT / TRC20) | CardsFlow",
  description:
    "How CardsFlow applies AML, sanctions screening, and the FATF Travel Rule to USDT (TRC20) deposits used to fund virtual card balances.",
};

export default function AmlTravelRulePage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="AML & Travel Rule (USDT / TRC20)"
        supportCopy="Sanctions screening, transaction monitoring, and FATF Travel Rule data for inbound USDT deposits."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">
          Last Updated: 2026-05-07 &nbsp;|&nbsp; Version: 1.0 (draft &mdash; pending counsel and VASP-partner sign-off)
        </p>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 my-6 not-prose">
          <p className="m-0 text-sm text-amber-900">
            <strong>Draft:</strong> the named gateway, blockchain-analytics provider, Travel-Rule messaging vendor, and threshold values below must be confirmed by your AML / MLRO function and counsel before this page is treated as a definitive disclosure.
          </p>
        </div>

        <h3>1. Why a Travel Rule statement</h3>
        <p>
          CardsFlow accepts only USDT over the TRC20 network for account funding. The Financial Action Task Force (FATF) Recommendation 16 &mdash; the &ldquo;Travel Rule&rdquo; &mdash; requires Virtual Asset Service Providers (VASPs) and obliged financial institutions to collect and transmit identifying information about the originator and beneficiary of qualifying virtual-asset transfers above defined thresholds. This page sets out how CardsFlow and its gateway partner meet that obligation.
        </p>

        <h3>2. Programme partner</h3>
        <p>
          AML screening, transaction monitoring, and Travel-Rule data exchange for inbound USDT (TRC20) deposits are operated by {"{{ TODO: e.g., NowPayments }}"}, our regulated payment gateway partner, as part of their published compliance programme. CardsFlow integrates that programme into the user-funding flow and applies its own additional controls described below.
        </p>

        <h3>3. Sanctions screening</h3>
        <p>
          Before any USDT deposit is credited to a CardsFlow account balance:
        </p>
        <ul>
          <li>The originating wallet address is checked against blockchain-analytics risk indicators provided by {"{{ TODO: e.g., Chainalysis / TRM Labs / Elliptic }}"}.</li>
          <li>Any address associated with sanctioned jurisdictions, sanctioned persons, OFAC SDN entries, EU consolidated list entries, UK HMT list entries, or other applicable sanctions regimes is rejected.</li>
          <li>Addresses linked to known mixers, darknet markets, ransomware payouts, or high-risk exchanges are rejected or escalated for manual review.</li>
        </ul>

        <h3>4. Travel-Rule data exchange</h3>
        <p>
          For inbound USDT (TRC20) transfers above {"{{ TODO: USD 1,000 / EUR 1,000 (FATF de minimis) — confirm with MLRO }}"} that originate from another VASP, CardsFlow (through its gateway partner) participates in Travel-Rule data exchange using {"{{ TODO: e.g., TRP / IVMS-101 / Sumsub TR / Notabene / VerifyVASP }}"}. The data exchanged includes:
        </p>
        <ul>
          <li>Originator name, account / wallet identifier, and (where required) physical address or government identifier.</li>
          <li>Beneficiary name and account / wallet identifier on the CardsFlow side.</li>
          <li>Transaction amount, currency, and on-chain transaction hash.</li>
        </ul>
        <p>
          Where the originating wallet is self-hosted (non-custodial) and not associated with a registered VASP, CardsFlow applies enhanced due diligence proportionate to the amount and risk profile of the deposit, in accordance with the regulator&apos;s expectations for self-hosted-wallet transfers.
        </p>

        <h3>5. Transaction monitoring</h3>
        <p>
          All USDT deposits and onward funding events are subject to ongoing monitoring for patterns indicative of structuring, layering, integration, abuse of card products, or sanctions evasion. Alerts are reviewed by the MLRO function described in our <a href="/legal/aml-policy">AML &amp; Compliance Policy</a>. Suspicious activity is reported to the relevant Financial Intelligence Unit through Suspicious Activity Reports (SARs / STRs) where required by law.
        </p>

        <h3>6. Customer Due Diligence (CDD)</h3>
        <p>
          CardsFlow operates a privacy-preserving eligibility model for the account-creation step. Identity attributes required for AML and Travel-Rule compliance are collected at the funding step and at thresholds defined by our gateway partner, including:
        </p>
        <ul>
          <li><strong>Standard CDD:</strong> identity verification, residency confirmation, and source-of-funds attestation.</li>
          <li><strong>Enhanced Due Diligence (EDD):</strong> applied to politically exposed persons (PEPs), residents of higher-risk jurisdictions, and deposits above the EDD threshold of {"{{ TODO: confirm threshold }}"}.</li>
          <li><strong>Ongoing review:</strong> CDD records are refreshed on a risk-based schedule and on every material change in user activity.</li>
        </ul>

        <h3>7. Prohibited activities</h3>
        <p>
          The activities listed in our <a href="/trust/prohibited-use">Prohibited Use</a> policy &mdash; including but not limited to use of mixers / tumblers, attempts to fund accounts from sanctioned wallets, structuring, and use of the service for unlicensed money-service activity &mdash; are not permitted. Detection of any such activity will result in immediate suspension and, where required, reporting to the relevant authorities.
        </p>

        <h3>8. Record-keeping</h3>
        <p>
          Travel-Rule data, sanctions-screening evidence, monitoring alerts, and CDD records are retained for a minimum of {"{{ TODO: 5 / 7 years — confirm with counsel }}"} from the closure of the user relationship, in line with applicable law.
        </p>

        <h3>9. Contact</h3>
        <ul>
          <li><strong>MLRO:</strong> <a href="mailto:compliance@cardsflow.net">compliance@cardsflow.net</a></li>
          <li><strong>Sanctions / Travel-Rule queries:</strong> <a href="mailto:compliance@cardsflow.net">compliance@cardsflow.net</a></li>
          <li><strong>General support:</strong> <a href="mailto:support@cardsflow.net">support@cardsflow.net</a></li>
        </ul>
      </div>
      <RelatedLinksModule
        links={[
          { title: "AML & Compliance Policy", href: "/legal/aml-policy" },
          { title: "Regulatory Information", href: "/legal/regulatory-information" },
          { title: "Imprint", href: "/legal/imprint" },
          { title: "Prohibited Use", href: "/trust/prohibited-use" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Trust Center", href: "/trust" },
        ]}
      />
    </SubPageLayout>
  );
}
