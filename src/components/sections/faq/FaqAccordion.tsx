"use client";

import * as React from "react";
import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "./data";

// ─── Primitives ──────────────────────────────────────────────────────────────

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
CustomAccordionItem.displayName = "CustomAccordionItem";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-3 rounded-2xl p-3 md:p-4 text-left",
        "bg-white dark:bg-zinc-800 transition-all hover:bg-gray-50/70 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 data-[state=open]:shadow-md",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-gray-600 shrink-0" />
        <span className="text-sm md:text-lg font-medium text-zinc-700 tracking-wide leading-snug">
          {children}
        </span>
      </div>
      <div className="flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
        <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-gray-800" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2",
      className,
    )}
    {...props}
  >
    <div className="mt-3 ml-7 md:ml-14">
      <div className="flex items-start gap-3 rounded-2xl bg-white p-3 md:p-4 shadow-md">
        <span className="flex-1 text-sm md:text-base leading-relaxed text-zinc-600">
          {children}
        </span>
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-300/70 hover:scale-105 transition-transform">
          <MessageCircle className="h-4 w-4 text-gray-700" />
        </div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = "CustomAccordionContent";

// ─── Public exports ───────────────────────────────────────────────────────────

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};

// ─── Section component ────────────────────────────────────────────────────────

export function AccordionComponent() {
  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24 px-4 md:px-6 bg-white"
    >
      <div className="max-w-3xl w-full mx-auto">
        <h2 className="mb-8 md:mb-10 text-center text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>

        <CustomAccordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-3 md:space-y-4"
        >
          {FAQ_ITEMS.map((faq, index) => (
            <CustomAccordionItem key={index} value={`item-${index}`}>
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
          ))}
        </CustomAccordion>
      </div>

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
