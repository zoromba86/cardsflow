'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] dark:bg-zinc-800 dark:text-white transition-all hover:bg-gray-50/70 hover:shadow-md',
				'dark:hover:bg-zinc-700/60 focus-visible:outline-none focus-visible:ring-2',
				'dark:data-[state=open]:bg-zinc-700 data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-gray-600 dark:text-white" />
				<span className="text-lg font-medium dark:text-zinc-50 text-zinc-700 tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-600/70 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
				<ChevronDown className="h-4 w-4 text-gray-800 dark:text-white" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden dark:text-white',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-[#ffff] dark:bg-zinc-700 p-4 shadow-md transition-all">
				<span className="flex-1 text-md leading-relaxed">{children}</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300/70 dark:bg-zinc-600 transition-transform hover:scale-105">
					<MessageCircle className="h-5 w-5 text-gray-700 dark:text-white" />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: 'What cryptocurrencies can I use to fund my virtual card?',
		answer:
			'You can fund your Cardsflow virtual card using dozens of major cryptocurrencies through our secure NOWPayments integration. We accept top digital assets including Bitcoin (BTC), Tether (USDT), USD Coin (USDC), and privacy-focused coins like Monero (XMR) to ensure flexible, secure, and borderless transactions.',
	},
	{
		question: 'Can I buy a virtual credit card completely anonymously with Monero?',
		answer:
			'Yes, you can purchase and fund your virtual credit card using Monero (XMR) to maximize your financial privacy. By utilizing privacy-centric cryptocurrencies alongside our invisible verification systems, your underlying identity and transaction history remain protected from third-party data brokers and tracking.',
	},
	{
		question: 'How fast will I receive my crypto virtual card after paying?',
		answer:
			'Your virtual crypto debit card is generated instantly upon payment confirmation. Since we utilize automated crypto payment gateways, your card number, expiration date, and CVV are issued within minutes, allowing you to make online purchases or pay for SaaS subscriptions immediately.',
	},
	{
		question: 'Can I use a crypto-funded virtual card if I live outside the US?',
		answer:
			'Yes, our crypto-funded virtual cards are designed for global users to bypass regional payment restrictions. By funding your account with borderless cryptocurrencies like BTC or USDT, you can successfully pay for international services, US-based ad networks, and global SaaS platforms regardless of your physical location.',
	},
	{
		question: 'How can I pay for ChatGPT Plus or the OpenAI API using cryptocurrency?',
		answer:
			'You can use a crypto-funded virtual Mastercard to seamlessly pay for ChatGPT Plus and OpenAI API usage. By funding a disposable virtual card with cryptocurrency, you bypass regional banking restrictions and traditional credit card requirements, allowing instant, uninterrupted access to global AI subscription services.',
	},
	{
		question: 'Are virtual cards safe to use for digital marketing and Facebook Ads?',
		answer:
			'Yes, virtual cards are highly secure for digital marketing because they allow you to issue reloadable, merchant-locked cards for specific ad accounts. This strict financial compartmentalization prevents cross-platform suspensions and gives media buyers complete control over their daily ad spend without risking primary accounts.',
	},
	{
		question: 'Do I need to provide traditional ID to get a crypto virtual card?',
		answer:
			'No. While traditional banking requires extensive personal documentation, our privacy-preserving infrastructure protects your underlying financial identity from data brokers while ensuring the payment network remains secure and compliant with global anti-fraud standards.',
	},
	{
		question: 'Why do some merchants decline virtual credit cards?',
		answer:
			'Merchants occasionally decline virtual cards due to aggressive AI-driven fraud filters, mismatched billing ZIP codes, or strict Merchant Category Code (MCC) blocks. Using a premium virtual card with superior payment routing and clean transaction metadata significantly improves your merchant acceptance rates for online purchases.',
	},
];

export function AccordionComponent() {
	return (
		<section id="faq" className="w-full py-24 px-6 bg-background">
			<div className="max-w-3xl w-full mx-auto">
				<h2 className="mb-10 text-center text-3xl md:text-4xl font-black text-[#0F1B2D] tracking-tight">
					Frequently Asked Questions
				</h2>
				<CustomAccordion
					type="single"
					collapsible
					defaultValue="item-0"
					className="space-y-4"
				>
					{faqs.map((faq, index) => (
						<CustomAccordionItem
							key={index}
							value={`item-${index}`}
						>
							<CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
							<CustomAccordionContent>{faq.answer}</CustomAccordionContent>
						</CustomAccordionItem>
					))}
				</CustomAccordion>
			</div>

			{/* FAQPage JSON-LD Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqs.map((faq) => ({
							"@type": "Question",
							name: faq.question,
							acceptedAnswer: {
								"@type": "Answer",
								text: faq.answer,
							},
						})),
					}),
				}}
			/>
		</section>
	);
}
