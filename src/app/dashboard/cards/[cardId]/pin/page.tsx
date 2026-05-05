'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useCardDetail } from '@/features/cards/hooks/useCardDetail';
import { SetPinForm } from '@/features/cards/components/SetPinForm';
import { cardsService } from '@/features/cards/api';
import { CARD_ROUTES } from '@/features/cards/types';

export default function PinManagementPage() {
  const params = useParams();
  const router = useRouter();
  const cardId = Number(params.cardId);
  const { card, loading, error } = useCardDetail(cardId);
  const [queryLoading, setQueryLoading] = useState(false);
  const [queriedPin, setQueriedPin] = useState<string | null>(null);
  const [showPin, setShowPin] = useState(false);

  // Guard: redirect virtual cards
  if (!loading && card && card.bankCardNature !== 'PHYSICAL') {
    router.replace(CARD_ROUTES.detail(cardId));
    return null;
  }

  const handleSetPin = async (pin: string) => {
    await cardsService.setPin(cardId, pin);
  };

  const handleQueryPin = async () => {
    setQueryLoading(true);
    try {
      const res = await cardsService.getPin(cardId);
      setQueriedPin(res.pin);
      setShowPin(true);
      // Auto-clear after 30s
      setTimeout(() => { setQueriedPin(null); setShowPin(false); }, 30000);
    } catch { /* handled */ } finally { setQueryLoading(false); }
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
        <div><h1 className="text-2xl font-extrabold text-[#0F172A]">PIN Management</h1><p className="text-slate-500 text-sm mt-1">Set or query your physical card PIN.</p></div>
      </div>

      <div className="max-w-lg mx-auto space-y-6">
        <SetPinForm onSubmit={handleSetPin} />

        {/* Query PIN section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-[#0F172A]">Query Current PIN</h3>
          <p className="text-xs text-slate-500">Retrieve your current card PIN. The PIN will be hidden automatically after 30 seconds.</p>
          {queriedPin ? (
            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div>
                <p className="text-xs text-slate-500 mb-1">Current PIN</p>
                <p className="text-2xl font-bold font-mono tracking-[0.5em] text-slate-900">{showPin ? queriedPin : '••••'}</p>
              </div>
              <button onClick={() => setShowPin(!showPin)} className="p-2 rounded-lg hover:bg-slate-200">
                {showPin ? <EyeOff size={18} className="text-slate-500" /> : <Eye size={18} className="text-slate-500" />}
              </button>
            </div>
          ) : (
            <button onClick={handleQueryPin} disabled={queryLoading} className="w-full py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 disabled:opacity-50 flex items-center justify-center gap-2">
              {queryLoading ? <><Loader2 size={16} className="animate-spin" /> Querying...</> : 'Query PIN'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
