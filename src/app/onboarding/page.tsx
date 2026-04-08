import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, CTASection } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Get Started | CardsFlow",
  description: "Create your CardsFlow account and start issuing virtual cards for ad spend, travel, and online subscriptions.",
};

export default function OnboardingPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Get Started with CardsFlow"
        supportCopy="Create your account in minutes and start issuing purpose-built virtual cards for the workflows that matter most."
        primaryCtaText="Create Free Account"
        primaryCtaLink="#"
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Create your account", desc: "Sign up with your email or business credentials. No credit card required to explore." },
            { step: "2", title: "Fund your wallet", desc: "Add funds via supported payment methods. Your balance is ready to use immediately." },
            { step: "3", title: "Issue your first card", desc: "Create a virtual card for an ad account, travel vendor, or subscription in seconds." },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-5 bg-[#E5B220]/10 text-[#E5B220] rounded-xl flex items-center justify-center text-xl font-black">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CTASection
        title="Ready to streamline your payments?"
        description="Join teams who already use CardsFlow to separate, control, and simplify their online payment workflows."
        primaryCtaText="Create Account"
        primaryCtaLink="#"
        secondaryCtaText="See Fees & Disclosures"
        secondaryCtaLink="/trust/fees-and-disclosures"
      />
    </SubPageLayout>
  );
}
