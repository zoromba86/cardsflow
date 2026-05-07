import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Imprint | CardsFlow",
  description:
    "Mandatory provider identification (Imprint) for CardsFlow under the EU e-Commerce Directive (Art. 5) and equivalent national disclosure rules.",
};

export default function ImprintPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Imprint"
        supportCopy="Provider identification published in line with the EU e-Commerce Directive (Art. 5) and equivalent national requirements."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">
          Last Updated: 2026-05-07 &nbsp;|&nbsp; Version: 1.0 (draft &mdash; pending counsel sign-off)
        </p>

        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 my-6 not-prose">
          <p className="m-0 text-sm text-amber-900">
            <strong>Draft:</strong> the placeholders below (operating entity, registered office, company number, VAT ID, regulator, supervisory authority) must be confirmed and signed off by qualified counsel in each jurisdiction where the service is offered before this page is treated as legally definitive.
          </p>
        </div>

        <h3>1. Operator</h3>
        <p>
          This website (<a href="https://cardsflow.net">https://cardsflow.net</a>) is operated by:
        </p>
        <ul>
          <li><strong>Legal name:</strong> {"{{ TODO: registered company name }}"}</li>
          <li><strong>Trading as:</strong> CardsFlow</li>
          <li><strong>Form:</strong> {"{{ TODO: e.g., Limited / GmbH / Pte. Ltd. }}"}</li>
          <li><strong>Registered office:</strong> {"{{ TODO: full registered address }}"}</li>
          <li><strong>Company / commercial register number:</strong> {"{{ TODO: company number }}"}</li>
          <li><strong>VAT / EIN / Tax ID:</strong> {"{{ TODO: tax identification }}"}</li>
          <li><strong>Authorised representative:</strong> {"{{ TODO: name of director(s) / managing officer }}"}</li>
        </ul>

        <h3>2. Contact</h3>
        <ul>
          <li><strong>General support:</strong> <a href="mailto:support@cardsflow.net">support@cardsflow.net</a></li>
          <li><strong>Compliance / MLRO:</strong> <a href="mailto:compliance@cardsflow.net">compliance@cardsflow.net</a></li>
          <li><strong>Privacy / Data protection:</strong> <a href="mailto:privacy@cardsflow.net">privacy@cardsflow.net</a></li>
          <li><strong>Security disclosure:</strong> <a href="mailto:security@cardsflow.net">security@cardsflow.net</a> &middot; see also <a href="/.well-known/security.txt">/.well-known/security.txt</a></li>
        </ul>

        <h3>3. Supervisory authority &amp; sectoral regulator</h3>
        <p>
          For details of the regulator(s), licence references, BIN sponsor, and issuer of record applicable to the card programme, see <a href="/legal/regulatory-information">Regulatory Information</a>.
        </p>

        <h3>4. Online dispute resolution (EU users)</h3>
        <p>
          The European Commission operates an online dispute resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. CardsFlow is {"{{ TODO: willing / not obliged }}"} to participate in alternative dispute resolution proceedings before a consumer arbitration body.
        </p>

        <h3>5. Editorial responsibility</h3>
        <p>
          Responsibility for editorial content under applicable national press law rests with: {"{{ TODO: name and address of editorial contact }}"}.
        </p>

        <h3>6. Liability for content and links</h3>
        <p>
          Content on this site is prepared with reasonable care but provided without warranty of completeness, accuracy, or timeliness. External links are reviewed at the time of inclusion; CardsFlow is not responsible for content on linked third-party sites and accepts no liability for it.
        </p>

        <h3>7. Copyright</h3>
        <p>
          Unless explicitly stated otherwise, all content (text, graphics, logos, layouts) is the property of CardsFlow or used with permission. Reproduction, adaptation, or commercial use requires prior written consent.
        </p>
      </div>
      <RelatedLinksModule
        links={[
          { title: "Regulatory Information", href: "/legal/regulatory-information" },
          { title: "AML & Travel Rule", href: "/legal/aml-travel-rule" },
          { title: "AML & Compliance Policy", href: "/legal/aml-policy" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Terms of Service", href: "/legal/terms" },
          { title: "Trust Center", href: "/trust" },
        ]}
      />
    </SubPageLayout>
  );
}
