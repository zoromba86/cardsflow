import CardsflowCanvas from "@/components/CardsflowCanvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCaseTabs from "@/components/UseCaseTabs";
import { AccordionComponent } from "@/components/ui/faq-accordion";
import { TrustMarquee } from "@/components/TrustMarquee";

export default function Home() {
  return (
    <main className="min-h-screen w-full" style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar />
      
      {/* Hero scrollytelling canvas (600vh) */}
      <CardsflowCanvas />

      {/* Content slides up over the sticky canvas */}
      <div className="relative z-20 rounded-t-[3rem] mt-[-100vh] bg-[#0B1120]">
        <div className="pt-20">
          <TrustMarquee />
          <UseCaseTabs />
        </div>
        <AccordionComponent />
        <Footer />
      </div>
    </main>
  );
}
