import { Navbar, Footer } from "@/components/layout";
import { Search, HelpCircle, FileText, Settings, ShieldCheck, CreditCard, Zap, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Script from "next/script";

/**
 * AIO / AEO FAQ Page — CardsFlow
 *
 * Optimised for:
 *  - AI answer engines (ChatGPT, Gemini, Perplexity, Claude) — answer-first structure,
 *    entity-rich language, self-contained answers, no ambiguity.
 *  - Featured snippets — concise direct answers in the first sentence.
 *  - FAQPage JSON-LD schema — auto-generated from FAQ_ITEMS below.
 *  - YMYL compliance — every financial figure is specific and verifiable.
 *  - NOWPayments integration — 100+ cryptocurrency deposit options reflected.
 */

export const metadata: Metadata = {
  title: "FAQ — CardsFlow Virtual & Physical Visa Card Help Center",
  description:
    "Authoritative answers about CardsFlow Visa cards: deposit in 100+ cryptocurrencies via NOWPayments, fees, zero-knowledge privacy, spending limits, team management, and global merchant acceptance.",
  openGraph: {
    title: "CardsFlow FAQ — Virtual Card Privacy, Fees & Crypto Deposits Explained",
    description:
      "Everything you need to know before issuing your first CardsFlow Visa card. Transparent answers on 100+ crypto deposits, zero-knowledge privacy, spending limits, and team controls.",
  },
};

// ── Category metadata ─────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "getting-started", label: "Getting Started",   icon: HelpCircle  },
  { id: "card-issuance",   label: "Card Issuance",     icon: CreditCard  },
  { id: "deposits",        label: "Deposits & Crypto", icon: Zap         },
  { id: "billing",         label: "Billing & Fees",    icon: FileText    },
  { id: "workspace",       label: "Workspace & Teams", icon: Settings    },
  { id: "security",        label: "Security & Privacy",icon: ShieldCheck },
];

// ── FAQ content — AIO / AEO optimised ────────────────────────────────────────
//
// Every answer follows the AIO writing contract:
//   Rule 1 — ANSWER-FIRST: first sentence is a complete, standalone answer.
//   Rule 2 — ENTITY-RICH: names brands, numbers, and product names explicitly.
//   Rule 3 — SELF-CONTAINED: makes sense with no surrounding context.
//   Rule 4 — NATURAL QUERY: question mirrors how a user asks an AI assistant.
//   Rule 5 — NO VAGUENESS: every claim is specific and verifiable.
//
const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [

  // ── GETTING STARTED ──────────────────────────────────────────────────────────
  {
    category: "getting-started",
    question: "What is CardsFlow and who is it built for?",
    answer:
      "CardsFlow is a virtual and physical Visa card issuance platform built for businesses, digital marketers, growth teams, and professionals who need to pay online without exposing their primary bank account or personal identity. It is particularly well-suited to digital advertisers running campaigns on Meta, Google, and TikTok; SaaS-heavy teams managing multiple tool subscriptions; travel managers booking flights and hotels; and any operation that needs to isolate merchant risk per workflow. CardsFlow is funded through cryptocurrency deposits processed by NOWPayments and issues standard US-based Visa cards accepted at 80+ million merchant locations globally.",
  },
  {
    category: "getting-started",
    question: "How do I create an account and get my first card?",
    answer:
      "Create an account at cardsflow.net/register — no identity document upload is required. Once registered, deposit at least $60 USD equivalent in any supported cryptocurrency via the NOWPayments gateway (100+ coins accepted including BTC, ETH, USDT, USDC, and SOL). When your wallet is funded, issue a virtual card for a one-time $5 fee — the card is ready to use within seconds. If you need a physical Visa card for in-store payments or ATM withdrawals, select Physical Card for a one-time $50 issuance fee.",
  },
  {
    category: "getting-started",
    question: "Does CardsFlow require identity verification or KYC documents?",
    answer:
      "CardsFlow does not require you to upload a passport, government ID, driving licence, or any biometric data. Instead, CardsFlow uses zero-knowledge cryptographic verification: our system receives only a mathematical proof that you meet the eligibility criteria (minimum age, supported jurisdiction, not a sanctioned individual) without ever seeing or storing the underlying documents. This means your real-world identity never reaches CardsFlow servers and cannot be exposed in a data breach.",
  },

  // ── CARD ISSUANCE ────────────────────────────────────────────────────────────
  {
    category: "card-issuance",
    question: "How fast is virtual card issuance after funding my wallet?",
    answer:
      "Virtual cards are issued immediately — typically within 2 to 6 seconds of clicking 'Issue Card' on your dashboard. There is no manual review, waiting period, or approval queue for virtual card issuance. The $5 issuance fee is deducted from your wallet balance at the moment of issuance, and your full card details (card number, expiry, CVV) are available instantly for online payments.",
  },
  {
    category: "card-issuance",
    question: "How does a CardsFlow physical Visa card work?",
    answer:
      "CardsFlow physical Visa cards are standard US-issued Visa prepaid cards with a one-time $50 issuance fee. After issuance, the physical card is shipped to your delivery address. It supports chip-and-PIN payments at in-store point-of-sale terminals, contactless tap-to-pay, and ATM cash withdrawals wherever Visa is accepted globally. You fund the physical card the same way as a virtual card — by transferring from your CardsFlow wallet (top-up fees: 7% for $25–$1,999; 6% for $2,000–$4,999; 5% for $5,000+). Each physical card is valid for 5 years from the date of issuance.",
  },
  {
    category: "card-issuance",
    question: "Can I issue multiple cards and keep them active simultaneously?",
    answer:
      "Yes — CardsFlow is designed for multi-card operations. You can issue up to 3 cards per account and manage them all from a single dashboard. Each card holds its own isolated balance, has its own spending limits, and operates completely independently. This means you can have one card for Meta Ads, one for Google Ads, and one for SaaS subscriptions, all running simultaneously without any card affecting another.",
  },
  {
    category: "card-issuance",
    question: "What is the difference between a virtual card and a physical card from CardsFlow?",
    answer:
      "A CardsFlow virtual card ($5 issuance) exists as a digital card number, expiry, and CVV — usable immediately for online payments, digital advertising platforms, SaaS billing, and any merchant that accepts card-not-present Visa transactions. A physical CardsFlow Visa card ($50 issuance) is a tangible plastic card shipped to your address, usable for in-store chip-and-PIN payments, contactless tap payments, and ATM cash withdrawals globally. Both card types draw from the same CardsFlow wallet and share the same fee structure for top-ups.",
  },

  // ── DEPOSITS & CRYPTO ────────────────────────────────────────────────────────
  {
    category: "deposits",
    question: "What cryptocurrencies does CardsFlow accept for deposits?",
    answer:
      "CardsFlow accepts 100+ cryptocurrencies for deposits via the NOWPayments payment gateway. Supported currencies include Bitcoin (BTC), Ethereum (ETH), USDT (on TRC20, ERC20, BEP20, and other networks), USDC, Binance Coin (BNB), Solana (SOL), Litecoin (LTC), Dogecoin (DOGE), Ripple (XRP), and many more. NOWPayments automatically converts your chosen cryptocurrency into your CardsFlow wallet balance at the current exchange rate. CardsFlow charges no deposit fee — standard network transaction fees from your sending wallet apply.",
  },
  {
    category: "deposits",
    question: "What is the minimum deposit amount to fund a CardsFlow wallet?",
    answer:
      "The minimum deposit is $60 USD equivalent, payable in any supported cryptocurrency via NOWPayments. There is no maximum deposit cap. The deposit itself carries no CardsFlow fee — 100% of your deposit (after network fees from your sending wallet) credits to your CardsFlow wallet. The $60 minimum ensures you have enough to cover at least one virtual card issuance ($5) and one initial top-up ($25 minimum).",
  },
  {
    category: "deposits",
    question: "How long does a cryptocurrency deposit take to appear in my CardsFlow wallet?",
    answer:
      "Deposits processed via NOWPayments typically credit to your CardsFlow wallet within 10 to 30 minutes, depending on blockchain congestion and the number of confirmations required for your chosen network. Bitcoin deposits usually require 2–3 confirmations; USDT on TRC20 is typically confirmed in under 3 minutes. Once your balance is confirmed, you can immediately issue cards or top up existing ones.",
  },
  {
    category: "deposits",
    question: "What happens if I send cryptocurrency over an unsupported network?",
    answer:
      "Sending cryptocurrency over an unsupported network or to an incorrect address will result in a permanent, unrecoverable loss of funds. NOWPayments supports multiple networks for the same currency (for example, USDT is accepted on TRC20, ERC20, and BEP20), so always select your intended network carefully before sending. CardsFlow and NOWPayments cannot recover funds sent to incorrect addresses or unsupported networks. Always send a small test amount before making a large deposit.",
  },

  // ── BILLING & FEES ───────────────────────────────────────────────────────────
  {
    category: "billing",
    question: "What is the complete CardsFlow fee structure?",
    answer:
      "CardsFlow fees are: Deposit — free (network fees from your wallet apply). Virtual card issuance — $5 one-time per card. Physical card issuance — $50 one-time per card. Top-up (wallet to card) — 7% for $25–$1,999; 6% for $2,000–$4,999; 5% for $5,000 and above. Minimum top-up — $25. Foreign exchange on non-USD merchants — 1.2% above the interbank rate. ATM withdrawal handling — $2.00 + 2.0% of the amount withdrawn. Pre-authorisation network fee — $0.20 per transaction. Dispute/chargeback handling — $35 per case (refunded if the dispute is upheld). Inactivity fee — none. Account closure — free.",
  },
  {
    category: "billing",
    question: "Are there any monthly subscription fees or hidden charges?",
    answer:
      "No — CardsFlow has no monthly subscription fees, no platform access fees, no inactivity fees, and no account maintenance charges. You pay only for what you use: card issuance ($5 virtual, $50 physical), top-ups (tiered 5–7%), and transaction-level fees (foreign exchange, ATM, pre-authorisation) when applicable. The complete fee schedule is published on the Fees & Disclosures page at cardsflow.net/trust/fees-and-disclosures.",
  },
  {
    category: "billing",
    question: "How does CardsFlow handle disputes and chargebacks?",
    answer:
      "To raise a dispute, log in to your dashboard, navigate to the transaction, and select 'Report an Issue' — or email disputes@cardsflow.net with your transaction ID, date, amount, and reason. CardsFlow will issue a case reference within 24 hours and complete the investigation within 15 business days. A $35 handling fee applies per dispute case; this fee is refunded in full if your dispute is upheld. Unauthorised transactions must be reported within 13 months of the transaction date; disputes over goods or services not received must be raised within 120 days.",
  },

  // ── WORKSPACE & TEAMS ────────────────────────────────────────────────────────
  {
    category: "workspace",
    question: "Can I issue cards for multiple team members without sharing my account login?",
    answer:
      "Yes — you issue and manage all cards from your central CardsFlow dashboard without sharing login credentials with anyone. Each card can be assigned to a specific team member, vendor, or spend category. You set individual spending limits per card (up to $100,000/day and $1,000,000/month per card), apply merchant restrictions, and freeze or permanently delete any card instantly from the dashboard — without affecting any other active cards.",
  },
  {
    category: "workspace",
    question: "What happens if a merchant charges my card unexpectedly or without authorisation?",
    answer:
      "Because each CardsFlow card holds only the balance you explicitly load onto it, an unexpected or fraudulent charge is contained entirely to that individual card's balance. Your CardsFlow wallet and all other active cards are completely unaffected. Log in to your dashboard and freeze or delete the affected card immediately to prevent any further charges. Then raise a dispute via the dashboard or by emailing disputes@cardsflow.net.",
  },
  {
    category: "workspace",
    question: "Can I use a CardsFlow virtual card for Meta Ads, Google Ads, or TikTok for Business?",
    answer:
      "Yes — CardsFlow virtual Visa cards are fully compatible with Meta Ads Manager, Google Ads, TikTok for Business, Snapchat Ads, and other major digital advertising platforms. Because each card is isolated, you can create a dedicated card per ad account, preventing a billing suspension on one platform from affecting campaigns on another. You can also set per-card spending caps to enforce campaign budgets at the card level.",
  },

  // ── SECURITY & PRIVACY ───────────────────────────────────────────────────────
  {
    category: "security",
    question: "Does CardsFlow store my personal documents or identity data?",
    answer:
      "No — CardsFlow stores no passports, government IDs, biometric data, or any raw identity documents. Our zero-knowledge eligibility verification works by receiving only a cryptographic proof that you meet the required conditions (age, jurisdiction, sanctions status) — never the underlying documents themselves. Your real-world identity is never transmitted to CardsFlow servers. In the event of a security incident, there is no identity database to breach or exploit.",
  },
  {
    category: "security",
    question: "How does CardsFlow protect my wallet from unauthorised access?",
    answer:
      "CardsFlow protects accounts through encrypted session management, multi-factor authentication (MFA) options, and real-time anomaly detection on wallet and transaction activity. Wallet funds cannot be moved without authenticated user actions. If you suspect unauthorised access, email security@cardsflow.net immediately to initiate an emergency account lock. Because no identity documents are stored on CardsFlow servers, there is no KYC datastore that can be weaponised against you at another institution.",
  },
  {
    category: "security",
    question: "What is zero-knowledge verification and why does it matter for financial privacy?",
    answer:
      "Zero-knowledge verification is a cryptographic method that proves a statement is true without revealing the underlying information. Applied to identity: a zero-knowledge proof confirms 'this person is over 18 and not on a sanctions list' without ever showing CardsFlow the person's date of birth or identity document. This matters because traditional financial platforms store identity scans in centralised databases — prime targets for data breaches and identity theft. CardsFlow's zero-knowledge approach means your financial activity is not linked to your real-world identity in any database we control.",
  },
];

// ── JSON-LD: FAQPage schema (generated from FAQ_ITEMS) ───────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ── Page component ────────────────────────────────────────────────────────────
export default function FAQPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      {/* FAQPage JSON-LD — picked up by Google, Bing, Perplexity, ChatGPT Browse */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="w-full pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-slate-50 relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#E5B220]/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg text-slate-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Authoritative answers on crypto deposits, privacy, fees, card issuance, and security — written for people making real financial decisions.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="faq-search"
              type="text"
              placeholder="Search questions…"
              className="w-full bg-white border border-slate-200 shadow-sm text-slate-900 placeholder:text-slate-400 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#E5B220] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* ── Category Filter ───────────────────────────────────────────────────── */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-[60px] z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                id={`faq-cat-${cat.id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-500 bg-slate-100 hover:bg-[#E5B220]/10 hover:text-[#E5B220] transition-all whitespace-nowrap border border-transparent hover:border-[#E5B220]/20"
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── FAQ Accordion Body ────────────────────────────────────────────────── */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const items = FAQ_ITEMS.filter((f) => f.category === cat.id);
          if (items.length === 0) return null;

          return (
            <div key={cat.id} id={`section-${cat.id}`} className="mb-14">
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#E5B220]" />
                </div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  {cat.label}
                </h2>
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {items.map((item, idx) => (
                  <details
                    key={idx}
                    id={`faq-item-${cat.id}-${idx}`}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                      <span className="text-slate-800 font-semibold text-base leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Still have questions CTA ─────────────────────────────────────── */}
        <div className="mt-6 rounded-3xl bg-slate-50 p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#E5B220]/10 blur-[80px]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-400 text-sm font-light mb-7 max-w-sm mx-auto">
              Can&apos;t find what you need? Our support team is available 24/7 and typically responds within minutes for account and security questions.
            </p>
            <a
              href="/trust/support-and-escalations"
              id="faq-contact-support"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5B220] text-[#0F1B2D] text-sm font-black rounded-xl hover:shadow-[0_0_32px_rgba(229,178,32,0.4)] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
