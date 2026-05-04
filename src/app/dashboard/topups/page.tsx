'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { calculateTopUpFee, FEES } from '@/lib/utils/fees';

const mockCards = [
  { id: '1', label: 'CardsFlow Onyx ••4821', balance: '1,250.00' },
  { id: '2', label: 'CardsFlow Volt ••7392', balance: '800.00' },
];

export default function TopupsPage() {
  const [selectedCard, setSelectedCard] = useState('');
  const [amount, setAmount] = useState('');
  const numAmount = parseFloat(amount) || 0;
  const feeResult = calculateTopUpFee(numAmount);
  const isValid = numAmount >= FEES.MIN_TOPUP && selectedCard;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Top-up Card</h1>
        <p className="text-slate-500 text-sm mt-1">Add funds to your card. Fees are calculated based on a tiered schedule.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top-up Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <div>
            <label htmlFor="tu-card" className="block text-sm font-semibold text-[#0F172A] mb-2">Select Card</label>
            <select id="tu-card" value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]">
              <option value="">Choose a card...</option>
              {mockCards.map((c) => (<option key={c.id} value={c.id}>{c.label} (${c.balance})</option>))}
            </select>
          </div>
          <div>
            <label htmlFor="tu-amount" className="block text-sm font-semibold text-[#0F172A] mb-2">Amount (USD)</label>
            <input id="tu-amount" type="number" min="25" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={`Min. $${FEES.MIN_TOPUP}`}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]" />
          </div>
          <button disabled={!isValid}
            className="w-full py-3.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
            <ArrowUpRight size={16} /> Generate Top-up Payment
          </button>
        </div>

        {/* Live Fee Calculator */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Fee Calculator</h2>
          {numAmount >= FEES.MIN_TOPUP ? (
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-slate-100 text-sm"><span className="text-slate-500">Top-up Amount</span><span className="font-bold text-[#0F172A]">${numAmount.toFixed(2)}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100 text-sm">
                <span className="text-slate-500">Fee Rate</span>
                <span className="font-bold text-[#0F172A]">{feeResult.ratePercent} <span className="text-xs font-normal text-slate-400">({feeResult.tierLabel})</span></span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 text-sm"><span className="text-slate-500">Fee Amount</span><span className="font-bold text-red-500">-${feeResult.fee.toFixed(2)}</span></div>
              <div className="flex justify-between py-3 text-sm"><span className="text-slate-500 font-semibold">Net Loaded to Card</span><span className="text-xl font-extrabold text-emerald-600">${feeResult.net.toFixed(2)}</span></div>
              {/* Tier Progress */}
              <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-[#0F172A] mb-3">Fee Tiers</p>
                {FEES.TOPUP_TIERS.map((tier) => (
                  <div key={tier.label} className="flex items-center gap-3 mb-2 last:mb-0">
                    <div className={`w-2 h-2 rounded-full ${numAmount >= tier.min && numAmount <= tier.max ? 'bg-[#E5B220]' : 'bg-slate-300'}`} />
                    <span className={`text-xs flex-1 ${numAmount >= tier.min && numAmount <= tier.max ? 'font-bold text-[#0F172A]' : 'text-slate-400'}`}>
                      ${tier.min.toLocaleString()} – {tier.max === Infinity ? '∞' : `$${tier.max.toLocaleString()}`}
                    </span>
                    <span className={`text-xs font-bold ${numAmount >= tier.min && numAmount <= tier.max ? 'text-[#E5B220]' : 'text-slate-400'}`}>{tier.rate * 100}%</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 text-slate-400 py-8">
              <Info size={18} className="mt-0.5 shrink-0" />
              <p className="text-sm">Enter an amount of $25 or more to see the fee breakdown.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
