'use client';

import React, { useState } from 'react';
import { Wifi, ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  { id: 1, bin: 'onyx', label: 'CardsFlow Onyx', desc: 'Premium — Full wallet support', apple: true, google: true, gradient: 'from-[#0A0F1C] via-[#111827] to-[#1E293B]', virtualFee: 5, physicalFee: 50 },
  { id: 2, bin: 'volt', label: 'CardsFlow Volt', desc: 'Standard — Google Pay focused', apple: false, google: true, gradient: 'from-[#1E1B4B] via-[#2E1065] to-[#4C1D95]', virtualFee: 5, physicalFee: 50 },
];

export default function OrdersPage() {
  const [step, setStep] = useState(1);
  const [selectedBin, setSelectedBin] = useState<number | null>(null);
  const [cardType, setCardType] = useState<'VIRTUAL' | 'PHYSICAL'>('VIRTUAL');

  const selected = products.find((p) => p.id === selectedBin);
  const fee = cardType === 'VIRTUAL' ? (selected?.virtualFee || 5) : (selected?.physicalFee || 50);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Order New Card</h1>
        <p className="text-slate-500 text-sm mt-1">Choose your card line, type, and start using it instantly.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-2 text-sm">
        {['Select Card', 'Card Type', 'Review'].map((s, i) => (
          <React.Fragment key={s}>
            <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${step > i + 1 ? 'bg-emerald-50 text-emerald-600' : step === i + 1 ? 'bg-[#E5B220] text-[#0F172A]' : 'bg-slate-100 text-slate-400'}`}>
              {step > i + 1 ? '✓' : i + 1}
            </span>
            <span className={`text-xs font-medium ${step >= i + 1 ? 'text-[#0F172A]' : 'text-slate-400'}`}>{s}</span>
            {i < 2 && <div className={`flex-1 h-px ${step > i + 1 ? 'bg-emerald-300' : 'bg-slate-200'}`} />}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Select BIN */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <button key={p.id} onClick={() => { setSelectedBin(p.id); setStep(2); }}
              className={`text-left border-2 rounded-2xl overflow-hidden transition-all hover:shadow-lg ${selectedBin === p.id ? 'border-[#E5B220]' : 'border-slate-200'}`}>
              <div className={`relative bg-gradient-to-br ${p.gradient} p-6 text-white overflow-hidden group`}>
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                
                {/* Glossy Reflection Highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div><p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{p.label}</p></div>
                  <Wifi size={16} className="text-white/40 rotate-90" />
                </div>
                <p className="text-lg font-mono tracking-[0.15em] text-white/70 mb-4 relative z-10">•••• •••• •••• ••••</p>
                <div className="flex items-center gap-2 relative z-10">
                  {p.apple && <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded text-white/80">Apple Pay</span>}
                  {p.google && <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded text-white/80">G Pay</span>}
                  <span className="text-xl font-extrabold italic text-white/80 ml-auto">VISA</span>
                </div>
              </div>
              <div className="bg-white p-5">
                <p className="font-bold text-[#0F172A] mb-1">{p.label}</p>
                <p className="text-xs text-slate-500 mb-3">{p.desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-slate-600">Virtual: <strong className="text-[#0F172A]">${p.virtualFee}</strong></span>
                  <span className="text-slate-600">Physical: <strong className="text-[#0F172A]">${p.physicalFee}</strong></span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Card Type */}
      {step === 2 && selected && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(['VIRTUAL', 'PHYSICAL'] as const).map((type) => (
              <button key={type} onClick={() => setCardType(type)}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${cardType === type ? 'border-[#E5B220] bg-[#E5B220]/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#0F172A]">{type === 'VIRTUAL' ? 'Virtual Card' : 'Physical Card'}</span>
                  {cardType === type && <CheckCircle2 size={18} className="text-[#E5B220]" />}
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  {type === 'VIRTUAL' ? 'Issued instantly. Use online wherever Visa is accepted.' : 'Delivered to your address. Use in-store and at ATMs.'}
                </p>
                <p className="text-lg font-extrabold text-[#0F172A]">${type === 'VIRTUAL' ? selected.virtualFee : selected.physicalFee} <span className="text-xs font-normal text-slate-500">one-time</span></p>
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">Back</button>
            <button onClick={() => setStep(3)} className="px-5 py-2.5 text-sm font-bold text-[#0F172A] bg-[#E5B220] rounded-xl hover:bg-[#D4A017] transition-colors flex items-center gap-2">Continue <ArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && selected && (
        <div className="max-w-lg space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Card Line</span><span className="font-bold text-[#0F172A]">{selected.label}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Type</span><span className="font-bold text-[#0F172A]">{cardType}</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Network</span><span className="font-bold text-[#0F172A]">Visa</span></div>
              <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Digital Wallets</span><span className="font-bold text-[#0F172A]">{selected.apple ? 'Apple Pay + Google Pay' : 'Google Pay'}</span></div>
              <div className="flex justify-between py-2"><span className="text-slate-500">Issuance Fee</span><span className="text-lg font-extrabold text-[#0F172A]">${fee}</span></div>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-sm">
            <strong>Note:</strong> The issuance fee will be deducted from your wallet balance. Ensure you have at least ${fee} available.
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">Back</button>
            <button className="px-6 py-3 text-sm font-bold text-[#0F172A] bg-[#E5B220] rounded-xl hover:bg-[#D4A017] transition-colors">Confirm Order</button>
          </div>
        </div>
      )}
    </div>
  );
}
