import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, RelatedLinksModule } from "@/components/blocks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CardsFlow",
  description: "Read our Privacy Policy to understand what information we collect, how we use it, and how to contact us about privacy-related questions.",
};

export default function PrivacyPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Privacy Policy"
        supportCopy="Read our Privacy Policy to understand what information we collect, how we use it, and how to contact us about privacy-related questions."
      />
      <DirectAnswerBlock>
        Last updated: April 7, 2026. This Privacy Policy explains how CardsFlow collects, uses, stores, and shares information when you visit our website, use our services, or contact us.
      </DirectAnswerBlock>
      
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <h2>1. Who we are</h2>
        <p>CardsFlow operates this website and related services. If you have questions about this Privacy Policy, you can contact us at:</p>
        <ul>
          <li><strong>Email:</strong> privacy@cardsflow.com</li>
          <li><strong>Support page:</strong> <Link href="/trust/support-and-escalations/">/trust/support-and-escalations/</Link></li>
          <li><strong>Company name:</strong> CardsFlow Technologies Inc.</li>
        </ul>

        <h2>2. What information we may collect</h2>
        <p>Depending on how you use the site, we may collect information such as:</p>
        <ul>
          <li>name and contact details</li>
          <li>email address</li>
          <li>account-related information</li>
          <li>support messages and inquiries</li>
          <li>billing-related questions or records</li>
          <li>technical usage information</li>
          <li>device and browser information</li>
          <li>cookie or analytics data</li>
          <li>any information you voluntarily submit through forms or communications</li>
        </ul>
        <p>We aim to collect only information that is reasonably necessary to operate the site, provide support, improve the service, and comply with legal or operational requirements.</p>

        <h2>3. How we use information</h2>
        <p>We may use information for purposes such as:</p>
        <ul>
          <li>providing and operating the website or services</li>
          <li>responding to support requests</li>
          <li>reviewing product or workflow inquiries</li>
          <li>improving content, usability, and support processes</li>
          <li>maintaining security and preventing abuse</li>
          <li>complying with legal obligations</li>
          <li>sending service-related communications where appropriate</li>
        </ul>
        <p>We do not sell your personal information unless explicitly stated and permitted by applicable law.</p>

        <h2>4. Cookies and analytics</h2>
        <p>We may use cookies and similar technologies to remember preferences, understand website usage, improve performance, and measure traffic and site interactions.</p>
        <p>For more information, see our Cookie Policy at <Link href="/legal/cookies/">/legal/cookies/</Link></p>

        <h2>5. How information may be shared</h2>
        <p>We may share information where reasonably necessary with:</p>
        <ul>
          <li>service providers or vendors supporting the website or operations</li>
          <li>payment, technical, or infrastructure providers</li>
          <li>legal or regulatory authorities when required</li>
          <li>professional advisers where appropriate</li>
          <li>successors in the event of a business transfer, merger, or reorganization</li>
        </ul>
        <p>We do not share information beyond what is reasonably necessary for service operation, support, compliance, or legitimate business purposes.</p>

        <h2>6. Data retention</h2>
        <p>We retain information for as long as reasonably necessary to provide services, respond to support issues, comply with legal obligations, maintain security and operational records, or resolve disputes.</p>

        <h2>7. Security</h2>
        <p>We take reasonable steps to protect information through operational, administrative, and technical safeguards. However, no system can guarantee complete security. Users should also take reasonable steps to protect their own accounts, devices, and communications.</p>
        
        <h2>8. Your rights and choices</h2>
        <p>Depending on your jurisdiction, you may have rights relating to your personal information, such as requesting access, requesting correction, requesting deletion, objecting to certain uses, or withdrawing consent. To make a privacy-related request, contact privacy@cardsflow.com.</p>

        <h2>9. International use</h2>
        <p>If you access the site from outside the country where CardsFlow operates, you understand that your information may be processed in jurisdictions with different data protection rules.</p>

        <h2>10. Third-party links and services</h2>
        <p>Our website may link to third-party websites or services. We are not responsible for their privacy practices, content, or policies.</p>

        <h2>11. Children’s privacy</h2>
        <p>This site and its services are not intended for children under the age required by applicable law. We do not knowingly collect personal information from children where prohibited.</p>

        <h2>12. Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date at the top of the page.</p>

      </div>
      
      <RelatedLinksModule 
        links={[
          { title: "Terms of Service", href: "/legal/terms/" },
          { title: "Cookie Policy", href: "/legal/cookies/" },
          { title: "Security and Data Handling", href: "/trust/security-and-data-handling/" }
        ]} 
      />
    </SubPageLayout>
  );
}
