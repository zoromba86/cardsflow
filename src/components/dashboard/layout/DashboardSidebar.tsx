'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  ShoppingCart,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Shield,
} from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';

interface DashboardSidebarProps {
  onClose?: () => void;
}

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Wallets', href: '/dashboard/wallets', icon: Wallet },
  { label: 'Cards', href: '/dashboard/cards', icon: CreditCard },
  { label: 'Order Card', href: '/dashboard/cards/apply', icon: ShoppingCart },
  { label: 'Deposits', href: '/dashboard/deposits', icon: ArrowDownToLine },
  { label: 'Withdrawals', href: '/dashboard/withdrawals', icon: ArrowUpFromLine },
  { label: 'Transactions', href: '/dashboard/transactions', icon: ArrowLeftRight },
  { label: 'Affiliate', href: '/dashboard/affiliate', icon: Users },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardSidebar({ onClose }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  const accountBadge = () => {
    const isVerified = user?.emailVerified;
    return (
      <span
        className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded border ${
          isVerified
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
        }`}
      >
        {isVerified ? 'VERIFIED' : 'PENDING'}
      </span>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] border-r border-slate-200 text-slate-900 overflow-y-auto">
      {/* User Profile Section */}
      <div className="px-5 pt-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5B220] to-[#D4A017] flex items-center justify-center text-[#0F172A] font-bold text-sm shadow-sm">
            {user?.username?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 truncate">
              {user?.username || 'User'}
            </p>
            <p className="text-xs text-slate-500 font-medium truncate">
              {user?.email || 'user@example.com'}
            </p>
          </div>
        </div>
        <div className="mt-2">{accountBadge()}</div>
        <Link
          href="/dashboard/settings"
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors mt-2 inline-flex items-center gap-1"
          onClick={onClose}
        >
          <Shield size={10} />
          Security & profile
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`
                group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                ${
                  active
                    ? 'bg-slate-200/50 text-slate-900'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }
              `}
            >
              <Icon
                size={18}
                className={active ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}
              />
              <span className="flex-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Support Section */}
      <div className="px-5 pb-6 border-t border-slate-200 pt-5">
        <div className="flex items-start gap-2 mb-4">
          <HelpCircle size={16} className="text-slate-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-bold text-slate-900 mb-1">Need assistance?</p>
            <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
              Contact the support team for card operations, funding, withdrawals, and affiliate onboarding questions.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="flex-1 text-center text-xs font-bold bg-white border border-slate-200 text-slate-700 shadow-sm rounded-lg py-2 px-3 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Contact Support
          </Link>
          <button
            onClick={logout}
            className="flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Sign out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
