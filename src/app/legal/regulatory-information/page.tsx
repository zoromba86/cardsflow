import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Regulatory Information | CardsFlow",
  description:
    "Disclosure of the regulator, licence references, BIN sponsor, issuer of record, and PCI / payment-program scope for the CardsFlow card programme.",
};

export default function RegulatoryInformationPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Regulatory Information"
        supportCopy="Who is regulated, by whom, where the licence sits, who issues the cards, and which networks and PCI scope apply."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">
          Last Updated: 2026-05-07 &nbsp;|&nbsp; Version: 1.0 (draft &mdash; pending counsel and BIN-sponsor sign-off)
        </p>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 my-6 not-prose">
          <p className="m-0 text-sm text-amber-900">
            <strong>Draft:</strong> the named regulator, licence reference (e.g., FCA FRN), BIN sponsor, issuer of record, payment-network scope, and PCI DSS attestation status below must be confirmed in writing by your sponsor bank, your acquiring partner, and your QSA before this page is treated as a definitive disclosure to users, partners, or merchants.
          </p>
        </div>

        <h3>1. Operating entity</h3>
        <p>The platform &ldquo;CardsFlow&rdquo; is operated by {"{{ TODO: registered legal entity }}"} (see <a href="/legal/imprint">Imprint</a>).</p>

        <h3>2. Regulator and licence</h3>
        <ul>
          <li><strong>Primary regulator:</strong> {"{{ TODO: e.g., Financial Conduct Authority (FCA, United Kingdom) }}"}</li>
          <li><strong>Licence / authorisation type:</strong> {"{{ TODO: e.g., EMI / API / agent / unregulated technology provider }}"}</li>
          <li><strong>Reference number:</strong> {"{{ TODO: FRN / register entry }}"}</li>
          <li><strong>Public register:</strong> {"{{ TODO: link to public regulator register entry }}"}</li>
          <li><strong>Permitted activities:</strong> {"{{ TODO: list of permissions }}"}</li>
          <li><strong>Permitted regions:</strong> {"{{ TODO: list of countries / regions }}"}</li>
        </ul>
        <p>
          If CardsFlow itself is not the licensed entity, the card-issuance and money-movement activities described on this site are carried out under the authorisation of the issuer / programme manager named below. CardsFlow then acts as a {"{{ TODO: technology provider / programme distributor / introducer }}"}.
        </p>

        <h3>3. Card issuer and programme structure</h3>
        <ul>
          <li><strong>Card network(s):</strong> Visa{"{{ TODO: confirm — Visa only, or Visa + Mastercard }}"}</li>
          <li><strong>Issuer of record:</strong> {"{{ TODO: legal name and jurisdiction of the issuing bank }}"}</li>
          <li><strong>BIN sponsor / sponsor bank:</strong> {"{{ TODO: legal name }}"}</li>
          <li><strong>Programme manager:</strong> {"{{ TODO: e.g., PAY2HOUSE / other }}"}</li>
          <li><strong>Issuing region(s):</strong> {"{{ TODO: e.g., US BIN 4096xx, EU BIN 5234xx }}"}</li>
          <li><strong>Card forms supported:</strong> Virtual; Physical {"{{ TODO: confirm physical issuance is in scope }}"}</li>
        </ul>

        <h3>4. Payment-card industry (PCI) scope</h3>
        <p>
          CardsFlow uses tokenised card data and does not store, process, or transmit full primary account numbers (PANs) on its own infrastructure. On that basis the CardsFlow front-end is in scope for {"{{ TODO: PCI DSS SAQ-A / SAQ-A-EP }}"} and the issuer / programme manager retains the {"{{ TODO: SAQ-D / RoC }}"} attestation.
        </p>
        <ul>
          <li><strong>CardsFlow attestation type:</strong> {"{{ TODO: SAQ-A / SAQ-A-EP }}"}</li>
          <li><strong>Last attestation date:</strong> {"{{ TODO: YYYY-MM-DD }}"}</li>
          <li><strong>Issuer / programme manager attestation:</strong> available on request to qualifying counterparties under NDA.</li>
        </ul>

        <h3>5. Funding methods</h3>
        <p>
          CardsFlow currently accepts only USDT over the TRC20 network for account funding. Fiat on/off-ramp, sanctions screening, and Travel-Rule compliance for inbound USDT deposits are described on the <a href="/legal/aml-travel-rule">AML &amp; Travel Rule</a> page.
        </p>

        <h3>6. Consumer protection and dispute escalation</h3>
        <ul>
          <li><strong>First-line support:</strong> <a href="mailto:support@cardsflow.net">support@cardsflow.net</a></li>
          <li><strong>Compliance escalation:</strong> <a href="mailto:compliance@cardsflow.net">compliance@cardsflow.net</a></li>
          <li><strong>Regulator complaint route:</strong> {"{{ TODO: e.g., Financial Ombudsman Service (UK) / national equivalent }}"}</li>
          <li><strong>Card-network dispute (chargeback):</strong> raised through the issuer of record under Visa/Mastercard rules.</li>
        </ul>

        <h3>7. Changes to this disclosure</h3>
        <p>
          Material changes to the regulator, licence reference, BIN sponsor, issuer of record, or PCI scope will be reflected here within 10 business days of the change taking effect. The <em>Last Updated</em> date above tracks revisions to this page.
        </p>
      </div>
      <RelatedLinksModule
        links={[
          { title: "Imprint", href: "/legal/imprint" },
          { title: "AML & Travel Rule", href: "/legal/aml-travel-rule" },
          { title: "AML & Compliance Policy", href: "/legal/aml-policy" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Trust Center", href: "/trust" },
          { title: "Security & Data Handling", href: "/trust/security-and-data-handling" },
        ]}
      />
    </SubPageLayout>
  );
}
