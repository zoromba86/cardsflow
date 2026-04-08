import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Terms of Service | CardsFlow",
  description: "Read the Terms of Service governing your use of our website, content, and payment-related workflows.",
};

export default function termsPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Terms of Service"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="text-sm text-zinc-500 italic mb-8">Last updated: April 2026</p>

        <p className="lead text-xl text-zinc-300">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Cardsflow website, content, and related services.
        </p>

        <p>By using the site or relying on any service-related content, you agree to these Terms. If you do not agree, do not use the site or services.</p>

        <h3>1. Scope</h3>
        <p>These Terms apply to:</p>
        <ul>
          <li>your use of this website</li>
          <li>your use of any public-facing content</li>
          <li>any support interactions with Cardsflow</li>
          <li>any account or service workflow governed by these Terms and related policies</li>
        </ul>
        <p>Additional terms, disclosures, or agreements may apply to specific services, products, or workflows.</p>

        <h3>2. Eligibility and lawful use</h3>
        <p>You may use this site and any related services only for lawful purposes and in accordance with these Terms.</p>
        <p>You agree not to use the site or services for:</p>
        <ul>
          <li>unlawful activity</li>
          <li>deceptive or misleading payment behavior</li>
          <li>fraud or abuse</li>
          <li>unauthorized access</li>
          <li>misuse of content, accounts, or workflows</li>
          <li>any activity prohibited by our policies</li>
        </ul>
        <p>Please review our <a href="/trust/prohibited-use">Prohibited Use</a> policy.</p>

        <h3>3. Supported workflows</h3>
        <p>The site and service content are designed around clearly defined, lawful use cases such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>Not every workflow is supported. If a use case falls outside the stated scope, you should contact support before relying on the service.</p>

        <h3>4. Site content and informational materials</h3>
        <p>Content on this site is provided for general informational purposes.</p>
        <p>It is intended to explain product capabilities, supported workflows, policies, and operational concepts. It does not constitute legal, accounting, tax, compliance, or professional advice.</p>
        <p>You are responsible for evaluating whether the site or service is appropriate for your own circumstances.</p>

        <h3>5. Accounts and user responsibility</h3>
        <p>If you create or use an account, you are responsible for:</p>
        <ul>
          <li>keeping account credentials secure</li>
          <li>restricting access to authorized users</li>
          <li>providing accurate information where required</li>
          <li>reviewing account activity</li>
          <li>notifying us promptly of suspected misuse or unauthorized activity</li>
        </ul>

        <h3>6. Fees, disclosures, and payment-related terms</h3>
        <p>Fees, payment methods, and relevant service disclosures are described on the website or in related service materials where applicable.</p>
        <p>You should review the following before relying on the service: <a href="/trust/fees-and-disclosures">Fees & Disclosures</a>.</p>

        <h3>7. Prohibited conduct</h3>
        <p>You agree not to:</p>
        <ul>
          <li>misuse the service</li>
          <li>attempt to bypass restrictions or controls</li>
          <li>interfere with site operation</li>
          <li>use the service for prohibited or unsupported activities</li>
          <li>access or attempt to access data, systems, or accounts without authorization</li>
        </ul>
        <p>We may suspend, limit, or terminate access if we reasonably suspect prohibited or abusive conduct.</p>

        <h3>8. Intellectual property</h3>
        <p>Unless otherwise stated, the content, branding, design elements, and site materials are owned by Cardsflow or used with permission. You may not reproduce, distribute, modify, or commercially exploit site content without prior written permission, except as allowed by law.</p>

        <h3>9. Third-party services and links</h3>
        <p>The site may include links to third-party websites, tools, or services. We are not responsible for third-party content, availability, policies, or practices.</p>

        <h3>10. Disclaimers</h3>
        <p>The website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis unless otherwise required by law.</p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>the site will always be available</li>
          <li>all content will always be free from error</li>
          <li>every workflow will be supported in every context</li>
          <li>every payment scenario will be appropriate for the service</li>
        </ul>

        <h3>11. Limitation of liability</h3>
        <p>To the maximum extent permitted by law, Cardsflow will not be liable for indirect, incidental, consequential, special, or punitive damages arising from or related to your use of the site or services. Nothing in these Terms limits liability where such limitation is prohibited by law.</p>

        <h3>12. Indemnification</h3>
        <p>You agree to indemnify and hold harmless Cardsflow, its affiliates, personnel, and service providers from claims, liabilities, losses, and expenses arising out of your misuse of the site or violation of these Terms, to the extent permitted by law.</p>

        <h3>13. Changes to the Terms</h3>
        <p>We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of the page. Continued use after changes are posted may constitute acceptance of the updated Terms, unless otherwise required by law.</p>

        <h3>14. Governing law</h3>
        <p>These Terms are governed by applicable law based on your jurisdiction and the decentralised operations of the protocol, unless otherwise required by law.</p>

        <h3>15. Contact</h3>
        <p>For questions about these Terms, contact:</p>
        <ul>
          <li><strong>Email:</strong> support@cardsflow.net</li>
          <li><strong>Support:</strong> <a href="/trust/support-and-escalations">/trust/support-and-escalations/</a></li>
        </ul>
      </div>
      <RelatedLinksModule
        links={[
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Cookie Policy", href: "/legal/cookies" },
          { title: "Prohibited Use", href: "/trust/prohibited-use" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures" },
          { title: "Support & Escalations", href: "/trust/support-and-escalations" }
        ]}
      />
    </SubPageLayout>
  );
}
