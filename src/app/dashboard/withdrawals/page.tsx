'use client';

import React, { useState } from 'react';
import { ArrowUpFromLine, AlertTriangle, Loader2, CheckCircle2 } from 'lucide-react';

const mockHistory = [
  { id: '1', name: 'John Doe', wallet: 'TLaX...QkM', amount: '300.00', reason: 'Personal', status: 'completed', date: 'Apr 27, 2026' },
  { id: '2', name: 'John Doe', wallet: 'TLaX...QkM', amount: '150.00', reason: 'Business expense', status: 'processing', date: 'Apr 20, 2026' },
];

export default function WithdrawalsPage() {
  const [name, setName] = useState('');
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !wallet || !amount || !reason) { setError('Please fill in all fields.'); return; }
    if (!/^T[A-Za-z0-9]{33}$/.test(wallet)) { setError('Please enter a valid TRC20 wallet address (starts with T, 34 characters).'); return; }
    if (parseFloat(amount) <= 0) { setError('Please enter a valid amount.'); return; }
    setIsLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Refund Request</h1>
        <p className="text-slate-500 text-sm mt-1">Request a manual refund of your initial deposit to your USDT TRC20 wallet.</p>
      </div>

      {/* Disclosure */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-800">Refunds are processed manually in <strong>USDT (TRC20) only</strong> within 1–10 business days. You will receive an email confirmation once processed.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Withdrawal Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Request Refund</h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} className="text-emerald-500" /></div>
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">Request Submitted</h3>
              <p className="text-sm text-slate-500 mb-6">Your refund request has been submitted for review. You will receive an email notification once processed.</p>
              <button onClick={() => { setSubmitted(false); setName(''); setWallet(''); setAmount(''); setReason(''); }} className="px-5 py-2.5 text-sm font-bold bg-slate-100 text-[#0F172A] rounded-xl hover:bg-slate-200 transition-colors">New Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{error}</div>}
              <div>
                <label htmlFor="wd-name" className="block text-sm font-semibold text-[#0F172A] mb-2">Full Name</label>
                <input id="wd-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]" required disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="wd-wallet" className="block text-sm font-semibold text-[#0F172A] mb-2">USDT TRC20 Wallet Address</label>
                <input id="wd-wallet" type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="T..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220] font-mono" required disabled={isLoading} />
                <p className="text-xs text-slate-400 mt-1">Must be a valid TRC20 address starting with &quot;T&quot;</p>
              </div>
              <div>
                <label htmlFor="wd-amount" className="block text-sm font-semibold text-[#0F172A] mb-2">Amount (USD)</label>
                <input id="wd-amount" type="number" min="1" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]" required disabled={isLoading} />
              </div>
              <div>
                <label htmlFor="wd-reason" className="block text-sm font-semibold text-[#0F172A] mb-2">Reason for Refund</label>
                <textarea id="wd-reason" rows={3} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Describe the reason..." className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220] resize-none" required disabled={isLoading} />
              </div>
              <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                {isLoading ? <><Loader2 size={16} className="animate-spin" /> Processing...</> : <><ArrowUpFromLine size={16} /> Submit Refund Request</>}
              </button>
            </form>
          )}
        </div>

        {/* Refund History */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100"><h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Refund History</h2></div>
          <div className="divide-y divide-slate-50">
            {mockHistory.map((w) => (
              <div key={w.id} className="px-6 py-4 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-[#0F172A]">${w.amount}</p>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${w.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{w.status}</span>
                </div>
                <p className="text-xs text-slate-400">{w.name} · {w.wallet} · {w.date}</p>
                <p className="text-xs text-slate-400 mt-0.5">Reason: {w.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
