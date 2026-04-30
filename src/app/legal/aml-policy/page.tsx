import React from "react";
import { Metadata } from "next";
import { SubPageLayout } from "@/components/layout";
import { HeroSection, RelatedLinksModule } from "@/components/blocks";

export const metadata: Metadata = {
  title: "AML & Compliance Policy | CardsFlow",
  description: "AML & Compliance Policy for CardsFlow.",
};

export default function amlpolicyPage() {
  return (
    <SubPageLayout>
      <HeroSection
        title="AML & Compliance Policy"
        supportCopy="Cardsflow policies and documentation for users and partners."
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-20 py-16 prose prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-li:text-slate-600 prose-a:text-teal-600">
        <p className="text-sm text-slate-500 italic mb-8">Last Updated: April 29, 2026  |  Version: 2.0</p>

        <p>Your money, your life.</p>
        <p>We are committed to preventing financial crime while protecting your financial privacy and autonomy. These two commitments reinforce each other.</p>
        <p>We meet our AML, Counter-Terrorist Financing (CTF), and compliance obligations through two complementary approaches:</p>
        <p>Approach</p>
        <p>Description</p>
        <p>Payment gateway compliance</p>
        <p>AML screening and transaction monitoring is handled by NowPayments, our regulated payment gateway partner, as part of their own published compliance programme.</p>
        <p>Privacy-preserving verification</p>
        <p>We verify eligibility through a zero-knowledge (ZK) model. You prove your eligibility. We do not hold your identity.</p>
        <h3>1.  LEGAL FRAMEWORK</h3>
        <p>Our AML and CTF obligations arise from:</p>
        <p>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 (ML Regulations 2017)</p>
        <p>Proceeds of Crime Act 2002 (POCA 2002)</p>
        <p>Terrorism Act 2000 (TA 2000)</p>
        <p>Sanctions and Anti-Money Laundering Act 2018 (SAMLA 2018)</p>
        <p>Financial Action Task Force (FATF) Recommendations</p>
        <p>FCA Financial Crime Guide and related FCA guidance</p>
        <p>HM Treasury sanctions regulations applicable to our operations</p>
        <p>Non-compliance is a criminal offence and may result in financial penalties, regulatory sanctions, and loss of FCA authorisation.</p>
        <h3>2.  MLRO â€” MONEY LAUNDERING REPORTING OFFICER</h3>
        <p>CardsFlow has appointed a designated Money Laundering Reporting Officer (MLRO) responsible for:</p>
        <p>Overseeing our AML and CTF compliance programme</p>
        <p>Receiving and assessing internal suspicious activity reports</p>
        <p>Filing Suspicious Activity Reports (SARs) to the National Crime Agency (NCA) where required</p>
        <p>Liaising with the FCA and other regulatory bodies</p>
        <p>Reviewing and updating our compliance policies</p>
        <p>MLRO Contact</p>
        <p>compliance@cardsflow.net</p>
        <p>If you have a concern about financial crime or suspicious activity connected to your Account or the platform, contact the MLRO directly.</p>
        <h3>3.  HOW WE HANDLE AML â€” NOWPAYMENTS</h3>
        <h4>3.1  Our Payment Gateway Partner</h4>
        <p>CardsFlow processes all payments through NowPayments (nowpayments.io), a regulated payment gateway with its own comprehensive AML compliance programme.</p>
        <p>NowPayments is responsible for:</p>
        <p>Screening transactions against global sanctions and watchlists</p>
        <p>Monitoring for suspicious transaction patterns</p>
        <p>Applying velocity and threshold checks</p>
        <p>Filing SARs where required by law</p>
        <p>Maintaining their own compliance procedures for payment processing</p>
        <p>NowPayments Policy</p>
        <p>URL</p>
        <p>Terms of Service</p>
        <p>nowpayments.io/terms-of-service</p>
        <p>AML &amp; KYC Policy</p>
        <p>nowpayments.io/aml-kyc-policy</p>
        <h4>3.2  CardsFlow Platform-Level Monitoring</h4>
        <p>In addition to NowPayments&apos; gateway-level controls, CardsFlow monitors account-level behaviour for patterns including:</p>
        <p>Unusually high transaction volumes or values</p>
        <p>Rapid movement of funds without clear purpose</p>
        <p>Activity inconsistent with stated account profile</p>
        <p>Structuring â€” splitting transactions to avoid reporting thresholds</p>
        <p>Activity involving high-risk or sanctioned jurisdictions</p>
        <p>Sudden unexplained changes in transaction behaviour</p>
        <h4>3.3  Shared Responsibility</h4>
        <p>CardsFlow retains overall regulatory responsibility for ensuring our platform is not used for financial crime. We work in active partnership with NowPayments to ensure compliance at every layer of our operations.</p>
        <h3>4.  HOW WE VERIFY ELIGIBILITY â€” ZERO-KNOWLEDGE MODEL</h3>
        <h4>4.1  Your Money, Your Life</h4>
        <p>Traditional compliance often means handing over copies of your most sensitive personal documents to companies whose security you cannot verify. CardsFlow takes a different approach.</p>
        <p>We use a zero-knowledge (ZK) verification model:</p>
        <p>You prove you are eligible to use the Service</p>
        <p>We receive only a cryptographic proof of eligibility</p>
        <p>Your underlying documents never reach CardsFlow</p>
        <p>Only you hold the evidence of your own identity</p>
        <h4>4.2  What We Confirm</h4>
        <p>We Confirm</p>
        <p>We Do NOT Store</p>
        <p>You meet the minimum age requirement</p>
        <p>Passport or identity card images</p>
        <p>You are resident in a supported jurisdiction</p>
        <p>Driving licence scans</p>
        <p>You are not a sanctioned individual or entity</p>
        <p>Selfies or facial biometric data</p>
        <p>You are eligible to use the Service</p>
        <p>Any raw personal identity document</p>
        <h4>4.3  Legal Compliance</h4>
        <p>This approach is compliant with the ML Regulations 2017. The regulations require that we verify eligibility and maintain a record that we did so. A cryptographic ZK proof satisfies this requirement without centralising your sensitive identity documents on our servers.</p>
        <h4>4.4  Verification Partner</h4>
        <p>Partner Name</p>
        <p>[Verification Partner Name]</p>
        <p>Privacy Policy</p>
        <p>[partner privacy URL]</p>
        <p>Verification Approach</p>
        <p>[partner approach URL]</p>
        <h4>4.5  Business Accounts</h4>
        <p>Authorised representatives provide a cryptographic attestation confirming entity legitimacy, beneficial ownership accuracy, sanction-free status, and authority to act. No company documents are stored on CardsFlow servers.</p>
        <h4>4.6  Ongoing Verification</h4>
        <p>We may request re-verification where:</p>
        <p>Material changes to your account are detected</p>
        <p>Regulatory requirements change</p>
        <p>Transaction behaviour is inconsistent with your stated profile</p>
        <p>Our MLRO determines enhanced review is required</p>
        <h3>5.  SANCTIONS SCREENING</h3>
        <h4>5.1  How Screening Works</h4>
        <p>Transaction-level sanctions screening is performed by NowPayments. At the platform level, CardsFlow independently screens account registrations against:</p>
        <p>HM Treasury UK Consolidated List of Financial Sanctions Targets</p>
        <p>UN Security Council Sanctions Lists</p>
        <p>OFAC Specially Designated Nationals (SDN) List</p>
        <p>EU Consolidated Sanctions List (where applicable)</p>
        <h4>5.2  Positive Matches</h4>
        <p>Where a sanctions match is identified:</p>
        <p>Account immediately suspended</p>
        <p>Manual review conducted by our MLRO</p>
        <p>If confirmed â€” Account frozen and reported to OFSI</p>
        <p>We are prohibited by law from disclosing this to the user (tipping off, POCA 2002, Section 333A)</p>
        <h4>5.3  Prohibited Jurisdictions</h4>
        <p>We do not provide services to individuals or entities in jurisdictions subject to comprehensive international sanctions, including:</p>
        <p>North Korea (DPRK)</p>
        <p>Iran</p>
        <p>Syria</p>
        <p>Russia (sanctioned sectors and entities)</p>
        <p>Belarus (sanctioned entities)</p>
        <p>Cuba</p>
        <p>[Other applicable jurisdictions as updated]</p>
        <p>This list is subject to change as sanctions regimes evolve. Check gov.uk/sanctions for current listings.</p>
        <h3>6.  POLITICALLY EXPOSED PERSONS (PEPs)</h3>
        <h4>6.1  Who Is a PEP?</h4>
        <p>PEP Category</p>
        <p>Examples</p>
        <p>Political figures</p>
        <p>Heads of state, senior politicians, government ministers</p>
        <p>Official positions</p>
        <p>Senior judicial, military, or government officials</p>
        <p>State enterprise</p>
        <p>Senior executives of state-owned enterprises</p>
        <p>International bodies</p>
        <p>Senior officials of international organisations</p>
        <p>Associated persons</p>
        <p>Close family members and known associates of any of the above</p>
        <h4>6.2  Disclosure Requirement</h4>
        <p>Being a PEP does not prevent you from using the Service. However, you must disclose your PEP status to compliance@cardsflow.net. Failure to disclose is a material breach of our Terms of Service.</p>
        <p>We screen all accounts against PEP databases at registration and on an ongoing basis.</p>
        <h3>7.  SUSPICIOUS ACTIVITY REPORTING (SARs)</h3>
        <h4>7.1  Our Obligation</h4>
        <p>Where we or NowPayments have reasonable grounds to suspect that funds are the proceeds of crime or connected to terrorist financing, we are legally required to submit a SAR to the NCA under POCA 2002 Section 330 and Terrorism Act 2000 Section 21A.</p>
        <h4>7.2  Tipping Off</h4>
        <p>We are prohibited by law from disclosing that a SAR has been submitted or that an investigation is underway. If we cannot explain the reason for an account action, this legal prohibition may be why.</p>
        <h4>7.3  DAML â€” Defence Against Money Laundering</h4>
        <p>In certain circumstances we may need to obtain NCA consent before processing a Transaction. This may delay certain transactions by up to 7 working days, extendable to 31 days in exceptional circumstances.</p>
        <h3>8.  YOUR OBLIGATIONS AS A USER</h3>
        <p>By using the Service, you confirm and agree that:</p>
        <p>All information you provide is accurate, complete, and truthful at all times</p>
        <p>You will notify us promptly of any material changes to your information</p>
        <p>You will not use the Service to launder money, finance terrorism, evade sanctions, or commit any financial crime</p>
        <p>You will not structure transactions to avoid AML thresholds or reporting obligations</p>
        <p>You will not provide access to the Service to sanctioned individuals or entities</p>
        <p>You will cooperate fully with any compliance review or information request</p>
        <p>You will disclose your PEP status or any change in PEP status immediately</p>
        <p>You will report any suspected misuse of your Account to compliance@cardsflow.net at once</p>
        <p>Breach of these obligations may result in immediate Account termination and referral to law enforcement.</p>
        <h3>9.  DATA RETENTION FOR COMPLIANCE PURPOSES</h3>
        <p>We retain compliance data as required by the ML Regulations 2017 (Regulation 40).</p>
        <p>Data Type</p>
        <p>Retention Period</p>
        <p>Eligibility tokens (ZK proofs)</p>
        <p>Duration of account + 5 years</p>
        <p>Transaction records</p>
        <p>Duration of account + 6 years</p>
        <p>Compliance review records</p>
        <p>Duration of account + 5 years</p>
        <p>SAR-related records</p>
        <p>As directed by NCA or law enforcement</p>
        <p>NowPayments maintains its own retention records for payment transaction data in accordance with their published compliance programme. After each retention period, data is securely deleted or irreversibly anonymised.</p>
        <h3>10.  STAFF TRAINING</h3>
        <p>All CardsFlow personnel with access to financial data or customer accounts receive mandatory AML and CTF training covering:</p>
        <p>Recognition of money laundering and terrorist financing red flags</p>
        <p>Internal suspicious activity reporting procedures</p>
        <p>Personal legal obligations under POCA 2002 and the Terrorism Act 2000</p>
        <p>Sanctions compliance obligations</p>
        <p>Tipping off and prejudicing investigation offences</p>
        <p>Training is completed at onboarding and refreshed annually or when material regulatory changes occur.</p>
        <h3>11.  CONTACT</h3>
        <p>Purpose</p>
        <p>Email / Contact</p>
        <p>MLRO and compliance matters</p>
        <p>compliance@cardsflow.net</p>
        <p>Data protection matters</p>
        <p>privacy@cardsflow.net</p>
        <p>General support</p>
        <p>support@cardsflow.net</p>
        <p>Registered address</p>
        <p>CardsFlow, [Full Registered Address]</p>

        <h3>12.  EXTERNAL REPORTING CONTACTS</h3>
        <p>Organisation</p>
        <p>Purpose</p>
        <p>Contact</p>
        <p>National Crime Agency</p>
        <p>Suspicious Activity Reports</p>
        <p>nationalcrimeagency.gov.uk</p>
        <p>0370 496 7622</p>
        <p>Action Fraud</p>
        <p>Fraud and cybercrime reporting</p>
        <p>actionfraud.police.uk</p>
        <p>0300 123 2040</p>
        <p>FCA</p>
        <p>Report financial crime</p>
        <p>fca.org.uk/consumers/report-financial-crime</p>
        <p>0800 111 6768</p>
        <p>OFSI</p>
        <p>Report sanctions breaches</p>
        <p>gov.uk/ofsi</p>
        <p>NowPayments</p>
        <p>AML and compliance policy</p>
        <p>nowpayments.io/aml-kyc-policy</p>
        <h3>13.  CHANGES TO THIS POLICY</h3>
        <p>This Policy is reviewed at least annually by our MLRO and updated to reflect changes in legislation, regulatory guidance, and our operations. Material changes will be communicated by email and by updating the &quot;Last Updated&quot; date on this page.</p>

      </div>
      <RelatedLinksModule
        links={[
          { title: "Terms of Service", href: "/legal/terms" },
          { title: "Privacy Policy", href: "/legal/privacy" },
          { title: "Cookie Policy", href: "/legal/cookies" },
          { title: "AML Policy", href: "/legal/aml-policy" }
        ].filter(l => l.href !== "/legal/aml-policy")}
      />
    </SubPageLayout>
  );
}
