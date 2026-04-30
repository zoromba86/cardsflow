import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Cookie Policy | CardsFlow",
  description: "Cookie Policy for CardsFlow.",
};

export default function cookiesPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Cookie Policy"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">Last Updated: April 29, 2026  |  Version: 2.0</p>
        <p>We use no tracking cookies, no advertising cookies, and no third-party profiling tools.</p>
        <p>Questions? privacy@cardsflow.net</p>
        <h3>1.  WHAT ARE COOKIES?</h3>
        <p>Cookies are small text files placed on your device when you visit a website. They can remember preferences, track behaviour across sites, or serve advertising.</p>
        <p>Cookie Type</p>
        <p>Description</p>
        <p>First-party cookies</p>
        <p>Set directly by the website you are visiting.</p>
        <p>Third-party cookies</p>
        <p>Set by external services embedded in a website, such as analytics platforms or ad networks.</p>
        <p>CardsFlow uses no third-party cookies of any kind.</p>
        <h3>2.  COOKIES WE USE</h3>
        <p>We use only the minimum number of cookies required to operate the platform securely and keep you logged in.</p>
        <h4>2.1  Strictly Necessary Cookies</h4>
        <p>These cookies are essential for the platform to work. They cannot be switched off. They do not track you, store personal data beyond your session, or share anything with third parties.</p>
        <p>Cookie Name</p>
        <p>Purpose</p>
        <p>Duration</p>
        <p>session_id</p>
        <p>Keeps you securely logged in and authenticates your Account requests during your visit.</p>
        <p>Session</p>
        <p>csrf_token</p>
        <p>Protects form submissions against cross-site request forgery (CSRF) attacks. A core security requirement.</p>
        <p>Session</p>
        <p>consent_pref</p>
        <p>Stores your cookie preference choice so we do not ask again on every visit.</p>
        <p>6 months</p>
        <h4>2.2  Analytics â€” No Cookies Used</h4>
        <p>We use Simple Analytics (simpleanalytics.com) to understand basic platform usage.</p>
        <p>What Simple Analytics Does NOT Do</p>
        <p>What Simple Analytics DOES Do</p>
        <p>Set any cookies of any kind</p>
        <p>Count anonymous page views in aggregate</p>
        <p>Collect personally identifiable information</p>
        <p>Respect Do Not Track browser signals</p>
        <p>Fingerprint your device or browser</p>
        <p>Store only anonymised, aggregate counts</p>
        <p>Track you across websites or sessions</p>
        <p>Operate with no link to any individual</p>
        <p>Build user profiles or share data with advertisers</p>
        <p>Because Simple Analytics sets no cookies and collects no personal data, no consent is required under UK GDPR or the Privacy and Electronic Communications Regulations (PECR). Review their approach at simpleanalytics.com/privacy</p>
        <h4>2.3  Advertising â€” None</h4>
        <p>We use no advertising cookies, no retargeting pixels, no social media tracking, and no marketing networks on any page of cardsflow.net. This includes:</p>
        <p>Google Analytics and Google Ads tags</p>
        <p>Meta (Facebook) Pixel</p>
        <p>LinkedIn Insight Tag</p>
        <p>Hotjar, Clarity, or any session recording tool</p>
        <p>Intercom or any chat tool that sets tracking cookies</p>
        <p>Any affiliate tracking script</p>
        <p>This is our firm policy. We will update this page if that ever changes.</p>
        <h3>3.  COOKIES ON PAYMENT PAGES</h3>
        <p>On all payment and account pages including /checkout, /payment, /card/add, and /card/verify:</p>
        <p>Only strictly necessary session cookies are present</p>
        <p>No third-party scripts of any kind are loaded</p>
        <p>No analytics tools operate on these pages</p>
        <p>This is a hard requirement of our PCI DSS compliance programme and our own security standards.</p>
        <h3>4.  YOUR COOKIE CHOICES</h3>
        <h4>4.1  Our Cookie Notice</h4>
        <p>When you first visit cardsflow.net you will see a brief notice confirming we use only essential session cookies and that our analytics tool sets no cookies. No consent banner is required for Simple Analytics.</p>
        <h4>4.2  Managing Cookies in Your Browser</h4>
        <p>You can view, manage, and delete cookies through your browser settings at any time.</p>
        <p>Browser</p>
        <p>Where to Find Cookie Settings</p>
        <p>Google Chrome</p>
        <p>Settings â†’ Privacy and Security â†’ Cookies and other site data</p>
        <p>Mozilla Firefox</p>
        <p>Settings â†’ Privacy &amp; Security â†’ Cookies and Site Data</p>
        <p>Apple Safari</p>
        <p>Preferences â†’ Privacy â†’ Manage Website Data</p>
        <p>Microsoft Edge</p>
        <p>Settings â†’ Cookies and Site Permissions â†’ Cookies and site data</p>
        <p>Blocking strictly necessary cookies may prevent you from logging in or completing payments.</p>
        <h4>4.3  Simple Analytics Opt-Out</h4>
        <p>Although Simple Analytics collects no personal data, you may opt out at any time by visiting simpleanalytics.com/optout or by enabling &quot;Do Not Track&quot; in your browser settings. Simple Analytics honours DNT signals by default.</p>
        <h3>5.  SUMMARY â€” ALL TECHNOLOGIES WE USE</h3>
        <p>Technology</p>
        <p>Type</p>
        <p>Sets Cookies?</p>
        <p>Collects Personal Data?</p>
        <p>session_id</p>
        <p>Essential</p>
        <p>Yes</p>
        <p>No â€” session token only</p>
        <p>csrf_token</p>
        <p>Security</p>
        <p>Yes</p>
        <p>No</p>
        <p>consent_pref</p>
        <p>Preference</p>
        <p>Yes</p>
        <p>No</p>
        <p>Simple Analytics</p>
        <p>Analytics</p>
        <p>No</p>
        <p>No</p>
        <p>NowPayments</p>
        <p>Payments</p>
        <p>No</p>
        <p>Tokenised reference only</p>
        <p>No other technologies are used on cardsflow.net.</p>
        <h3>6.  CHANGES TO THIS POLICY</h3>
        <p>We will update this Policy if our use of cookies or analytics tools changes. The &quot;Last Updated&quot; date at the top reflects the most recent revision. Material changes will be communicated via a site notice and by email where appropriate.</p>
        <h3>7.  CONTACT</h3>
        <p>Email</p>
        <p>privacy@cardsflow.net</p>
        <p>Post</p>
        <p>CardsFlow, [Full Registered Address]</p>
        <p>ICO</p>
        <p>ico.org.uk  |  0303 123 1113</p>

      </div>
      <RelatedLinksModule
        links={[
          { title: "Terms of Service", href: "/legal/terms" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Cookie Policy", href: "/legal/cookies" },
          { title: "AML Policy", href: "/legal/aml-policy" }
        ].filter(l => l.href !== "/legal/cookies")}
      />
    </SubPageLayout>
  );
}
