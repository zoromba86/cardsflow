import React from "react";
import { Navbar, Footer } from "@/components/layout";

export function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-[#0F1B2D] flex flex-col font-sans text-zinc-300">
      <Navbar />
      <div className="flex-1 pt-24 sm:pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto w-full">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
