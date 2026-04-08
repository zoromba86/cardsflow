import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, CTASection } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Register | CardsFlow",
  description: "Create a CardsFlow account and start managing your online payments with purpose-built virtual cards.",
};

export default function RegisterPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Create Your Account"
        supportCopy="Sign up for CardsFlow and start issuing virtual cards for ad spend, travel, and online subscriptions."
        primaryCtaText="Start Registration"
        primaryCtaLink="#"
      />

      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white border border-slate-200 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What you&apos;ll need</h2>
          <ul className="space-y-4 text-slate-600">
            {[
              "A valid email address",
              "Your business or personal details",
              "A supported funding method",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#E5B220] mt-0.5 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-400">
            Registration will be available once the backend is connected. This is a frontend preview.
          </p>
        </div>
      </div>

      <CTASection
        title="Have questions before signing up?"
        description="Review our fees, supported workflows, and trust documentation."
        primaryCtaText="See Fees & Disclosures"
        primaryCtaLink="/trust/fees-and-disclosures"
        secondaryCtaText="Contact Support"
        secondaryCtaLink="/contact"
      />
    </SubPageLayout>
  );
}
