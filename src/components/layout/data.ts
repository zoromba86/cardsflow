import type { NavLink, FooterColumn } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Use Cases", sectionId: "user-case" },
  { label: "Features", sectionId: "features" },
  { label: "FAQ", sectionId: "faq", href: "/faq" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Use Cases",
    links: [
      { label: "Ad Spend Management", href: "/use-cases/ad-spend-management/" },
      { label: "Travel Spend", href: "/use-cases/travel-spend-management/" },
      { label: "Online Subscriptions", href: "/use-cases/online-service-subscriptions/" },
    ],
  },
  {
    heading: "Resources & Guides",
    links: [
      { label: "Virtual vs Shared Team Card", href: "/compare/virtual-card-vs-shared-team-card-for-ad-spend/" },
      { label: "Virtual vs Corporate Card", href: "/compare/virtual-card-vs-corporate-card-for-travel-spend/" },
      { label: "How Virtual Cards Work", href: "/guides/how-virtual-cards-work-for-online-payments/" },
      { label: "Manage Service Renewals", href: "/guides/how-to-manage-online-service-renewals/" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Trust Center", href: "/trust/" },
      { label: "Fees & Disclosures", href: "/trust/fees-and-disclosures/" },
      { label: "How We Review Content", href: "/trust/how-we-review-content/" },
      { label: "Prohibited Use", href: "/trust/prohibited-use/" },
      { label: "Security & Data", href: "/trust/security-and-data-handling/" },
      { label: "Support & Escalations", href: "/trust/support-and-escalations/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Contact Us", href: "/contact/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Refund Policy", href: "/refund-policy/" },
      { label: "Privacy Policy", href: "/legal/privacy/" },
      { label: "Terms of Service", href: "/legal/terms/" },
      { label: "Cookie Policy", href: "/legal/cookies/" },
    ],
  },
];
