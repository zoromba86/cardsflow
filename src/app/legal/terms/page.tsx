import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RelatedLinksModule } from "@/components/blocks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CardsFlow",
  description: "Read the Terms of Service governing your use of our website, content, and payment-related workflows.",
};

export default function TermsPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Terms of Service"
        supportCopy="Read the Terms of Service governing your use of our website, content, and payment-related workflows."
      />
      <DirectAnswerBlock>
        Last updated: April 7, 2026. These Terms of Service ("Terms") govern your access to and use of the CardsFlow website, content, and related services. By using the site or relying on any service-related content, you agree to these Terms. If you do not agree, do not use the site or services.
      </DirectAnswerBlock>
      
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <h2>1. Scope</h2>
        <p>These Terms apply to:</p>
        <ul>
          <li>your use of this website</li>
          <li>your use of any public-facing content</li>
          <li>any support interactions with CardsFlow</li>
          <li>any account or service workflow governed by these Terms and related policies</li>
        </ul>

        <h2>2. Eligibility and lawful use</h2>
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

        <h2>3. Supported workflows</h2>
        <p>The site and service content are designed around clearly defined, lawful use cases such as:</p>
        <ul>
          <li>ad spend management</li>
          <li>travel spend management</li>
          <li>online service subscriptions</li>
        </ul>
        <p>Not every workflow is supported. If a use case falls outside the stated scope, you should contact support before relying on the service.</p>

        <h2>4. Site content and informational materials</h2>
        <p>Content on this site is provided for general informational purposes. It is intended to explain product capabilities, supported workflows, policies, and operational concepts. It does not constitute legal, accounting, tax, compliance, or professional advice.</p>

        <h2>5. Accounts and user responsibility</h2>
        <p>If you create or use an account, you are responsible for keeping account credentials secure, restricting access to authorized users, providing accurate information where required, reviewing account activity, and notifying us promptly of suspected misuse.</p>

        <h2>6. Fees, disclosures, and payment-related terms</h2>
        <p>Fees, payment methods, and relevant service disclosures are described on the website or in related service materials where applicable. You should review Fees & Disclosures before relying on the service.</p>

        <h2>7. Prohibited conduct</h2>
        <p>You agree not to misuse the service, attempt to bypass restrictions or controls, interfere with site operation, use the service for prohibited or unsupported activities, or access/attempt to access data, systems, or accounts without authorization.</p>

        <h2>8. Intellectual property</h2>
        <p>Unless otherwise stated, the content, branding, design elements, and site materials are owned by CardsFlow or used with permission. You may not reproduce, distribute, modify, or commercially exploit site content without prior written permission, except as allowed by law.</p>

        <h2>9. Third-party services and links</h2>
        <p>The site may include links to third-party websites, tools, or services. We are not responsible for third-party content, availability, policies, or practices.</p>

        <h2>10. Disclaimers</h2>
        <p>The website and services are provided on an "as is" and "as available" basis unless otherwise required by law. We do not guarantee that the site will always be available, all content will always be free from error, or every workflow will be supported in every context.</p>

        <h2>11. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, CardsFlow will not be liable for indirect, incidental, consequential, special, or punitive damages arising from or related to your use of the site or services.</p>

        <h2>12. Indemnification</h2>
        <p>You agree to indemnify and hold harmless CardsFlow, its affiliates, personnel, and service providers from claims, liabilities, losses, and expenses arising out of your misuse of the site or violation of these Terms, to the extent permitted by law.</p>

        <h2>13. Changes to the Terms</h2>
        <p>We may update these Terms from time to time. When we do, we will revise the “Last updated” date at the top of the page.</p>

        <h2>14. Governing law</h2>
        <p>These Terms are governed by the laws of our applicable jurisdiction, unless applicable law requires otherwise.</p>

        <h2>15. Contact</h2>
        <p>For questions about these Terms, contact:</p>
        <ul>
          <li><strong>Email:</strong> legal@cardsflow.com</li>
          <li><strong>Support:</strong> <Link href="/trust/support-and-escalations/">/trust/support-and-escalations/</Link></li>
        </ul>

      </div>
      
      <RelatedLinksModule 
        links={[
          { title: "Privacy Policy", href: "/legal/privacy/" },
          { title: "Cookie Policy", href: "/legal/cookies/" },
          { title: "Prohibited Use", href: "/trust/prohibited-use/" },
          { title: "Fees & Disclosures", href: "/trust/fees-and-disclosures/" }
        ]} 
      />
    </SubPageLayout>
  );
}
