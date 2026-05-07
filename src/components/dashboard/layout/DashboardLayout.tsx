'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Header */}
      <DashboardHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed top-16 bottom-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-in-out
            lg:relative lg:top-0 lg:translate-x-0 lg:z-auto
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <DashboardSidebar onClose={() => setSidebarOpen(false)} />
        </aside>

        {/* Mobile close button inside sidebar */}
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="fixed top-20 left-[240px] z-[60] lg:hidden bg-white rounded-full p-1.5 shadow-lg"
            aria-label="Close sidebar"
          >
            <X size={16} className="text-slate-700" />
          </button>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
