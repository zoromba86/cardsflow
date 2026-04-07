// ─── Shared TypeScript types for CardsFlow ───────────────────────────────────

export type ElectricCardVariant = "swirl" | "hue";

export interface UseCaseCard {
  badge: string;
  title: string;
  desc: string;
  color: string;
  variant: ElectricCardVariant;
}

export interface NavLink {
  label: string;
  sectionId: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureRow {
  tag: string;
  title: string;
  description: string;
  checks: string[];
  visual: string;
  reverse: boolean;
}

export interface ArbitrageFeature {
  title: string;
  description: string;
}

export interface Platform {
  name: string;
  color: string;
  svg: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}
