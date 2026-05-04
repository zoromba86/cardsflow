'use client';

import React, { useState } from 'react';
import { Search, Download, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const mockTxns = [
  { id: '1', card: '••4821', merchant: 'Netflix', amount: '-15.99', date: 'May 3, 2026', status: 'completed', type: 'purchase' },
  { id: '2', card: '••4821', merchant: 'Card Top-up', amount: '+500.00', date: 'May 3, 2026', status: 'completed', type: 'topup' },
  { id: '3', card: '••7392', merchant: 'Amazon Web Services', amount: '-149.00', date: 'May 2, 2026', status: 'completed', type: 'purchase' },
  { id: '4', card: '••4821', merchant: 'Spotify', amount: '-9.99', date: 'May 2, 2026', status: 'completed', type: 'purchase' },
  { id: '5', card: '••7392', merchant: 'Google Ads', amount: '-320.00', date: 'May 1, 2026', status: 'completed', type: 'purchase' },
  { id: '6', card: '••4821', merchant: 'Deposit', amount: '+1,000.00', date: 'May 1, 2026', status: 'completed', type: 'topup' },
  { id: '7', card: '••7392', merchant: 'Shopify', amount: '-29.00', date: 'Apr 30, 2026', status: 'completed', type: 'purchase' },
  { id: '8', card: '••4821', merchant: 'DigitalOcean', amount: '-12.00', date: 'Apr 29, 2026', status: 'declined', type: 'purchase' },
  { id: '9', card: '••7392', merchant: 'Refund — Amazon', amount: '+45.00', date: 'Apr 28, 2026', status: 'completed', type: 'refund' },
  { id: '10', card: '••4821', merchant: 'Uber', amount: '-22.50', date: 'Apr 27, 2026', status: 'completed', type: 'purchase' },
];

export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = mockTxns.filter((t) => {
    const matchesSearch = !search || t.merchant.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    const matchesType = typeFilter === 'all' || t.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Transactions</h1>
          <p className="text-slate-500 text-sm mt-1">Full transaction history across all your cards.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#0F172A] bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors self-start">
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search merchant..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50">
          <option value="all">All Status</option><option value="completed">Completed</option><option value="pending">Pending</option><option value="declined">Declined</option>
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50">
          <option value="all">All Types</option><option value="purchase">Purchase</option><option value="topup">Top-up</option><option value="refund">Refund</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Merchant</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Card</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-right py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.amount.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                        {t.amount.startsWith('+') ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                      </div>
                      <span className="font-semibold text-[#0F172A]">{t.merchant}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono text-xs">{t.card}</td>
                  <td className="py-3.5 px-6 text-slate-500">{t.date}</td>
                  <td className="py-3.5 px-6">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${t.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : t.status === 'declined' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>{t.status}</span>
                  </td>
                  <td className={`py-3.5 px-6 text-right font-bold tabular-nums ${t.amount.startsWith('+') ? 'text-emerald-600' : 'text-[#0F172A]'}`}>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-slate-400 text-sm">No transactions found matching your filters.</div>
        )}
      </div>
    </div>
  );
}
