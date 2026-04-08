import { Navbar, Footer } from "@/components/layout";
import { Search, HelpCircle, FileText, Settings, ShieldCheck, CreditCard, Zap, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — CardsFlow Help Center",
  description: "Find answers to common questions about CardsFlow virtual cards, wallet funding, account setup, fees, and security.",
};

/** ─── Category data (wired by dev to filter FAQ_ITEMS) ─────────────────────── */
const CATEGORIES = [
  { id: "getting-started", label: "Getting Started", icon: HelpCircle },
  { id: "card-issuance",   label: "Card Issuance",   icon: CreditCard },
  { id: "workspace",       label: "Workspace",        icon: Settings },
  { id: "billing",         label: "Billing & Fees",   icon: FileText },
  { id: "security",        label: "Security",          icon: ShieldCheck },
  { id: "performance",     label: "Speed & Limits",   icon: Zap },
];

/**
 * ─── FAQ ITEMS ─────────────────────────────────────────────────────────────────
 *
 * 🔧 DEVELOPER NOTE:
 * Replace this static array with a dynamic data source (CMS, API, database).
 * Each item must conform to: { category: string; question: string; answer: string }
 * The `category` field must match one of the `id` values in CATEGORIES above.
 *
 * Example fetch:
 *   const FAQ_ITEMS = await fetch('/api/faq').then(r => r.json());
 */
const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Add questions here or replace with API call ──
  {
    category: "getting-started",
    question: "How do I create my CardsFlow account?",
    answer: "Answer to be provided by backend team.",
  },
  {
    category: "card-issuance",
    question: "How fast can I issue a virtual card?",
    answer: "Answer to be provided by backend team.",
  },
  {
    category: "billing",
    question: "Are there any deposit fees?",
    answer: "Answer to be provided by backend team.",
  },
  {
    category: "security",
    question: "How does CardsFlow protect my data?",
    answer: "Answer to be provided by backend team.",
  },
  {
    category: "workspace",
    question: "Can I manage multiple wallets in one workspace?",
    answer: "Answer to be provided by backend team.",
  },
  {
    category: "performance",
    question: "What are the transaction speed limits?",
    answer: "Answer to be provided by backend team.",
  },
];

export default function FAQPage() {
  return (
    <main
      className="min-h-screen w-full bg-slate-50 flex flex-col"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="w-full pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-[#0F1B2D] relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#E5B220]/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block text-[#E5B220] text-xs font-black uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full bg-[#E5B220]/10 border border-[#E5B220]/20">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg text-slate-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Find instant answers about cards, wallets, fees, and security — or reach
            our support team directly.
          </p>

          {/* Search bar — wire to JS filter or search API */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="faq-search"
              type="text"
              placeholder="Search questions…"
              className="w-full bg-white/10 border border-white/20 text-white placeholder:text-slate-500 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#E5B220] focus:border-transparent transition-all"
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
                <div className="w-9 h-9 rounded-xl bg-[#E5B220]/10 border border-[#E5B220]/20 flex items-center justify-center">
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
                        {item.answer ? (
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        ) : (
                          /* Placeholder when answer is empty */
                          <div className="space-y-2">
                            <div className="h-4 bg-slate-100 rounded-md w-full animate-pulse" />
                            <div className="h-4 bg-slate-100 rounded-md w-4/5 animate-pulse" />
                            <div className="h-4 bg-slate-100 rounded-md w-2/3 animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          );
        })}

        {/* ── Still have questions CTA ────────────────────────────────────────── */}
        <div className="mt-6 rounded-3xl bg-[#0F1B2D] p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#E5B220]/10 blur-[80px]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-400 text-sm font-light mb-7 max-w-sm mx-auto">
              Our support team is available around the clock to help you get answers fast.
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
