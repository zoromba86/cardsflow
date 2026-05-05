'use client';

import React, { useState } from 'react';
import { Loader2, Check, ShieldCheck } from 'lucide-react';

interface SetPinFormProps {
  onSubmit: (pin: string) => Promise<void>;
}

export function SetPinForm({ onSubmit }: SetPinFormProps) {
  const [pin, setPin] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (pin.length !== 4) { setError('PIN must be exactly 4 digits.'); return; }
    if (pin !== confirm) { setError('PINs do not match.'); return; }
    setLoading(true);
    try {
      await onSubmit(pin);
      setSuccess(true);
      setPin(''); setConfirm(''); // Clear sensitive values
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to set PIN.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <Check size={32} className="text-emerald-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">PIN Set Successfully</h3>
        <p className="text-sm text-slate-500">Your card PIN has been updated.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
          <ShieldCheck size={20} className="text-slate-600" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#0F172A]">Set Card PIN</h3>
          <p className="text-xs text-slate-500">Set a 4-digit PIN for ATM withdrawals and in-store purchases.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">New PIN</label>
          <input type="password" inputMode="numeric" maxLength={4} pattern="[0-9]{4}" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="••••" className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-center text-2xl tracking-[0.5em] font-bold focus:outline-none focus:ring-2 focus:ring-[#E5B220] focus:border-transparent" autoComplete="off" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Confirm PIN</label>
          <input type="password" inputMode="numeric" maxLength={4} pattern="[0-9]{4}" value={confirm} onChange={(e) => setConfirm(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="••••" className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-center text-2xl tracking-[0.5em] font-bold focus:outline-none focus:ring-2 focus:ring-[#E5B220] focus:border-transparent" autoComplete="off" />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}
      <button type="submit" disabled={pin.length !== 4 || confirm.length !== 4 || loading} className="w-full py-3 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {loading ? <><Loader2 size={18} className="animate-spin" /> Setting PIN...</> : 'Set PIN'}
      </button>
    </form>
  );
}
