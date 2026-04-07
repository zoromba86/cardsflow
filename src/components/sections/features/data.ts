import type { FeatureRow, ArbitrageFeature, StatItem } from "@/types";

export const STATS: StatItem[] = [
  { value: 95, suffix: "%+", label: "Payment Success" },
  { value: 50, suffix: "+", label: "BIN Range Support" },
  { value: 1000, suffix: "+", label: "Corporate Clients" },
  { value: 24, suffix: "/7", label: "Tech Support" },
];

export const FEATURE_ROWS: FeatureRow[] = [
  {
    tag: "Ad Platform Compatibility",
    title: "Works with every major ad network",
    description:
      "Perfectly compatible with Meta Ads, TikTok Ads, and Google Ads. Virtual cards are ready for direct use in your ad accounts — no workarounds, no delays.",
    checks: [
      "Instant card bind to Meta, TikTok, Google ad accounts",
      "Dedicated card per ad account for full isolation",
      "Real-time OTP sync to prevent campaign interruptions",
    ],
    visual: "platforms",
    reverse: false,
  },
  {
    tag: "Reconciliation",
    title: "Reconciliation & bill download",
    description:
      "Detailed transaction records and financial reports with multi-format export. Finance teams can close monthly and annual settlements in minutes.",
    checks: [
      "Detailed transaction & summary reports",
      "Excel and CSV multi-format export",
      "Automated monthly settlement assistant",
    ],
    visual: "reconciliation",
    reverse: true,
  },
  {
    tag: "Card Lifecycle",
    title: "Card management & rule settings",
    description:
      "Batch-create cards, set custom rules, and handle freeze/unfreeze instantly. Full lifecycle management across all your business scenarios.",
    checks: [
      "Batch creation, activation, and freezing",
      "Customizable daily, monthly, and total limits",
      "Lifecycle managed from creation to destruction",
    ],
    visual: "card-mgmt",
    reverse: false,
  },
  {
    tag: "BIN Intelligence",
    title: "Multi-card BIN integration",
    description:
      "Wide BIN range with intelligent matching for your consumption scenario — maximizing payment success and minimizing chargeback losses.",
    checks: [
      "Scenario-based BIN selection engine",
      "95%+ payment success rate",
      "Chargeback and suspension risk control",
    ],
    visual: "bin",
    reverse: true,
  },
];

export const ARBITRAGE_FEATURES: ArbitrageFeature[] = [
  { title: "Instant Card Issuance", description: "Get cards in seconds and use them immediately." },
  { title: "Ads Without Risk of Blocks", description: "Work with Facebook Ads, Google Ads, and TikTok Ads with minimal risk of bans." },
  { title: "Unlimited Usage", description: "No limits on the number of cards or spending volume." },
  { title: "Low Fees", description: "Minimal costs for card issuance and maintenance." },
  { title: "Secure Payments", description: "Reliable transaction protection for your peace of mind." },
  { title: "Support for Apple Pay & Google Pay", description: "Pay for purchases via smartphone with NFC—fast and convenient." },
  { title: "Professional Support", description: "We respond to requests promptly and resolve any issues quickly." },
  { title: "Zero-Knowledge Protocol", description: "No verification needed. Start in seconds." },
];
