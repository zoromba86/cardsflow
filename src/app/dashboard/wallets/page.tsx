'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDownToLine, ArrowUpFromLine, TrendingUp, Wallet as WalletIcon } from 'lucide-react';

// Mock data
const mockBalance = { available: '2,450.00', pending: '250.00', currency: 'USD' };
const mockWalletHistory = [
  { id: '1', type: 'deposit', amount: '+1,000.00', crypto: 'USDT', status: 'completed', date: 'May 1, 2026' },
  { id: '2', type: 'topup', amount: '-500.00', description: 'Card Top-up (Onyx ••4821)', status: 'completed', date: 'Apr 30, 2026' },
  { id: '3', type: 'deposit', amount: '+2,000.00', crypto: 'BTC', status: 'completed', date: 'Apr 28, 2026' },
  { id: '4', type: 'withdrawal', amount: '-300.00', description: 'Refund Request (TRC20)', status: 'processing', date: 'Apr 27, 2026' },
  { id: '5', type: 'deposit', amount: '+500.00', crypto: 'ETH', status: 'completed', date: 'Apr 25, 2026' },
];

export default function WalletsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Wallets</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your wallet balance, deposits, and withdrawals.</p>
      </div>

      {/* Balance Card */}
      <div className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-slate-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-110 transition-transform duration-700" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
              <WalletIcon size={22} className="text-slate-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Balance</p>
              <p className="text-sm font-semibold text-slate-400 mt-0.5">
                Pending: <span className="text-amber-500">${mockBalance.pending}</span>
              </p>
            </div>
          </div>
          <p className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            ${mockBalance.available}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard/deposits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <ArrowDownToLine size={18} />
              Deposit Funds
            </Link>
          </div>
        </div>
      </div>

      {/* Wallet Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Deposits (free)</p>
          <p className="text-xl font-extrabold text-[#0F172A]">$0 fees</p>
          <p className="text-xs text-slate-400 mt-1">Min. $60 to issue a card</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Payment Method</p>
          <p className="text-xl font-extrabold text-[#0F172A]">Crypto</p>
          <p className="text-xs text-slate-400 mt-1">100+ cryptocurrencies via NOWPayments</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Card Transfers</p>
          <p className="text-xl font-extrabold text-[#0F172A]">Instant</p>
          <p className="text-xs text-slate-400 mt-1">Move funds to cards instantly</p>
        </div>
      </div>

      {/* Wallet History */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Wallet Activity</h2>
        </div>
        <div className="divide-y divide-slate-50">
          {mockWalletHistory.map((item) => (
            <div key={item.id} className="flex items-center px-6 py-4 hover:bg-slate-50/50 transition-colors">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mr-4 ${
                item.type === 'deposit' ? 'bg-emerald-50 text-emerald-600' :
                item.type === 'withdrawal' ? 'bg-red-50 text-red-500' :
                'bg-blue-50 text-blue-600'
              }`}>
                {item.type === 'deposit' ? <ArrowDownToLine size={16} /> :
                 item.type === 'withdrawal' ? <ArrowUpFromLine size={16} /> :
                 <TrendingUp size={16} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0F172A]">
                  {item.type === 'deposit' ? `Deposit via ${item.crypto}` : item.description}
                </p>
                <p className="text-xs text-slate-400">{item.date}</p>
              </div>
              <div className="text-right ml-4">
                <p className={`text-sm font-bold tabular-nums ${
                  item.amount.startsWith('+') ? 'text-emerald-600' : 'text-[#0F172A]'
                }`}>{item.amount}</p>
                <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                  item.status === 'completed' ? 'bg-emerald-50 text-emerald-600' :
                  'bg-amber-50 text-amber-600'
                }`}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
