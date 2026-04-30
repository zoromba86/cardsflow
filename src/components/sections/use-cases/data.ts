import type { UseCaseCard } from "@/types";

export const USE_CASE_CARDS: UseCaseCard[] = [
  {
    badge: "A",
    title: "Ad Spend Management",
    desc: "Isolate media buying across Meta, TikTok, and Google with dedicated cards per ad account or campaign.",
    color: "#E5B220",
    variant: "swirl",
  },
  {
    badge: "S",
    title: "SaaS & Cloud Subscriptions",
    desc: "Map AWS, Notion, and other recurring tools to specific cards to simplify renewal visibility.",
    color: "#dd8448",
    variant: "swirl",
  },
  {
    badge: "T",
    title: "Travel & Bookings",
    desc: "Pay flights, hotels, and event travel with single-use or purpose-specific virtual cards.",
    color: "DodgerBlue",
    variant: "hue",
  },
  {
    badge: "P",
    title: "Physical Card Payments & ATM",
    desc: "Order standard CardsFlow Visa cards for employee travel, offline usage, and ATM access.",
    color: "#9b5de5",
    variant: "hue",
  },
];
