import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Privacy Policy | CardsFlow",
  description: "Read our Privacy Policy to understand what information we collect, how we use it, and how to contact us about privacy-related questions.",
};

export default function privacyPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Privacy Policy"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="text-sm text-zinc-500 italic mb-8">Last updated: April 2026</p>

        <p className="lead text-xl text-zinc-300">
          This Privacy Policy explains how CardsFlow collects, uses, stores, and shares information when you visit our website, use our services, or contact us.
        </p>

        <p>Please read this policy carefully before using the site or relying on any service-related content.</p>

        <h3>1. Who we are</h3>
        <p>CardsFlow operates this website and related services.</p>
        <p>If you have questions about this Privacy Policy, you can contact us at:</p>
        <ul>
          <li><strong>Email:</strong> legal@cardsflow.com</li>
          <li><strong>Support page:</strong> <a href="/trust/support-and-escalations">/trust/support-and-escalations</a></li>
          <li><strong>Company name:</strong> CardsFlow Technologies</li>
        </ul>

        <h3>2. What information we may collect</h3>
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

        <h3>3. How we use information</h3>
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

        <h3>4. Cookies and analytics</h3>
        <p>We may use cookies and similar technologies to:</p>
        <ul>
          <li>remember preferences</li>
          <li>understand website usage</li>
          <li>improve performance</li>
          <li>measure traffic and site interactions</li>
        </ul>
        <p>For more information, see our <a href="/legal/cookies">Cookie Policy</a>.</p>

        <h3>5. How information may be shared</h3>
        <p>We may share information where reasonably necessary with:</p>
        <ul>
          <li>service providers or vendors supporting the website or operations</li>
          <li>payment, technical, or infrastructure providers</li>
          <li>legal or regulatory authorities when required</li>
          <li>professional advisers where appropriate</li>
          <li>successors in the event of a business transfer, merger, or reorganization</li>
        </ul>
        <p>We do not share information beyond what is reasonably necessary for service operation, support, compliance, or legitimate business purposes.</p>

        <h3>6. Data retention</h3>
        <p>We retain information for as long as reasonably necessary to:</p>
        <ul>
          <li>provide services</li>
          <li>respond to support issues</li>
          <li>comply with legal obligations</li>
          <li>maintain security and operational records</li>
          <li>resolve disputes or enforce agreements</li>
        </ul>
        <p>Retention periods may vary depending on the type of information and the reason it was collected.</p>

        <h3>7. Security</h3>
        <p>We take reasonable steps to protect information through operational, administrative, and technical safeguards. However, no system can guarantee complete security. Users should also take reasonable steps to protect their own accounts, devices, and communications.</p>

        <h3>8. Your rights and choices</h3>
        <p>Depending on your jurisdiction, you may have rights relating to your personal information, such as:</p>
        <ul>
          <li>requesting access</li>
          <li>requesting correction</li>
          <li>requesting deletion</li>
          <li>objecting to certain uses</li>
          <li>withdrawing consent where processing is based on consent</li>
        </ul>

        <h3>9. International use</h3>
        <p>If you access the site from outside the country where CardsFlow operates, you understand that your information may be processed in jurisdictions with different data protection rules.</p>
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
