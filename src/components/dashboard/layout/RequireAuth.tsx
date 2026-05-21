'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';

/**
 * Client-side route guard for the dashboard tree. Redirects unauthenticated
 * users to /login and renders a neutral placeholder while auth state hydrates.
 *
 * Note: this is defense-in-depth only — the real authorization MUST happen
 * server-side via the session cookie. This guard exists to keep the dashboard
 * UI from rendering at all for logged-out visitors, search crawlers, or
 * bookmark hits before the API replies 401.
 */
export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex items-center gap-3 text-slate-500">
          <Loader2 size={18} className="animate-spin" />
          <span className="text-sm font-medium">Loading…</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
