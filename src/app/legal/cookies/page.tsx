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
        <p className="text-sm text-slate-500 italic mb-8">Last Updated: May 21, 2026  |  Version: 2.1</p>
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
        <h4>2.1  Strictly Necessary Storage</h4>
        <p>The platform currently uses a small amount of browser local storage (not cookies) to keep you signed in during your session. We do not use any tracking cookies, advertising cookies, third-party profiling tools, or session-replay scripts.</p>
        <p>Storage Key</p>
        <p>Purpose</p>
        <p>Duration</p>
        <p>cardsflow_token</p>
        <p>Short-lived authentication token. Sent on every dashboard request to prove who you are.</p>
        <p>Session (until logout or expiry)</p>
        <p>cardsflow_user</p>
        <p>Caches your display name and email so the dashboard can render the header without a round-trip.</p>
        <p>Session</p>
        <p>cardsflow_token_expires_at</p>
        <p>Lets the browser detect an expired token locally and force a fresh login.</p>
        <p>Session</p>
        <p>consent_pref</p>
        <p>Stores your cookie-notice choice so we do not show it on every visit.</p>
        <p>6 months</p>
        <p className="text-sm text-slate-500">A planned hardening release will move authentication from local storage into <code>HttpOnly; Secure; SameSite=Strict</code> cookies paired with a CSRF token. Until that release lands the storage keys above are the only mechanism used to keep you signed in.</p>
        <h4>2.2  Analytics — No Cookies Used</h4>
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
        <h4>2.3  Advertising — None</h4>
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
        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4 font-bold text-slate-900 text-sm">Browser</th>
                <th className="py-3 px-4 font-bold text-slate-900 text-sm">Where to Find Cookie Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-semibold text-slate-900">Google Chrome</td>
                <td className="py-3 px-4">Settings → Privacy and Security → Cookies and other site data</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-semibold text-slate-900">Mozilla Firefox</td>
                <td className="py-3 px-4">Settings → Privacy &amp; Security → Cookies and Site Data</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-semibold text-slate-900">Apple Safari</td>
                <td className="py-3 px-4">Preferences → Privacy → Manage Website Data</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="py-3 px-4 font-semibold text-slate-900">Microsoft Edge</td>
                <td className="py-3 px-4">Settings → Cookies and Site Permissions → Cookies and site data</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Blocking strictly necessary cookies may prevent you from logging in or completing payments.</p>
        <h4>4.3  Simple Analytics Opt-Out</h4>
        <p>Although Simple Analytics collects no personal data, you may opt out at any time by visiting simpleanalytics.com/optout or by enabling &quot;Do Not Track&quot; in your browser settings. Simple Analytics honours DNT signals by default.</p>
        <h3>5. SUMMARY — ALL TECHNOLOGIES WE USE</h3>
        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full text-left border-collapse min-w-[650px] shadow-sm rounded-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-5 font-bold text-slate-900 text-sm">Technology</th>
                <th className="py-4 px-5 font-bold text-slate-900 text-sm">Type</th>
                <th className="py-4 px-5 font-bold text-slate-900 text-sm">Sets Cookies?</th>
                <th className="py-4 px-5 font-bold text-slate-900 text-sm">Collects Personal Data?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm bg-white">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-5 font-mono text-slate-900 font-semibold">cardsflow_token</td>
                <td className="py-4 px-5 text-slate-600">Essential (local storage)</td>
                <td className="py-4 px-5"><span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">No</span></td>
                <td className="py-4 px-5 text-slate-600">No — session token only</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-5 font-mono text-slate-900 font-semibold">cardsflow_user</td>
                <td className="py-4 px-5 text-slate-600">Essential (local storage)</td>
                <td className="py-4 px-5"><span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">No</span></td>
                <td className="py-4 px-5 text-slate-600">Display name and email cache</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-5 font-mono text-slate-900 font-semibold">consent_pref</td>
                <td className="py-4 px-5 text-slate-600">Preference</td>
                <td className="py-4 px-5"><span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/60 text-amber-700 text-[11px] font-bold uppercase tracking-wider">Yes</span></td>
                <td className="py-4 px-5 text-slate-600">No</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-5 font-semibold text-slate-900">Simple Analytics</td>
                <td className="py-4 px-5 text-slate-600">Analytics</td>
                <td className="py-4 px-5"><span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">No</span></td>
                <td className="py-4 px-5 text-slate-600">No</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-5 font-semibold text-slate-900">NowPayments</td>
                <td className="py-4 px-5 text-slate-600">Payments</td>
                <td className="py-4 px-5"><span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">No</span></td>
                <td className="py-4 px-5 text-slate-600">Tokenised reference only</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm font-medium text-slate-500 bg-slate-50 px-4 py-3 rounded-lg inline-block">No other technologies are used on cardsflow.net.</p>
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
