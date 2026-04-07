import React from "react";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export interface AuthorReviewerBlockProps {
  authorName: string;
  reviewerName?: string;
  updatedDate: string;
  reviewStandardsLink?: string;
}

export function AuthorReviewerBlock({
  authorName,
  reviewerName,
  updatedDate,
  reviewStandardsLink = "/trust/how-we-review-content/"
}: AuthorReviewerBlockProps) {
  return (
    <div className="w-full px-5 sm:px-12 lg:px-20 py-8 border-t border-zinc-800/50 mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-zinc-500 max-w-4xl">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <UserCircle className="w-4 h-4 text-zinc-600" />
            <span>Author: <span className="text-zinc-300 font-medium">{authorName}</span></span>
          </div>
          {reviewerName && (
            <div className="flex items-center gap-2">
              <UserCircle className="w-4 h-4 text-zinc-600" />
              <span>Reviewed by: <span className="text-zinc-300 font-medium">{reviewerName}</span></span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span>Last updated: {updatedDate}</span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <Link href={reviewStandardsLink} className="text-[#E5B220] hover:underline transition-all">
            Review Standards
          </Link>
        </div>
      </div>
    </div>
  );
}
