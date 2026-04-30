import React from "react";
import { Navbar, Footer } from "@/components/layout";

export function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-slate-50 flex flex-col font-sans text-slate-600">
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
