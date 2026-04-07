import React from "react";
import Link from "next/link";
import { Shield, FileText, HelpCircle, Lock } from "lucide-react";

export function TrustStrip() {
  const trustLinks = [
    { label: "Fees & Disclosures", href: "/trust/fees-and-disclosures/", icon: <FileText className="w-5 h-5" /> },
    { label: "Trust Center", href: "/trust/", icon: <Shield className="w-5 h-5" /> },
    { label: "Supported Use", href: "/trust/prohibited-use/", icon: <Lock className="w-5 h-5" /> },
    { label: "Support", href: "/trust/support-and-escalations/", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0B1120]/50 backdrop-blur-sm py-8 px-5 sm:px-12 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {trustLinks.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.href}
            className="flex flex-col items-center justify-center text-center group"
          >
            <div className="text-zinc-500 group-hover:text-[#E5B220] transition-colors mb-3">
              {link.icon}
            </div>
            <span className="text-sm font-semibold text-zinc-400 group-hover:text-white transition-colors">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
