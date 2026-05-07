'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Loader2, Check } from 'lucide-react';
import { useCardDetail } from '@/features/cards/hooks/useCardDetail';
import { cardsService } from '@/features/cards/api';
import { CARD_ROUTES } from '@/features/cards/types';

export default function ActivateCardPage() {
  const params = useParams();
  const router = useRouter();
  const cardId = Number(params.cardId);
  const { card, loading, error } = useCardDetail(cardId);
  const [activating, setActivating] = useState(false);
  const [success, setSuccess] = useState(false);

  // Guard: redirect virtual cards
  if (!loading && card && card.bankCardNature !== 'PHYSICAL') {
    router.replace(CARD_ROUTES.detail(cardId));
    return null;
  }

  const handleActivate = async () => {
    setActivating(true);
    try {
      await cardsService.activateCard(cardId);
      setSuccess(true);
      setTimeout(() => router.push(CARD_ROUTES.detail(cardId)), 3000);
    } catch { setActivating(false); }
  };

  if (loading) {
    return <div className="space-y-6 animate-pulse"><div className="h-8 bg-slate-200 rounded w-1/3" /><div className="bg-slate-100 rounded-2xl h-48" /></div>;
  }

  if (error || !card) {
    return <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"><p className="text-sm font-bold text-red-700">{error || 'Card not found.'}</p></div>;
  }

  if (card.status !== 'inactive') {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Link href={CARD_ROUTES.detail(cardId)} className="p-2 rounded-lg hover:bg-slate-200"><ArrowLeft size={18} className="text-slate-600" /></Link>
          <h1 className="text-2xl font-extrabold text-[#0F172A]">Activate Card</h1>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <Check size={32} className="text-emerald-600 mx-auto mb-3" />
          <p className="text-sm font-bold text-emerald-800">This card is already activated.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.detail(cardId)} className="p-2 rounded-lg hover:bg-slate-200"><ArrowLeft size={18} className="text-slate-600" /></Link>
        <div><h1 className="text-2xl font-extrabold text-[#0F172A]">Activate Card</h1><p className="text-slate-500 text-sm mt-1">Activate your physical card to start making purchases.</p></div>
      </div>

      <div className="max-w-lg mx-auto">
        {success ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={40} className="text-emerald-600" /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Card Activated</h2>
            <p className="text-sm text-slate-500">Your card is now ready to use. Redirecting...</p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center"><ShieldCheck size={28} className="text-amber-600" /></div>
              <div><h3 className="text-lg font-bold text-slate-900">Ready to Activate</h3><p className="text-sm text-slate-500">Confirm activation of your CardsFlow {card.binType === 'onyx' ? 'Onyx' : 'Volt'} •••{card.lastFour}</p></div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Card</span><span className="font-bold text-slate-900">{card.maskedNumber}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="font-bold text-slate-900">Physical</span></div>
            </div>
            <button onClick={handleActivate} disabled={activating} className="w-full py-3 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] disabled:opacity-50 flex items-center justify-center gap-2">
              {activating ? <><Loader2 size={18} className="animate-spin" /> Activating...</> : 'Activate Card'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
