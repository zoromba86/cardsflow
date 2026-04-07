const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(srcDir, 'app');

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const trustPages = [
  {
    slug: 'trust',
    title: 'Trust Center',
    meta: 'Learn how we review content, define supported use cases, explain fees, and document risk boundaries.',
    schemaType: 'WebPage',
  },
  {
    slug: 'trust/fees-and-disclosures',
    title: 'Fees & Disclosures',
    meta: 'Review fees, accepted payment methods, supported workflows, and service disclosures.',
    schemaType: 'FinancialService',
  },
  {
    slug: 'trust/how-we-review-content',
    title: 'How We Review Content',
    meta: 'Learn how we research, write, review, and update content related to virtual cards, payment workflows, and supported use cases.',
    schemaType: 'Article',
  },
  {
    slug: 'trust/prohibited-use',
    title: 'Prohibited Use',
    meta: 'Review unsupported, restricted, and prohibited uses of our virtual card service and supported payment workflows.',
    schemaType: 'Article',
  },
  {
    slug: 'trust/security-and-data-handling',
    title: 'Security & Data Handling',
    meta: 'Learn how we think about account protection, operational safeguards, and handling the information users share with us.',
    schemaType: 'Article',
  },
  {
    slug: 'trust/support-and-escalations',
    title: 'Support & Escalations',
    meta: 'Learn how to contact support, what information to include in requests, and how account, billing, and urgent issues are escalated.',
    schemaType: 'Article',
  },
];

const legalPages = [
  {
    slug: 'legal/privacy',
    title: 'Privacy Policy',
    meta: 'Read our Privacy Policy to understand what information we collect, how we use it, and how to contact us about privacy-related questions.',
    schemaType: 'WebPage',
  },
  {
    slug: 'legal/terms',
    title: 'Terms of Service',
    meta: 'Read the Terms of Service governing your use of our website, content, and payment-related workflows.',
    schemaType: 'WebPage',
  },
  {
    slug: 'legal/cookies',
    title: 'Cookie Policy',
    meta: 'Learn how we use cookies and similar technologies to operate the site, improve performance, and understand usage.',
    schemaType: 'WebPage',
  },
];

const allPages = [...trustPages, ...legalPages];

allPages.forEach(page => {
  const pageDir = path.join(appDir, page.slug);
  ensureDir(pageDir);
  const pageContent = `import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "${page.title} | CardsFlow",
  description: "${page.meta}",
};

export default function ${page.slug.split('/').pop().replace(/-/g, '')}Page() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="${page.title}"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-8 prose prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-200">
        <p>This is the placeholder for the full ${page.title} text.</p>
        <h2>Detailed Section</h2>
        <p>Content to be added here based on the site materials document.</p>
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
`;
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
  console.log('Generated', page.slug);
});
