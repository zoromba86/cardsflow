'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, User, ChevronDown, LogOut, ArrowUpFromLine } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import BrandLogo from '@/components/ui/brand-logo';

interface DashboardHeaderProps {
  onMenuToggle: () => void;
}

export default function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 sm:px-6 sticky top-0 z-30">
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden mr-3 p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} className="text-slate-700" />
      </button>

      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-2.5 mr-8 group">
        <BrandLogo scrolled={true} />
        <span className="text-[17px] font-black text-slate-900 tracking-tight">
          CardsFlow
        </span>
      </Link>

      {/* Right side - Minimalist actions */}
      <div className="ml-auto flex items-center gap-4">
        <Link 
          href="/contact" 
          className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          Contact Support
        </Link>
        
        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#E5B220]/20 flex items-center justify-center text-[#E5B220]">
              <User size={16} />
            </div>
            <span className="text-sm font-bold text-slate-700 hidden sm:block">
              {user?.username || 'Account'}
            </span>
            <ChevronDown size={14} className="text-slate-500 hidden sm:block" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-bold text-slate-900">{user?.username || 'User'}</p>
                <p className="text-xs text-slate-500 truncate">{user?.email || 'user@example.com'}</p>
              </div>
              
              <div className="py-2">
                <Link
                  href="/dashboard/withdrawals"
                  onClick={() => setIsDropdownOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <ArrowUpFromLine size={16} className="text-slate-400" />
                  <div>
                    <p>Withdraw Funds</p>
                    <p className="text-[10px] text-slate-500 leading-tight">Crypto refund to external wallet</p>
                  </div>
                </Link>
              </div>
              
              <div className="border-t border-slate-100 py-2">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
