'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Wifi, ArrowRight, ArrowLeft, CheckCircle2, Loader2, MapPin } from 'lucide-react';
import { CARD_ROUTES } from '@/features/cards/types';
import type { CardKind, CardBinType } from '@/features/cards/types';
import { cardsService } from '@/features/cards/api';
import { useCardProducts } from '@/features/cards/hooks/useCardProducts';

const noiseTexture = "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')";

export default function ApplyCardPage() {
  const router = useRouter();
  const { products, loading } = useCardProducts();
  const [step, setStep] = useState(1);
  const [selectedBinType, setSelectedBinType] = useState<CardBinType | null>(null);
  const [cardType, setCardType] = useState<CardKind>('VIRTUAL');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Delivery address state for physical cards
  const [address, setAddress] = useState({ fullName: '', addressLine1: '', addressLine2: '', city: '', state: '', country: '', postalCode: '', phone: '' });

  // Group products by binType for step 1
  const binGroups = [
    { type: 'onyx' as CardBinType, label: 'CardsFlow Onyx', desc: 'Premium — Full wallet support', apple: true, google: true, gradient: 'from-[#0A0F1C] via-[#020617] to-[#000000]' },
    { type: 'volt' as CardBinType, label: 'CardsFlow Volt', desc: 'Standard — Google Pay focused', apple: false, google: true, gradient: 'from-[#042F2E] via-[#0F766E] to-[#115E59]' },
  ];

  // Helper to get exact gradient for Step 2 preview
  const getGradientForVariant = (bin: CardBinType, nature: CardKind) => {
    if (bin === 'onyx') return nature === 'PHYSICAL' ? 'from-[#0A0F1C] via-[#020617] to-[#000000]' : 'from-[#334155] via-[#1E293B] to-[#0F172A]';
    return nature === 'PHYSICAL' ? 'from-[#042F2E] via-[#0F766E] to-[#115E59]' : 'from-[#0D9488] via-[#14B8A6] to-[#2DD4BF]';
  };

  const selectedProduct = products.find(p => p.binType === selectedBinType && p.bankCardNature === cardType);
  const fee = selectedProduct?.applyFee || '0.00';
  const isPhysical = cardType === 'PHYSICAL';
  const totalSteps = isPhysical ? 4 : 3;

  const stepLabels = isPhysical
    ? ['Select Card', 'Card Type', 'Delivery Address', 'Review']
    : ['Select Card', 'Card Type', 'Review'];

  const handleSubmit = async () => {
    if (!selectedProduct) return;
    setSubmitting(true);
    try {
      await cardsService.applyCard(selectedProduct.id);
      setSuccess(true);
      setTimeout(() => router.push(CARD_ROUTES.list), 3000);
    } catch {
      // In production, show error toast
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="space-y-6 animate-pulse"><div className="h-8 bg-slate-200 rounded w-1/3" /><div className="bg-slate-100 rounded-2xl h-48" /></div>;
  }

  return (
    <div className="relative min-h-[80vh] space-y-8">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[100px] mix-blend-multiply" />
        <div className="absolute -bottom-[20%] right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.list} className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Order New Card</h1>
          <p className="text-slate-500 text-sm mt-1">Choose your card line, type, and start using it.</p>
        </div>
      </div>

      {/* Success screen */}
      {success && (
        <div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-12 text-center max-w-lg mx-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transform transition-all duration-700 translate-y-0 opacity-100 animate-in fade-in zoom-in-95">
          <div className="w-24 h-24 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
            <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <CheckCircle2 size={48} className="text-emerald-500 drop-shadow-md" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Card Order Placed</h2>
          <p className="text-base text-slate-500 mb-6 max-w-[280px] mx-auto leading-relaxed">
            {isPhysical ? 'Your premium physical card is being crafted and will be shipped to your address shortly.' : 'Your virtual card has been issued instantly and is ready for use.'}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 bg-slate-50 py-2 px-4 rounded-full w-max mx-auto">
            <Loader2 size={12} className="animate-spin text-emerald-500" />
            Redirecting to your dashboard...
          </div>
        </div>
      )}

      {!success && (
        <>
          {/* Progress steps */}
          <div className="flex items-center gap-2 text-sm">
            {stepLabels.map((s, i) => (
              <React.Fragment key={s}>
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${step > i + 1 ? 'bg-emerald-50 text-emerald-600' : step === i + 1 ? 'bg-[#E5B220] text-[#0F172A]' : 'bg-slate-100 text-slate-400'}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </span>
                <span className={`text-xs font-medium hidden sm:inline ${step >= i + 1 ? 'text-[#0F172A]' : 'text-slate-400'}`}>{s}</span>
                {i < stepLabels.length - 1 && <div className={`flex-1 h-px ${step > i + 1 ? 'bg-emerald-300' : 'bg-slate-200'}`} />}
              </React.Fragment>
            ))}
          </div>

          {/* Step 1: Select BIN */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {binGroups.map((p) => (
                <button key={p.type} onClick={() => { setSelectedBinType(p.type); setStep(2); }}
                  className={`text-left border-2 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${selectedBinType === p.type ? 'border-[#E5B220] shadow-lg ring-4 ring-[#E5B220]/10' : 'border-white bg-white/60 backdrop-blur-md shadow-sm'}`}>
                  <div className={`relative bg-gradient-to-br ${p.gradient} p-6 text-white overflow-hidden group`}>
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseTexture }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-opacity duration-500 pointer-events-none" />
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{p.label}</p>
                      <Wifi size={16} className="text-white/40 rotate-90 drop-shadow-sm" />
                    </div>
                    <p className="text-xl font-mono tracking-[0.2em] text-white/70 mb-4 relative z-10 drop-shadow-sm">•••• •••• •••• ••••</p>
                    <div className="flex items-center gap-2 relative z-10">
                      {p.apple && <span className="text-[8px] font-extrabold uppercase tracking-widest bg-white/10 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm text-white/90">Apple Pay</span>}
                      {p.google && <span className="text-[8px] font-extrabold uppercase tracking-widest bg-white/10 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm text-white/90">G Pay</span>}
                      <span className="text-2xl font-extrabold italic text-white/80 ml-auto drop-shadow-md tracking-tighter">VISA</span>
                    </div>
                  </div>
                  <div className="p-5 bg-white/80 backdrop-blur-md">
                    <p className="font-bold text-[#0F172A] mb-1">{p.label}</p>
                    <p className="text-xs text-slate-500 mb-3">{p.desc}</p>
                    <div className="flex gap-4 text-xs">
                      <span className="text-slate-600">Virtual: <strong className="text-[#0F172A]">${products.find(prod => prod.binType === p.type && prod.bankCardNature === 'VIRTUAL')?.applyFee || '5.00'}</strong></span>
                      <span className="text-slate-600">Physical: <strong className="text-[#0F172A]">${products.find(prod => prod.binType === p.type && prod.bankCardNature === 'PHYSICAL')?.applyFee || '50.00'}</strong></span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Card Type */}
          {step === 2 && selectedBinType && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(['VIRTUAL', 'PHYSICAL'] as const).map((type) => (
                  <button key={type} onClick={() => setCardType(type)}
                    className={`text-left rounded-2xl border-2 transition-all overflow-hidden ${cardType === type ? 'border-[#E5B220] ring-4 ring-[#E5B220]/10 shadow-lg' : 'border-white bg-white/60 backdrop-blur-md hover:-translate-y-1 hover:shadow-md'}`}>
                    <div className={`h-2 bg-gradient-to-r ${getGradientForVariant(selectedBinType, type)}`} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-[#0F172A]">{type === 'VIRTUAL' ? 'Virtual Card' : 'Physical Card'}</span>
                        {cardType === type && <CheckCircle2 size={18} className="text-[#E5B220]" />}
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        {type === 'VIRTUAL' ? 'Issued instantly. Use online wherever Visa is accepted.' : 'Delivered to your door. Use in-store, at ATMs, and online.'}
                      </p>
                      <p className="text-lg font-extrabold text-[#0F172A]">${products.find(prod => prod.binType === selectedBinType && prod.bankCardNature === type)?.applyFee || '0.00'} <span className="text-xs font-normal text-slate-500">one-time</span></p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 relative z-10">
                <button onClick={() => setStep(1)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">Back</button>
                <button onClick={() => setStep(isPhysical ? 3 : totalSteps)} className="px-5 py-2.5 text-sm font-bold text-[#0F172A] bg-[#E5B220] rounded-xl hover:bg-[#D4A017] transition-colors flex items-center gap-2 shadow-sm">Continue <ArrowRight size={14} /></button>
              </div>
            </div>
          )}

          {/* Step 3 (Physical Only): Delivery Address */}
          {step === 3 && isPhysical && (
            <div className="max-w-lg space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center"><MapPin size={20} className="text-blue-600" /></div>
                  <div><h3 className="text-sm font-bold text-[#0F172A]">Delivery Address</h3><p className="text-xs text-slate-500">Where should we ship your physical card?</p></div>
                </div>
                {[
                  { key: 'fullName', label: 'Full Name', placeholder: 'John Doe' },
                  { key: 'addressLine1', label: 'Address Line 1', placeholder: '123 Main St' },
                  { key: 'addressLine2', label: 'Address Line 2 (optional)', placeholder: 'Apt 4B' },
                  { key: 'city', label: 'City', placeholder: 'New York' },
                  { key: 'state', label: 'State / Province', placeholder: 'NY' },
                  { key: 'country', label: 'Country', placeholder: 'United States' },
                  { key: 'postalCode', label: 'Postal Code', placeholder: '10001' },
                  { key: 'phone', label: 'Phone (optional)', placeholder: '+1 555 123 4567' },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-bold text-slate-700 mb-1">{f.label}</label>
                    <input type="text" placeholder={f.placeholder} value={(address as Record<string, string>)[f.key]} onChange={(e) => setAddress((prev) => ({ ...prev, [f.key]: e.target.value }))} className="block w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E5B220] focus:border-transparent" />
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200">Back</button>
                <button onClick={() => setStep(4)} disabled={!address.fullName || !address.addressLine1 || !address.city || !address.country || !address.postalCode} className="px-5 py-2.5 text-sm font-bold text-[#0F172A] bg-[#E5B220] rounded-xl hover:bg-[#D4A017] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">Continue <ArrowRight size={14} /></button>
              </div>
            </div>
          )}

          {/* Review Step */}
          {step === totalSteps && selectedBinType && (
            <div className="max-w-lg space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Card Line</span><span className="font-bold text-[#0F172A]">{binGroups.find(b => b.type === selectedBinType)?.label}</span></div>
                  <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Type</span><span className="font-bold text-[#0F172A]">{cardType === 'VIRTUAL' ? 'Virtual' : 'Physical'}</span></div>
                  <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Network</span><span className="font-bold text-[#0F172A]">Visa</span></div>
                  <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Wallets</span><span className="font-bold text-[#0F172A]">{binGroups.find(b => b.type === selectedBinType)?.apple ? 'Apple Pay + Google Pay' : 'Google Pay'}</span></div>
                  {isPhysical && address.fullName && (
                    <div className="flex justify-between py-2 border-b border-slate-100"><span className="text-slate-500">Ship To</span><span className="font-bold text-[#0F172A] text-right">{address.fullName}<br /><span className="text-xs text-slate-500 font-normal">{address.addressLine1}, {address.city}</span></span></div>
                  )}
                  <div className="flex justify-between py-2"><span className="text-slate-500">Issuance Fee</span><span className="text-lg font-extrabold text-[#0F172A]">${fee}</span></div>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-sm">
                <strong>Note:</strong> The issuance fee will be deducted from your wallet balance. Ensure you have at least ${fee} available.
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(isPhysical ? 3 : 2)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200">Back</button>
                <button onClick={handleSubmit} disabled={submitting} className="px-6 py-3 text-sm font-bold text-[#0F172A] bg-[#E5B220] rounded-xl hover:bg-[#D4A017] flex items-center justify-center gap-2 disabled:opacity-50">
                  {submitting ? <><Loader2 size={16} className="animate-spin" /> Processing...</> : 'Confirm Order'}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
