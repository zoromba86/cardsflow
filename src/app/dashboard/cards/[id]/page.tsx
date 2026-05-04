'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Copy, Check, Lock, CreditCard, ArrowUpRight, ArrowDownLeft, X, Loader2 } from 'lucide-react';

export default function CardDetailPage() {
  const [showNumber, setShowNumber] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [copied, setCopied] = useState('');

  // Unload Modal State
  const [showUnloadModal, setShowUnloadModal] = useState(false);
  const [unloadAmount, setUnloadAmount] = useState('');
  const [unloading, setUnloading] = useState(false);
  const [unloadSuccess, setUnloadSuccess] = useState(false);

  // Mock Card Data (to be replaced by API)
  const [card, setCard] = useState({ id: '1', binType: 'onyx', nature: 'VIRTUAL', number: '4096 3608 1234 4821', masked: '•••• •••• •••• 4821', last4: '4821', balance: '1250.00', status: 'active', expiry: '12/31', cvv: '482', pin: '1234', holder: 'CARDSFLOW USER', apple: true, google: true });

  const handleUnload = async () => {
    setUnloading(true);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCard(prev => ({
      ...prev,
      balance: (parseFloat(prev.balance) - parseFloat(unloadAmount || '0')).toFixed(2)
    }));
    setUnloading(false);
    setUnloadSuccess(true);
    setTimeout(() => {
      setShowUnloadModal(false);
      setUnloadSuccess(false);
      setUnloadAmount('');
    }, 2000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''));
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/cards" className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">CardsFlow Onyx •••{card.last4}</h1>
          <p className="text-slate-500 text-sm">Virtual Card — Active</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card Visual + Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card Visual */}
          <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">CardsFlow Onyx — Virtual</p>
            <p className="text-2xl font-mono tracking-[0.2em] text-white/90 mb-6">{showNumber ? card.number : card.masked}</p>
            <div className="flex gap-8">
              <div><p className="text-[9px] text-white/40 uppercase mb-0.5">Holder</p><p className="text-sm font-semibold">{card.holder}</p></div>
              <div><p className="text-[9px] text-white/40 uppercase mb-0.5">Expires</p><p className="text-sm font-semibold">{card.expiry}</p></div>
              <div><p className="text-[9px] text-white/40 uppercase mb-0.5">CVV</p><p className="text-sm font-semibold">{showCvv ? card.cvv : '•••'}</p></div>
            </div>
            <div className="absolute bottom-6 right-8 flex items-center gap-2">
              <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded">Apple Pay</span>
              <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded">G Pay</span>
              <span className="text-2xl font-extrabold italic text-white/80">VISA</span>
            </div>
          </div>

          {/* Reveal Controls */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Card Details</h3>
            <div className="space-y-3">
              {[
                { label: 'Card Number', value: card.number, masked: card.masked, show: showNumber, toggle: () => setShowNumber(!showNumber), field: 'number' },
                { label: 'CVV', value: card.cvv, masked: '•••', show: showCvv, toggle: () => setShowCvv(!showCvv), field: 'cvv' },
                { label: 'PIN', value: card.pin, masked: '••••', show: showPin, toggle: () => setShowPin(!showPin), field: 'pin' },
              ].map((item) => (
                <div key={item.field} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm font-bold text-[#0F172A] font-mono tabular-nums">{item.show ? item.value : item.masked}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={item.toggle} className="p-2 rounded-lg hover:bg-slate-100 transition-colors" title={item.show ? 'Hide' : 'Reveal'}>
                      {item.show ? <EyeOff size={16} className="text-slate-500" /> : <Eye size={16} className="text-slate-500" />}
                    </button>
                    {item.show && (
                      <button onClick={() => copyToClipboard(item.value, item.field)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors" title="Copy">
                        {copied === item.field ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-slate-500" />}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Available Balance</p>
            <p className="text-4xl font-extrabold text-slate-900 tabular-nums mb-6">${parseFloat(card.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <div className="flex flex-col gap-3">
              <Link href="/dashboard/topups" className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors">
                <ArrowUpRight size={18} /> Top-up Card
              </Link>
              <button 
                onClick={() => setShowUnloadModal(true)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                <ArrowDownLeft size={18} /> Unload to Wallet
              </button>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] mb-3">Card Management</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-[#0F172A] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                <Lock size={14} className="text-slate-500" /> Change PIN
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors flex items-center gap-3">
                <CreditCard size={14} /> Freeze Card
              </button>
              <button className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center gap-3">
                Cancel Card
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Unload Modal */}
      {showUnloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Unload to Wallet</h3>
              <button onClick={() => !unloading && setShowUnloadModal(false)} className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {unloadSuccess ? (
                <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Check size={32} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Successfully Unloaded</h4>
                    <p className="text-sm text-slate-500 mt-1">Funds have been returned to your wallet.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center border border-slate-100">
                    <span className="text-sm font-semibold text-slate-600">Card Balance</span>
                    <span className="text-lg font-extrabold text-slate-900">${parseFloat(card.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Amount to Unload ($)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-400 font-bold">$</span>
                      </div>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={unloadAmount}
                        onChange={(e) => setUnloadAmount(e.target.value)}
                        className="block w-full pl-8 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleUnload}
                    disabled={!unloadAmount || parseFloat(unloadAmount) <= 0 || parseFloat(unloadAmount) > parseFloat(card.balance) || unloading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {unloading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Processing...
                      </>
                    ) : (
                      'Confirm Unload'
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
