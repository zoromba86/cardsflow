import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, UseCaseCardGrid, CTASection } from "@/components/blocks";
import { Shield, Zap, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases | CardsFlow",
  description: "Explore how CardsFlow virtual cards can help you manage ad spend, travel costs, and online subscriptions.",
};

export default function UseCasesPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="Payment Use Cases"
        supportCopy="Purpose-built virtual cards for the payment tasks that matter most to your business."
        primaryCtaText="Get Started"
        primaryCtaLink="/onboarding"
      />
      
      <div className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 text-center text-slate-900">Explore our workflows</h2>
        <UseCaseCardGrid 
          cards={[
            { 
              title: "Ad Spend Management", 
              description: "Isolate ad accounts and control media budgets effortlessly.", 
              icon: <Zap />, 
              href: "/use-cases/ad-spend-management" 
            },
            { 
              title: "Travel Spend Management", 
              description: "Manage employee travel and booking costs with unique cards.", 
              icon: <Compass />, 
              href: "/use-cases/travel-spend-management" 
            },
            { 
              title: "Online Subscriptions", 
              description: "Organize renewals and avoid unwanted recurring charges.", 
              icon: <Shield />, 
              href: "/use-cases/online-service-subscriptions" 
            }
          ]}
        />
      </div>

      <CTASection 
        title="Ready to choose your setup?"
        description="Join thousands of businesses doing this every day."
        primaryCtaText="Start Now"
        primaryCtaLink="/register"
        secondaryCtaText="Talk to Sales"
        secondaryCtaLink="/contact"
      />
    </SubPageLayout>
  );
}
