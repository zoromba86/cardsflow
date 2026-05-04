'use client';

import React, { useState } from 'react';
import { ArrowDownToLine, Copy, Check, Clock, CheckCircle2, QrCode } from 'lucide-react';

const mockHistory = [
  { id: '1', amount: '1,000.00', crypto: 'USDT', status: 'completed', date: 'May 1, 2026', txnHash: '0x1a2b...3c4d' },
  { id: '2', amount: '2,000.00', crypto: 'BTC', status: 'completed', date: 'Apr 28, 2026', txnHash: '0x5e6f...7g8h' },
  { id: '3', amount: '500.00', crypto: 'ETH', status: 'confirming', date: 'Apr 25, 2026', txnHash: '0x9i0j...1k2l' },
];

export default function DepositsPage() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USDT');
  const [showInvoice, setShowInvoice] = useState(false);
  const [copied, setCopied] = useState(false);

  const mockAddress = 'TLaX2VfTQs5T9pW3Zp7fL5kzCEdN3h9QkM';

  const handleGenerate = () => {
    if (parseFloat(amount) >= 60) setShowInvoice(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(mockAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Deposits</h1>
        <p className="text-slate-500 text-sm mt-1">Fund your wallet with 100+ cryptocurrencies.</p>
      </div>

      {/* Free deposit callout */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
        <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
        <p className="text-sm text-emerald-800"><strong>Deposits are FREE</strong> — No fees on wallet funding. Minimum deposit: $60.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deposit Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">New Deposit</h2>
          {!showInvoice ? (
            <div className="space-y-5">
              <div>
                <label htmlFor="dep-amount" className="block text-sm font-semibold text-[#0F172A] mb-2">Amount (USD)</label>
                <input id="dep-amount" type="number" min="60" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Min. $60"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]" />
              </div>
              <div>
                <label htmlFor="dep-crypto" className="block text-sm font-semibold text-[#0F172A] mb-2">Pay with</label>
                <select id="dep-crypto" value={currency} onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220]">
                  {['USDT', 'BTC', 'ETH', 'LTC', 'SOL', 'USDC', 'TRX', 'DOGE', 'BNB', 'XRP'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <p className="text-xs text-slate-400 mt-1">100+ cryptocurrencies available via NOWPayments</p>
              </div>
              <button onClick={handleGenerate} disabled={!amount || parseFloat(amount) < 60}
                className="w-full py-3.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <ArrowDownToLine size={16} /> Generate Payment Address
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="text-center">
                <div className="w-48 h-48 bg-slate-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <QrCode size={80} className="text-slate-300" />
                </div>
                <p className="text-xs text-slate-500">Scan QR code or copy address below</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Send {currency} to:</p>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <code className="text-xs text-[#0F172A] flex-1 break-all font-mono">{mockAddress}</code>
                  <button onClick={copyAddress} className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors shrink-0">
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="text-slate-500" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-sm py-2 border-t border-slate-100">
                <span className="text-slate-500">Amount</span><span className="font-bold text-[#0F172A]">${amount}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <Clock size={14} className="shrink-0" /> Payment expires in 60 minutes.
              </div>
              <button onClick={() => setShowInvoice(false)} className="w-full py-2.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">New Deposit</button>
            </div>
          )}
        </div>

        {/* Deposit History */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100"><h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Deposit History</h2></div>
          <div className="divide-y divide-slate-50">
            {mockHistory.map((d) => (
              <div key={d.id} className="flex items-center px-6 py-4 hover:bg-slate-50/50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mr-4"><ArrowDownToLine size={16} /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#0F172A]">${d.amount}</p>
                  <p className="text-xs text-slate-400">via {d.crypto} · {d.date}</p>
                </div>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${d.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
