'use client';

import React, { useState } from 'react';
import { X, Loader2, Check } from 'lucide-react';
import { formatBalance } from '../utils/masks';

interface TopUpModalProps {
  open: boolean;
  balance: string;
  ccy: string;
  onConfirm: (amount: number) => Promise<void>;
  onClose: () => void;
}

export function TopUpModal({ open, balance, ccy, onConfirm, onClose }: TopUpModalProps) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleConfirm = async () => {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) return;
    setLoading(true);
    try {
      await onConfirm(num);
      setSuccess(true);
      setTimeout(() => { onClose(); setSuccess(false); setAmount(''); }, 2000);
    } catch { /* handled by parent */ } finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Top-up Card</h3>
          <button onClick={() => !loading && onClose()} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-6">
          {success ? (
            <div className="py-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center"><Check size={32} className="text-emerald-600" /></div>
              <div><h4 className="text-lg font-bold text-slate-900">Top-up Successful</h4><p className="text-sm text-slate-500 mt-1">Funds have been added to your card.</p></div>
            </div>
          ) : (
            <>
              <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center border border-slate-100">
                <span className="text-sm font-semibold text-slate-600">Current Balance</span>
                <span className="text-lg font-extrabold text-slate-900">{formatBalance(balance, ccy)}</span>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Amount ($)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><span className="text-slate-400 font-bold">$</span></div>
                  <input type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} className="block w-full pl-8 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                </div>
              </div>
              <button onClick={handleConfirm} disabled={!amount || parseFloat(amount) <= 0 || loading} className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : 'Confirm Top-up'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
