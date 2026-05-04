'use client';

import React, { useState } from 'react';
import { Copy, Check, Users, DollarSign, UserPlus, Wallet } from 'lucide-react';

const mockStats = { referralLink: 'https://cardsflow.net/ref/u1234abc', totalSignups: 12, activeReferrals: 8, totalCommissions: '45.60', pendingPayout: '18.20' };
const mockHistory = [
  { id: '1', email: 'j***@gmail.com', topUp: '500.00', fee: '35.00', commission: '0.35', date: 'May 2, 2026' },
  { id: '2', email: 'a***@yahoo.com', topUp: '2,000.00', fee: '120.00', commission: '1.20', date: 'Apr 30, 2026' },
  { id: '3', email: 'm***@outlook.com', topUp: '100.00', fee: '7.00', commission: '0.07', date: 'Apr 28, 2026' },
];

export default function AffiliatePage() {
  const [copied, setCopied] = useState(false);
  const copyLink = () => { navigator.clipboard.writeText(mockStats.referralLink); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Affiliate Program</h1>
        <p className="text-slate-500 text-sm mt-1">Earn 1% lifetime commission on every top-up fee paid by your referrals.</p>
      </div>

      {/* Commission callout */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-2"><DollarSign size={18} className="text-[#E5B220]" /><span className="text-sm font-bold">Earn 1% Lifetime</span></div>
        <p className="text-slate-400 text-sm mb-4">Every time a referred user tops up their card, you earn 1% of the fee charged — for the lifetime of their account.</p>
        <div className="flex items-center gap-2 bg-white/10 rounded-xl p-3">
          <code className="text-xs flex-1 break-all font-mono text-white/80">{mockStats.referralLink}</code>
          <button onClick={copyLink} className="p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0">
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-white/60" />}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Signups', value: mockStats.totalSignups, icon: UserPlus, bg: 'bg-blue-50', color: 'text-blue-600' },
          { label: 'Active Referrals', value: mockStats.activeReferrals, icon: Users, bg: 'bg-emerald-50', color: 'text-emerald-600' },
          { label: 'Total Earned', value: `$${mockStats.totalCommissions}`, icon: DollarSign, bg: 'bg-amber-50', color: 'text-amber-600' },
          { label: 'Pending Payout', value: `$${mockStats.pendingPayout}`, icon: Wallet, bg: 'bg-purple-50', color: 'text-purple-600' },
        ].map((s) => { const I = s.icon; return (
          <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center mb-3`}><I size={18} className={s.color} /></div>
            <p className="text-xl font-extrabold text-[#0F172A]">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ); })}
      </div>

      {/* Commission History */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Commission History</h2>
          <button className="px-4 py-2 text-xs font-bold text-[#0F172A] bg-[#E5B220] rounded-lg hover:bg-[#D4A017] transition-colors">Request Payout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Referred User</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Top-up</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Fee Charged</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Your 1%</th>
                <th className="text-left py-3 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockHistory.map((h) => (
                <tr key={h.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-6 text-slate-600 font-mono text-xs">{h.email}</td>
                  <td className="py-3.5 px-6 font-semibold text-[#0F172A]">${h.topUp}</td>
                  <td className="py-3.5 px-6 text-slate-500">${h.fee}</td>
                  <td className="py-3.5 px-6 font-bold text-emerald-600">${h.commission}</td>
                  <td className="py-3.5 px-6 text-slate-500">{h.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
