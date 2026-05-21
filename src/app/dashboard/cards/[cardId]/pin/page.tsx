'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Info } from 'lucide-react';
import { useCardDetail } from '@/features/cards/hooks/useCardDetail';
import { SetPinForm } from '@/features/cards/components/SetPinForm';
import { cardsService } from '@/features/cards/api';
import { CARD_ROUTES } from '@/features/cards/types';

export default function PinManagementPage() {
  const params = useParams();
  const router = useRouter();
  const cardId = Number(params.cardId);
  const { card, loading, error } = useCardDetail(cardId);

  // Guard: redirect virtual cards
  if (!loading && card && card.bankCardNature !== 'PHYSICAL') {
    router.replace(CARD_ROUTES.detail(cardId));
    return null;
  }

  const handleSetPin = async (pin: string) => {
    await cardsService.setPin(cardId, pin);
  };

  if (loading) {
    return <div className="space-y-6 animate-pulse"><div className="h-8 bg-slate-200 rounded w-1/3" /><div className="bg-slate-100 rounded-2xl h-48" /></div>;
  }

  if (error || !card) {
    return <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"><p className="text-sm font-bold text-red-700">{error || 'Card not found.'}</p></div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.detail(cardId)} className="p-2 rounded-lg hover:bg-slate-200"><ArrowLeft size={18} className="text-slate-600" /></Link>
        <div><h1 className="text-2xl font-extrabold text-[#0F172A]">PIN Management</h1><p className="text-slate-500 text-sm mt-1">Set the 4-digit PIN for your physical card.</p></div>
      </div>

      <div className="max-w-lg mx-auto space-y-6">
        <SetPinForm onSubmit={handleSetPin} />

        {/* Why we don't display the existing PIN */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck size={16} className="text-slate-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Forgot your PIN?</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                For PCI-DSS compliance we never display your current PIN inside this dashboard. If you have forgotten it, set a new one above &mdash; this fully replaces the previous PIN.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 rounded-xl p-3 border border-slate-100">
          <Info size={14} className="mt-0.5 shrink-0 text-slate-400" />
          <span>PIN changes can take up to a few minutes to sync with the card network.</span>
        </div>
      </div>
    </div>
  );
}
