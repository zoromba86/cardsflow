import CardsflowCanvas from "@/components/sections/hero";
import { Navbar, Footer } from "@/components/layout";
import UseCaseTabs from "@/components/sections/use-cases";
import { AccordionComponent } from "@/components/sections/faq";
import { TrustMarquee } from "@/components/sections/trust";
import { StatsBar } from "@/components/sections/stats";
import { FeaturesGrid } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Navbar />

      {/* Hero — always 600vh with sticky inner panel on all screen sizes */}
      <CardsflowCanvas />

      {/* Content slides up over the sticky hero on all screen sizes */}
      <div className="relative z-20 rounded-t-[2rem] md:rounded-t-[3rem] -mt-[100vh] bg-slate-50">
        <div className="pt-16 md:pt-20">
          <TrustMarquee />
          <StatsBar />
          <UseCaseTabs />
        </div>
        <FeaturesGrid />
        <HowItWorks />
        <AccordionComponent />
        <FinalCTA />
        <Footer />
      </div>

      {/* Made with Anti Gravity */}
    </main>
  );
}
