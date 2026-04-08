import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Cookie Policy | CardsFlow",
  description: "Learn how we use cookies and similar technologies to operate the site, improve performance, and understand usage.",
};

export default function CookiePolicyPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Cookie Policy"
        supportCopy="How CardsFlow uses cookies and similar technologies."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200 prose-li:text-zinc-400 prose-a:text-[#E5B220]">
        <p className="text-sm text-zinc-500 italic mb-8">Last updated: April 2026</p>

        <p className="lead text-xl text-zinc-300">
          This Cookie Policy explains how CardsFlow uses cookies and similar technologies when you visit our website.
        </p>

        <h3>1. What are cookies?</h3>
        <p>Cookies are small text files placed on your device when you visit a website. They are commonly used to help websites function, remember preferences, improve performance, and understand how users interact with pages.</p>

        <h3>2. Why we use cookies</h3>
        <p>We may use cookies and similar technologies for purposes such as:</p>
        <ul>
          <li>keeping the site functioning properly</li>
          <li>remembering settings or preferences</li>
          <li>understanding site performance</li>
          <li>measuring traffic and interactions</li>
          <li>improving user experience</li>
          <li>supporting analytics or operational insights</li>
        </ul>

        <h3>3. Types of cookies we may use</h3>

        <h4>Essential cookies</h4>
        <p>These cookies help the site function and support basic features.</p>

        <h4>Preference cookies</h4>
        <p>These cookies remember choices such as language, display settings, or similar preferences.</p>

        <h4>Analytics cookies</h4>
        <p>These cookies help us understand how visitors use the site so we can improve performance, navigation, and content quality.</p>

        <h4>Performance cookies</h4>
        <p>These cookies may help us monitor load times, reliability, and general site behavior.</p>

        <h3>4. Third-party tools</h3>
        <p>Some cookies may be set by third-party services that help operate the site, measure usage, or provide embedded functionality. Where third-party tools are used, their own privacy or cookie policies may also apply.</p>

        <h3>5. Managing cookies</h3>
        <p>You can usually manage cookies through your browser settings. Depending on your browser, you may be able to:</p>
        <ul>
          <li>view cookies</li>
          <li>block certain cookies</li>
          <li>delete existing cookies</li>
          <li>set browser-level preferences</li>
        </ul>
        <p>Please note that blocking some cookies may affect site functionality or user experience.</p>

        <h3>6. Changes to this Cookie Policy</h3>
        <p>We may update this Cookie Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of the page.</p>

        <h3>7. Learn more</h3>
        <p>For more information, see:</p>
        <ul>
          <li><a href="/legal/privacy">Privacy Policy</a></li>
          <li><a href="/trust/security-and-data-handling">Security & Data Handling</a></li>
        </ul>

        <h3>Contact</h3>
        <p>If you have questions about our use of cookies, contact legal@cardsflow.com or visit our <a href="/trust/support-and-escalations">Support page</a>.</p>
      </div>
      <RelatedLinksModule 
        links={[
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Terms of Service", href: "/legal/terms" },
          { title: "Trust Center", href: "/trust" },
          { title: "Contact Support", href: "/trust/support-and-escalations" }
        ]} 
      />
    </SubPageLayout>
  );
}
