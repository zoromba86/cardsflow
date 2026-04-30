import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  title: string;
  href: string;
}

export interface RelatedLinksModuleProps {
  links: RelatedLink[];
}

export function RelatedLinksModule({ links }: RelatedLinksModuleProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-12 border-t border-slate-200">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
        Related Resources
      </h3>
      <div className="flex flex-col space-y-3">
        {links.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.href}
            className="group flex items-center text-lg text-slate-700 hover:text-slate-900 transition-colors w-fit"
          >
            <span className="relative">
              {link.title}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </span>
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal-600" />
          </Link>
        ))}
      </div>
    </div>
  );
}
