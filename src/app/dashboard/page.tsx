'use client';

import React from 'react';
import Link from 'next/link';
import {
  DollarSign,
  CreditCard,
  ArrowDownToLine,
  TrendingUp,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/lib/hooks/useAuth';
import { formatUSD } from '@/lib/utils/fees';

// Mock data — will be replaced by API calls once backend is connected
const mockStats = {
  totalBalance: '2,450.00',
  activeCards: 2,
  pendingDeposits: 1,
  monthlySpend: '1,230.50',
};

const mockChartData = [
  { date: 'Apr 01', balance: 1200 },
  { date: 'Apr 05', balance: 1050 },
  { date: 'Apr 10', balance: 2500 },
  { date: 'Apr 15', balance: 2300 },
  { date: 'Apr 20', balance: 2150 },
  { date: 'Apr 25', balance: 3100 },
  { date: 'May 01', balance: 2450 },
];

const mockTransactions = [
  { id: '1', merchant: 'Netflix', amount: '-15.99', date: '2 hours ago', status: 'completed', type: 'purchase' },
  { id: '2', merchant: 'Card Top-up', amount: '+500.00', date: '5 hours ago', status: 'completed', type: 'topup' },
  { id: '3', merchant: 'Amazon Web Services', amount: '-149.00', date: 'Yesterday', status: 'completed', type: 'purchase' },
  { id: '4', merchant: 'Spotify', amount: '-9.99', date: 'Yesterday', status: 'completed', type: 'purchase' },
  { id: '5', merchant: 'Google Ads', amount: '-320.00', date: '2 days ago', status: 'completed', type: 'purchase' },
  { id: '6', merchant: 'Deposit', amount: '+1,000.00', date: '3 days ago', status: 'completed', type: 'topup' },
];

export default function DashboardOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Welcome back{user?.username ? `, ${user.username}` : ''}
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Here&apos;s an overview of your CardsFlow workspace.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Balance',
            value: `$${mockStats.totalBalance}`,
            icon: DollarSign,
            color: 'from-emerald-500 to-emerald-600',
            bgLight: 'bg-emerald-50',
            textColor: 'text-emerald-600',
          },
          {
            label: 'Active Cards',
            value: mockStats.activeCards.toString(),
            icon: CreditCard,
            color: 'from-blue-500 to-blue-600',
            bgLight: 'bg-blue-50',
            textColor: 'text-blue-600',
          },
          {
            label: 'Pending Deposits',
            value: mockStats.pendingDeposits.toString(),
            icon: ArrowDownToLine,
            color: 'from-amber-500 to-amber-600',
            bgLight: 'bg-amber-50',
            textColor: 'text-amber-600',
          },
          {
            label: 'Monthly Spend',
            value: `$${mockStats.monthlySpend}`,
            icon: TrendingUp,
            color: 'from-purple-500 to-purple-600',
            bgLight: 'bg-purple-50',
            textColor: 'text-purple-600',
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.bgLight} flex items-center justify-center`}>
                  <Icon size={20} className={stat.textColor} />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'New Card', href: '/dashboard/cards/apply', icon: Plus, style: 'bg-[#E5B220] text-[#0F172A] hover:bg-[#D4A017]' },
            { label: 'Deposit', href: '/dashboard/deposits', icon: ArrowDownToLine, style: 'bg-[#0F172A] text-white hover:bg-[#1E293B]' },
            { label: 'Top-up Card', href: '/dashboard/topups', icon: ArrowUpRight, style: 'bg-emerald-600 text-white hover:bg-emerald-700' },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-colors ${action.style}`}
              >
                <Icon size={16} />
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart & Transactions Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Balance Chart */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Balance History
            </h2>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E5B220" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#E5B220" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(val) => `$${val}`} />
                  <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#0F172A', fontWeight: 'bold' }}
                    formatter={(value: any) => [`$${value}`, 'Balance']}
                  />
                  <Area type="monotone" dataKey="balance" stroke="#E5B220" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white border border-slate-200/60 rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Recent Transactions
              </h2>
              <Link
                href="/dashboard/transactions"
                className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="divide-y divide-slate-50">
              {mockTransactions.map((txn) => (
                <div key={txn.id} className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors duration-200">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mr-4 ${
                      txn.amount.startsWith('+')
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {txn.amount.startsWith('+') ? (
                      <ArrowDownLeft size={16} />
                    ) : (
                      <ArrowUpRight size={16} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{txn.merchant}</p>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{txn.date}</p>
                  </div>
                  <span
                    className={`text-sm font-bold tabular-nums ${
                      txn.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                  >
                    {txn.amount.startsWith('+') ? txn.amount : txn.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Status */}
        <div className="bg-white border border-slate-200/60 rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] h-fit">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">
              Account Status
            </h2>
          </div>
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Email Verified</p>
                <p className="text-xs text-slate-500">Your email address is confirmed.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Account Active</p>
                <p className="text-xs text-slate-500">This account is active and operational.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Session Active</p>
                <p className="text-xs text-slate-500">Authenticated session is active.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">Next Step</p>
                <p className="text-xs text-slate-500">
                  Deposit funds and order your first CardsFlow Visa card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
