import type { FaqItem } from "@/types";

/**
 * AIO / AEO-optimised FAQ content.
 *
 * Writing rules applied to every item:
 *  1. ANSWER-FIRST  — first sentence is a complete, standalone answer.
 *  2. ENTITY-RICH   — specific brands, numbers, and product names in every answer.
 *  3. SELF-CONTAINED — each answer makes sense without reading the question.
 *  4. NATURAL QUERY — question mirrors how a user asks an AI assistant.
 *  5. NO VAGUENESS  — no "may", "sometimes", "generally" without specifics.
 *
 * JSON-LD FAQPage schema is auto-generated from this array in FaqAccordion.tsx.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does CardsFlow store my personal documents or identity information?",
    answer:
      "No — CardsFlow never stores passports, government IDs, selfies, or any raw identity documents. Eligibility is verified using zero-knowledge cryptographic proofs: our system receives only a mathematical confirmation that you meet the required conditions, not the underlying data itself. Your real-world identity remains exclusively in your possession. Even in a worst-case security event, there is no identity database on CardsFlow servers to expose.",
  },
  {
    question: "What cryptocurrencies can I use to deposit funds into CardsFlow?",
    answer:
      "CardsFlow accepts deposits in 100+ cryptocurrencies via the NOWPayments gateway, including Bitcoin (BTC), Ethereum (ETH), USDT (TRC20, ERC20, and other networks), USDC, BNB, Solana (SOL), Litecoin (LTC), and many more. NOWPayments automatically converts your chosen currency into your account balance. The minimum deposit is $60 USD equivalent. There are no deposit fees on CardsFlow's side — standard network transaction fees from your sending wallet may apply.",
  },
  {
    question: "How much does it cost to issue a CardsFlow virtual card?",
    answer:
      "Issuing a virtual CardsFlow Visa card costs $5 (one-time, per card). A physical CardsFlow Visa card costs $50 (one-time, per card). After issuance, loading funds onto a card incurs a top-up fee: 7% for amounts between $25–$1,999; 6% for $2,000–$4,999; and 5% for $5,000 and above. There are no monthly subscription fees, no inactivity fees, and no account closure fees.",
  },
  {
    question: "If a merchant charges my card fraudulently, does my main account get affected?",
    answer:
      "No — each CardsFlow card is fully isolated and carries only the balance you explicitly load onto it. A fraudulent charge or data breach at a merchant can only affect that individual card's loaded balance, not your CardsFlow wallet or any other active card. You can freeze or permanently delete any compromised card instantly from your dashboard, stopping all further charges within seconds.",
  },
  {
    question: "What is the minimum deposit to get started with CardsFlow?",
    answer:
      "The minimum initial deposit is $60 USD equivalent, payable in any of 100+ supported cryptocurrencies via NOWPayments. CardsFlow charges no deposit fee — the full $60 credits to your wallet. Once funded, you can immediately issue a virtual card ($5 issuance fee) or a physical card ($50 issuance fee), with the remaining balance available for top-ups.",
  },
  {
    question: "Where are CardsFlow Visa cards accepted for payments?",
    answer:
      "CardsFlow issues standard US-based Visa cards accepted at 80+ million merchant locations worldwide. This includes online advertising platforms (Meta Ads, Google Ads, TikTok for Business), SaaS and cloud billing portals (AWS, Notion, Adobe, Stripe), e-commerce stores, travel booking sites (Booking.com, Expedia, Airbnb), and physical point-of-sale terminals globally. Physical CardsFlow cards also support ATM cash withdrawals wherever Visa is accepted.",
  },
  {
    question: "Can I issue cards for my team without giving them access to my account?",
    answer:
      "Yes — you can issue multiple cards from a single dashboard without sharing login credentials. Each card can be assigned to a specific team member, vendor, or spend category. You set per-card spending limits (up to $180,000 per day and $1,000,000 per month), apply merchant-category restrictions, and freeze or delete any card instantly. All cards are managed centrally while remaining operationally independent.",
  },
  {
    question: "How does CardsFlow protect my wallet and account from unauthorised access?",
    answer:
      "CardsFlow uses layered security controls: encrypted session management, multi-factor authentication (MFA), and real-time anomaly detection on wallet activity. Wallet funds cannot be transferred without authenticated user actions. Critically, because CardsFlow stores no identity documents, there is no KYC database that can be breached and used to impersonate you at another financial institution — a structural privacy advantage over traditional card providers.",
  },
];
