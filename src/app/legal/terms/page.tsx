import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Terms of Service | CardsFlow",
  description: "Read CardsFlow's Terms of Service covering card issuance, fees, prohibited use, dispute resolution, and account management.",
};

export default function termsPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="Terms of Service"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">Last Updated: April 29, 2026  |  Version: 2.0</p>
        <p>Contact: legal@cardsflow.net</p>
        <p>These Terms of Service govern your access to and use of the CardsFlow platform. By creating an account or using the Service, you confirm you have read and agreed to these Terms. If you do not agree, do not use the Service.</p>
        <p>These Terms sit alongside:</p>
        <p>Privacy Policy &rarr; <a href="/legal/privacy">cardsflow.net/legal/privacy</a></p>
        <p>Cookie Policy &rarr; <a href="/legal/cookies">cardsflow.net/legal/cookies</a></p>
        <p>AML Policy &rarr; <a href="/legal/aml-policy">cardsflow.net/legal/aml-policy</a></p>
        <h3>1.  DEFINITIONS</h3>
        <p>The following terms are used throughout this document.</p>
        <p>&quot;CardsFlow&quot; / &quot;we&quot; / &quot;us&quot;</p>
        <p>The platform and company operating cardsflow.net.</p>
        <p>&quot;User&quot; / &quot;you&quot;</p>
        <p>Any individual or business that registers an Account and agrees to these Terms.</p>
        <p>&quot;Account&quot;</p>
        <p>Your registered profile used to access the Service.</p>
        <p>&quot;Card&quot;</p>
        <p>A virtual prepaid card issued to you through the Service, powered by Visa.</p>
        <p>&quot;Transaction&quot;</p>
        <p>Any payment, purchase, or transfer made using a Card or your Account balance.</p>
        <p>&quot;E-Money&quot;</p>
        <p>Electronic money stored on your Account and used to fund Card Transactions.</p>
        <p>&quot;Spend Controls&quot;</p>
        <p>Rules you configure on individual Cards, including spend limits, merchant restrictions, and geographic controls.</p>
        <p>&quot;Dashboard&quot;</p>
        <p>The online interface through which you manage your Account, Cards, and Transactions.</p>
        <p>&quot;Service&quot;</p>
        <p>The CardsFlow platform, website, application, API, and all related features and tools.</p>
        <p>&quot;Verification&quot;</p>
        <p>The privacy-preserving eligibility confirmation process described in Section 3. We verify that you are eligible — we do not hold your identity.</p>
        <p>&quot;ZK Proof&quot;</p>
        <p>A zero-knowledge cryptographic proof — a mathematical confirmation that you meet a condition (e.g., you are over 18) without revealing the underlying data that proves it.</p>
        <h3>2.  SERVICE DESCRIPTION AND ELIGIBILITY</h3>
        <h4>2.1  What CardsFlow Provides</h4>
        <p>CardsFlow is a virtual and physical Visa prepaid card issuance and spend management platform. You can use it to:</p>
        <p>Issue and manage virtual and physical Visa prepaid cards</p>
        <p>Set individual spend limits and controls per card</p>
        <p>Monitor transactions in real time via the Dashboard</p>
        <p>Export transaction data for accounting and reporting</p>
        <p>Manage team members and assign cards (business accounts)</p>
        <h4>2.2  Eligibility</h4>
        <p>To use the Service you must:</p>
        <p>Be at least 18 years of age</p>
        <p>Be resident in a country where CardsFlow operates</p>
        <p>Not be subject to sanctions or legal restrictions that would prohibit use of the Service</p>
        <p>Not have previously had an Account terminated for cause by CardsFlow</p>
        <p>Provide accurate information at all times</p>
        <h4>2.3  Business Accounts</h4>
        <p>If you register on behalf of a business, you confirm that you have authority to bind that entity to these Terms, the entity is legitimately incorporated, and all information provided is accurate.</p>
        <h4>2.4  Availability</h4>
        <p>The Service is available in [list of supported countries]. We may restrict or withdraw the Service in any jurisdiction at any time.</p>
        <h3>3.  ACCOUNT REGISTRATION AND VERIFICATION</h3>
        <h4>3.1  Creating Your Account</h4>
        <p>To register, provide your name, email address, a secure password, and any other information we request.</p>
        <h4>3.2  How We Verify Eligibility</h4>
        <p>Your money, your life.</p>
        <p>We verify that you are eligible to use the Service without collecting, storing, or controlling your identity documents. We use a zero-knowledge (ZK) verification approach:</p>
        <p>You confirm eligibility criteria through our verification partner</p>
        <p>We receive only a cryptographic ZK proof confirming you meet the required conditions</p>
        <p>Your underlying documents never reach CardsFlow servers</p>
        <p>Only you hold the evidence of your own identity</p>
        <p>What verification confirms:</p>
        <p>You meet the minimum age requirement</p>
        <p>You are in a supported jurisdiction</p>
        <p>You are not a sanctioned individual or entity</p>
        <p>You are eligible to use the Service</p>
        <p>What we do not store:</p>
        <p>Passport or identity card images</p>
        <p>Driving licence scans</p>
        <p>Selfies or biometric data of any kind</p>
        <p>Any raw personal identity document</p>
        <h4>3.3  Verification Partner</h4>
        <p>Eligibility verification is carried out by our specialist privacy-preserving identity partner. Their data processing details are described in our Privacy Policy at <a href="/legal/privacy">cardsflow.net/legal/privacy</a>.</p>
        <h4>3.4  Account Security</h4>
        <p>You are responsible for keeping your credentials confidential, enabling two-factor authentication (2FA), and notifying us immediately at security@cardsflow.net if you suspect unauthorised access. CardsFlow is not liable for losses resulting from failure to maintain secure credentials.</p>
        <h4>3.5  Accurate Information</h4>
        <p>All information you provide must be truthful, complete, and current. Providing false information is a material breach of these Terms and may result in immediate Account termination.</p>
        <h3>4.  CARD ISSUANCE AND USAGE RULES</h3>
        <h4>4.1  Nature of Cards</h4>
        <p>Cards issued through the Service are:</p>
        <p>Virtual and physical — issued digitally and shipped physically on request</p>
        <p>Non-transferable — assigned to one Cardholder</p>
        <p>Pre-funded from your E-Money balance</p>
        <p>Issued pursuant to a licence from Visa</p>
        <h4>4.2  Authorised Use</h4>
        <p>Cards may only be used for:</p>
        <p>Legitimate business or personal expenses</p>
        <p>Purchases from merchants accepting Visa</p>
        <p>Transactions in supported currencies</p>
        <p>Purposes permitted under applicable law</p>
        <h4>4.3  Prohibited Card Use</h4>
        <p>You must not use a Card for:</p>
        <p>Money laundering, fraud, or financial crime</p>
        <p>Terrorist financing</p>
        <p>Gambling (unless approved in writing by CardsFlow)</p>
        <p>Purchasing illegal goods or services</p>
        <p>Circumventing sanctions or export controls</p>
        <p>Any purpose violating card network rules</p>
        <h4>4.4  Spend Controls</h4>
        <p>Configure per-card controls through your Dashboard including spend limits, merchant category restrictions, and geographic controls. Spend Controls are a management tool. You remain responsible for all Transactions on your Cards regardless of controls configured.</p>
        <h4>4.5  Freeze and Cancellation</h4>
        <p>Freeze or cancel any Card at any time via the Dashboard. A frozen Card prevents new authorisations but does not affect pending Transactions. Cancelled Cards cannot be reactivated.</p>
        <h3>5.  FEES AND CHARGES</h3>
        <h4>5.1  Fee Schedule</h4>
        <p>All fees are inclusive of applicable VAT unless stated otherwise.</p>
        <p>Service</p>
        <p>Fee</p>
        <p>Account Setup</p>
        <p>Free</p>
        <p>Monthly Platform Fee</p>
        <p>None</p>
        <p>Virtual Card Issuance (per card)</p>
        <p>$5.00</p>
        <p>Physical Card Issuance (per card)</p>
        <p>$50.00</p>
        <p>Top-Up Fee &mdash; $25 to $1,999</p>
        <p>Flat 7% (minimum $25)</p>
        <p>Top-Up Fee &mdash; $2,000 to $4,999</p>
        <p>Flat 6%</p>
        <p>Top-Up Fee &mdash; $5,000 and above</p>
        <p>Flat 5%</p>
        <p>Foreign Exchange (non-USD merchants)</p>
        <p>1.2% above interbank rate</p>
        <p>Per-authorisation network fee</p>
        <p>$0.20 per transaction</p>
        <p>ATM withdrawal handling fee</p>
        <p>$2.00 + 2.0% of amount</p>
        <p>Dispute / chargeback handling</p>
        <p>$35 per case (refunded if upheld)</p>
        <p>Refund / manual processing fee</p>
        <p>4% — returned in USDT (TRC20) only (1–10 business days)</p>
        <p>Inactivity Fee</p>
        <p>None</p>
        <p>Account Closure</p>
        <p>Free</p>
        <h4>5.2  Fee Changes</h4>
        <p>We will provide 30 days written notice by email of any fee changes. Continued use after the effective date constitutes acceptance of revised fees.</p>
        <h4>5.3  How Fees Are Charged</h4>
        <p>Fees are deducted from your E-Money balance or charged to your nominated payment method. It is your responsibility to maintain sufficient funds.</p>
        <h4>5.4  Fee Disputes</h4>
        <p>If you believe a fee was applied in error, contact billing@cardsflow.net within 30 days of the charge. We will investigate and respond within 15 business days.</p>
        <h3>6.  TRANSACTION LIMITS AND CONTROLS</h3>
        <h4>6.1  Default Limits</h4>
        <p>Limits vary by account tier. Higher limits are available subject to additional eligibility confirmation.</p>
        <p>Limit Type</p>
        <p>Default Value</p>
        <p>Maximum single transaction</p>
        <p>$30,000</p>
        <p>Maximum daily spend per card</p>
        <p>$180,000</p>
        <p>Maximum monthly spend per card</p>
        <p>$1,000,000</p>
        <p>Maximum cards per account</p>
        <p>3</p>
        <p>Single ATM withdrawal</p>
        <p>$3,500</p>
        <p>Daily ATM withdrawals</p>
        <p>6 per day</p>
        <p>Monthly ATM cap</p>
        <p>$100,000</p>
        <p>Card validity</p>
        <p>5 years from issuance</p>
        <p>Maximum E-Money balance</p>
        <p>$1,000,000</p>
        <h4>6.2  Limit Increases</h4>
        <p>Request a limit increase at support@cardsflow.net. We reserve the right to approve or decline at our sole discretion.</p>
        <h4>6.3  Regulatory Limits</h4>
        <p>Certain limits are imposed by law or by our card network partner and cannot be overridden regardless of account tier.</p>
        <h3>7.  PROHIBITED ACTIVITIES</h3>
        <p>You must not use the Service to:</p>
        <p>Violate any applicable law or regulation</p>
        <p>Engage in or facilitate money laundering, terrorist financing, or any financial crime</p>
        <p>Evade taxes, sanctions, or export controls</p>
        <p>Provide false or misleading information</p>
        <p>Gain unauthorised access to the Platform or any other account</p>
        <p>Introduce malware, viruses, or malicious code</p>
        <p>Reverse engineer or decompile any part of the Platform</p>
        <p>Use automated scripts without our prior written consent</p>
        <p>Impersonate any person or entity</p>
        <p>Structure transactions to avoid AML thresholds</p>
        <p>We may immediately suspend or terminate your Account if we reasonably suspect a breach of this Section without prior notice. We may report suspected criminal activity to the NCA, FCA, HMRC, or other relevant authorities as required by law.</p>
        <h3>8.  DISPUTE RESOLUTION</h3>
        <h4>8.1  Contact Us First</h4>
        <p>Step</p>
        <p>Detail</p>
        <p>Contact</p>
        <p>support@cardsflow.net</p>
        <p>Acknowledge</p>
        <p>Within 5 business days</p>
        <p>Resolution</p>
        <p>Within 15 business days</p>
        <h4>8.2  Raising a Transaction Dispute</h4>
        <p>Option A — Dashboard:</p>
        <p>Log in أ¢â€ â€™ navigate to Transaction أ¢â€ â€™ select &quot;Report an Issue&quot; أ¢â€ â€™ follow the on-screen steps.</p>
        <p>Option B — Email:</p>
        <p>Email disputes@cardsflow.net including your Transaction ID, date, amount, and reason.</p>
        <p>Time limits:</p>
        <p>Unauthorised transactions — within 13 months of the Transaction date</p>
        <p>Goods or services not received — within 120 days of the Transaction date</p>
        <h4>8.3  What Happens Next</h4>
        <p>Case reference issued within 24 hours</p>
        <p>Investigation completed within 15 business days</p>
        <p>Chargeback initiated where applicable</p>
        <p>Progress updates sent by email throughout</p>
        <h4>8.4  Escalation</h4>
        <p>If your complaint is not resolved within 15 business days, email complaints@cardsflow.net for internal escalation by our senior compliance team. We are committed to resolving all complaints fairly and promptly.</p>
        <h3>9.  CHARGEBACK AND REFUND RIGHTS</h3>
        <h4>9.1  Unauthorised Transactions</h4>
        <p>We will refund an unauthorised Transaction to your Account balance where you notified us without undue delay, the Transaction was not caused by your own fraud or gross negligence, and sufficient supporting evidence is provided.</p>
        <h4>9.2  Merchant Disputes</h4>
        <p>We will initiate a chargeback on your behalf where eligible. Outcomes are determined by Visa network rules and are not guaranteed. We will confirm the outcome within 30 days.</p>
        <h4>9.3  Refund Timing</h4>
        <p>Approved refunds are credited to your E-Money balance within 3 to 5 business days of resolution.</p>
        <h4>9.4  When We Cannot Refund</h4>
        <p>We cannot process a refund or chargeback where:</p>
        <p>The dispute is outside the time limits in Section 8.2</p>
        <p>Insufficient evidence has been provided</p>
        <p>The Transaction was authorised by you and the dispute is solely a quality issue with a merchant</p>
        <h3>10.  LIMITATION OF LIABILITY</h3>
        <h4>10.1  What We Cannot Limit</h4>
        <p>Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded by law.</p>
        <h4>10.2  What We Are Not Liable For</h4>
        <p>Subject to 10.1, CardsFlow is not liable for:</p>
        <p>Loss of profits, revenue, or business</p>
        <p>Loss of anticipated savings</p>
        <p>Loss of data or information</p>
        <p>Indirect or consequential losses</p>
        <p>Losses from events beyond our reasonable control</p>
        <h4>10.3  Cap on Liability</h4>
        <p>Our total aggregate liability for any claim shall not exceed the greater of: fees paid by you to CardsFlow in the three months preceding the event, or $100 (one hundred US dollars).</p>
        <h4>10.4  Service Warranty</h4>
        <p>The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the Service will be uninterrupted or error-free.</p>
        <h3>11.  TERMINATION AND ACCOUNT CLOSURE</h3>
        <h4>11.1  Closing Your Account</h4>
        <p>Close your Account at any time via Dashboard settings or by contacting support@cardsflow.net. Upon closure:</p>
        <p>All active Cards are cancelled immediately</p>
        <p>Remaining E-Money balance refunded to your verified bank account within 10 business days</p>
        <p>Read-only transaction history access for 90 days</p>
        <h4>11.2  Termination by CardsFlow</h4>
        <p>We may suspend or terminate your Account immediately without prior notice if:</p>
        <p>You breach any material provision of these Terms</p>
        <p>Required by law or regulatory order</p>
        <p>We reasonably suspect fraud or financial crime</p>
        <p>You provide false or misleading information</p>
        <h4>11.3  Survival</h4>
        <p>Sections 7, 8, 10, 12, and 14 survive termination of your Account.</p>
        <h3>12.  GOVERNING LAW</h3>
        <p>These Terms are governed by the laws of England and Wales. Any dispute is subject to the exclusive jurisdiction of the courts of England and Wales, except where mandatory consumer protection laws in your jurisdiction provide otherwise.</p>
        <h3>13.  CHANGES TO THESE TERMS</h3>
        <p>We may update these Terms at any time. Where changes are material, we will notify you by email at least 30 days before they take effect. Continued use after the effective date constitutes acceptance. If you do not agree, close your Account before the effective date.</p>
        <h3>14.  CONTACT</h3>
        <p>Purpose</p>
        <p>Email Address</p>
        <p>General support</p>
        <p>support@cardsflow.net</p>
        <p>Legal matters</p>
        <p>legal@cardsflow.net</p>
        <p>Billing disputes</p>
        <p>billing@cardsflow.net</p>
        <p>Transaction disputes</p>
        <p>disputes@cardsflow.net</p>
        <p>Security issues</p>
        <p>security@cardsflow.net</p>
        <p>Complaints</p>
        <p>complaints@cardsflow.net</p>
        <p>Compliance / MLRO</p>
        <p>compliance@cardsflow.net</p>
        <p>CardsFlow  |  legal@cardsflow.net</p>

      </div>
      <RelatedLinksModule
        links={[
          { title: "Terms of Service", href: "/legal/terms" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Cookie Policy", href: "/legal/cookies" },
          { title: "AML Policy", href: "/legal/aml-policy" }
        ].filter(l => l.href !== "/legal/terms")}
      />
    </SubPageLayout>
  );
}
