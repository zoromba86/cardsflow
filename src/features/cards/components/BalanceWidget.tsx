'use client';

import React from 'react';
import { formatBalance } from '../utils/masks';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface BalanceWidgetProps {
  balance: string;
  ccy: string;
  disabled?: boolean;
  onTopUp: () => void;
  onUnload: () => void;
}

export function BalanceWidget({ balance, ccy, disabled = false, onTopUp, onUnload }: BalanceWidgetProps) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Available Balance</p>
      <p className="text-4xl font-extrabold text-slate-900 tabular-nums mb-6">
        {formatBalance(balance, ccy)}
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={onTopUp}
          disabled={disabled}
          className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Top up this card"
        >
          <ArrowUpRight size={18} /> Top-up Card
        </button>
        <button
          onClick={onUnload}
          disabled={disabled}
          className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Unload funds to wallet"
        >
          <ArrowDownLeft size={18} /> Unload to Wallet
        </button>
      </div>
    </div>
  );
}
