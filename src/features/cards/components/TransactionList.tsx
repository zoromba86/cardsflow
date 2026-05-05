'use client';

import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import type { CardTransaction } from '../types';

interface TransactionListProps {
  transactions: CardTransaction[];
  onSelect: (txn: CardTransaction) => void;
}

export function TransactionList({ transactions, onSelect }: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowUpRight size={24} className="text-slate-400" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">No transactions yet</h3>
        <p className="text-sm text-slate-500">Transactions will appear here once you start using your card.</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-50">
      {transactions.map((txn) => {
        const isCredit = txn.type === 'topup' || txn.type === 'refund';
        return (
          <button key={txn.id} onClick={() => onSelect(txn)} className="w-full flex items-center px-6 py-4 hover:bg-slate-50 transition-colors text-left">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mr-4 ${isCredit ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
              {isCredit ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">{txn.merchant}</p>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{txn.date}</p>
            </div>
            <div className="text-right ml-4">
              <span className={`text-sm font-bold tabular-nums ${isCredit ? 'text-emerald-600' : 'text-slate-900'}`}>
                {isCredit ? '+' : '-'}{txn.currency === 'USD' ? '$' : ''}{txn.amount.replace(/^[+-]/, '')}
              </span>
              <p className={`text-[10px] font-bold uppercase mt-0.5 ${
                txn.status === 'completed' ? 'text-emerald-500' :
                txn.status === 'pending' ? 'text-amber-500' :
                txn.status === 'declined' ? 'text-red-500' : 'text-slate-400'
              }`}>{txn.status}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
