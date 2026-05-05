'use client';

import React from 'react';
import { X } from 'lucide-react';
import type { CardTransaction } from '../types';

interface TransactionDetailsDrawerProps {
  txn: CardTransaction | null;
  onClose: () => void;
}

export function TransactionDetailsDrawer({ txn, onClose }: TransactionDetailsDrawerProps) {
  if (!txn) return null;

  const isCredit = txn.type === 'topup' || txn.type === 'refund';
  const rows = [
    { label: 'Transaction ID', value: txn.id },
    { label: 'Merchant', value: txn.merchant },
    { label: 'Type', value: txn.type.charAt(0).toUpperCase() + txn.type.slice(1) },
    { label: 'Status', value: txn.status.charAt(0).toUpperCase() + txn.status.slice(1) },
    { label: 'Date', value: txn.date },
    { label: 'Card', value: `•••• ${txn.cardLastFour}` },
    ...(txn.fxRate ? [{ label: 'FX Rate', value: txn.fxRate }] : []),
    ...(txn.authorizationCode ? [{ label: 'Auth Code', value: txn.authorizationCode }] : []),
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md h-full shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Transaction Details</h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-6">
          <div className="text-center">
            <p className={`text-3xl font-extrabold tabular-nums ${isCredit ? 'text-emerald-600' : 'text-slate-900'}`}>
              {isCredit ? '+' : '-'}${txn.amount.replace(/^[+-]/, '')}
            </p>
            <p className="text-sm text-slate-500 mt-1">{txn.merchant}</p>
          </div>
          <div className="space-y-0 divide-y divide-slate-100">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between py-3">
                <span className="text-sm text-slate-500">{row.label}</span>
                <span className="text-sm font-bold text-slate-900 text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
