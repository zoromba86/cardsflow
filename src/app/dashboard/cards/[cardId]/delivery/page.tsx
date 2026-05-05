'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useCardDetail } from '@/features/cards/hooks/useCardDetail';
import { DeliveryStatusTimeline } from '@/features/cards/components/DeliveryStatusTimeline';
import { CARD_ROUTES } from '@/features/cards/types';

export default function CardDeliveryPage() {
  const params = useParams();
  const router = useRouter();
  const cardId = Number(params.cardId);
  const { card, loading, error } = useCardDetail(cardId);

  // Guard: redirect virtual cards
  if (!loading && card && card.bankCardNature !== 'PHYSICAL') {
    router.replace(CARD_ROUTES.detail(cardId));
    return null;
  }

  if (loading) {
    return <div className="space-y-6 animate-pulse"><div className="h-8 bg-slate-200 rounded w-1/3" /><div className="bg-slate-100 rounded-2xl h-48" /></div>;
  }

  if (error || !card) {
    return <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"><p className="text-sm font-bold text-red-700">{error || 'Card not found.'}</p></div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.detail(cardId)} className="p-2 rounded-lg hover:bg-slate-200 transition-colors"><ArrowLeft size={18} className="text-slate-600" /></Link>
        <div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">Delivery Information</h1>
          <p className="text-slate-500 text-sm mt-1">Track the delivery of your physical card.</p>
        </div>
      </div>

      {card.delivery ? (
        <DeliveryStatusTimeline
          status={card.delivery.status}
          trackingNumber={card.delivery.trackingNumber}
          estimatedDelivery={card.delivery.estimatedDelivery}
          shippedAt={card.delivery.shippedAt}
          deliveredAt={card.delivery.deliveredAt}
        />
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-sm text-slate-500">Delivery information is not yet available for this card.</p>
        </div>
      )}
    </div>
  );
}
