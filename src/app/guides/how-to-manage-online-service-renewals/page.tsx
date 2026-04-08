import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, DirectAnswerBlock, CTASection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "How to Manage Online Service Renewals with Virtual Cards | CardsFlow",
  description: "Learn how to organize renewals, reduce subscription sprawl, and map online services to dedicated payment methods.",
};

export default function ManageRenewalsPage() {
  return (
    <SubPageLayout>
      <HeroSection 
        title="How to Manage Online Service Renewals"
        supportCopy="A step-by-step guide to reducing subscription sprawl and organizing renewal workflows with virtual cards."
        primaryCtaText="Build a Subscription Workflow"
        primaryCtaLink="/use-cases/online-service-subscriptions"
        secondaryCtaText="Learn the Basics"
        secondaryCtaLink="/guides/how-virtual-cards-work-for-online-payments"
      />
      
      <DirectAnswerBlock>
        The easiest way to reduce subscription sprawl is to assign each important online service its own payment lane. When renewals are isolated, teams can see what is billing, who owns it, and what needs to change when a service is replaced or canceled.
      </DirectAnswerBlock>

      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16">
        {/* Step-by-step process */}
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E5B220]/20 border border-[#E5B220]/30 flex items-center justify-center text-[#E5B220] font-black text-lg">1</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-200 mb-3">Make a complete list of active online services</h3>
              <p className="text-zinc-400 mb-3">Start with every recurring digital vendor, not just the largest ones.</p>
              <p className="text-zinc-400 text-sm">Your list should include: software tools, service platforms, recurring digital subscriptions, team-owned services, and long-tail tools that quietly renew.</p>
            </div>
          </div>

          <div className="h-px w-full bg-white/5"></div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E5B220]/20 border border-[#E5B220]/30 flex items-center justify-center text-[#E5B220] font-black text-lg">2</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-200 mb-3">Assign ownership</h3>
              <p className="text-zinc-400 mb-3">Every recurring service should have an internal owner.</p>
              <p className="text-zinc-400 text-sm">If no one owns the service, it becomes harder to review and easier to forget.</p>
            </div>
          </div>

          <div className="h-px w-full bg-white/5"></div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E5B220]/20 border border-[#E5B220]/30 flex items-center justify-center text-[#E5B220] font-black text-lg">3</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-200 mb-3">Separate billing</h3>
              <p className="text-zinc-400 mb-3">Move important or high-risk services onto dedicated virtual cards.</p>
              <p className="text-zinc-400 text-sm">This is especially useful for: critical tools, services with frequent changes, vendors that need clear internal accountability, and categories where billing disruption would matter.</p>
            </div>
          </div>

          <div className="h-px w-full bg-white/5"></div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E5B220]/20 border border-[#E5B220]/30 flex items-center justify-center text-[#E5B220] font-black text-lg">4</div>
            <div>
              <h3 className="text-xl font-bold text-zinc-200 mb-3">Review regularly</h3>
              <p className="text-zinc-400 mb-3">Once renewals are structured, review them on a schedule.</p>
              <p className="text-zinc-400 text-sm">A structured payment map makes it easier to understand: what is still active, what can be canceled, what should move to a different billing lane, and what has no clear owner.</p>
            </div>
          </div>
        </div>

        {/* Why this works */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-zinc-200 mb-4">Why this works</h3>
          <p className="text-zinc-400 mb-4">A dedicated renewal structure reduces confusion during:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Vendor changes", "Team offboarding", "Software stack cleanup", "Card replacement", "Budgeting reviews"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="text-[#E5B220]">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Ready to organize your subscriptions?"
        description="Map each recurring service to a dedicated virtual card for clearer renewal management."
        primaryCtaText="Build a Subscription Workflow"
        primaryCtaLink="/use-cases/online-service-subscriptions"
        secondaryCtaText="Get Started"
        secondaryCtaLink="/onboarding"
      />

      <RelatedLinksModule 
        links={[
          { title: "Online Service Subscriptions", href: "/use-cases/online-service-subscriptions" },
          { title: "How Virtual Cards Work", href: "/guides/how-virtual-cards-work-for-online-payments" },
          { title: "Trust Center", href: "/trust" }
        ]} 
      />
    </SubPageLayout>
  );
}
