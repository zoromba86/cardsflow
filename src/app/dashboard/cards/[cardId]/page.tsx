'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Eye, EyeOff, Copy, Check, Lock, CreditCard, Snowflake, Trash2, Mail, Package, ShieldCheck } from 'lucide-react';
import { useCardDetail } from '@/features/cards/hooks/useCardDetail';
import { CardVisual } from '@/features/cards/components/CardVisual';
import { BalanceWidget } from '@/features/cards/components/BalanceWidget';
import { TopUpModal } from '@/features/cards/components/TopUpModal';
import { ConfirmActionDialog } from '@/features/cards/components/ConfirmActionDialog';
import { DeliveryStatusTimeline } from '@/features/cards/components/DeliveryStatusTimeline';
import { CardStatusBadge } from '@/features/cards/components/CardStatusBadge';
import { CardTypeBadge } from '@/features/cards/components/CardTypeBadge';
import { cardCan, isPhysicalCard, needsActivation } from '@/features/cards/utils/capabilities';
import { formatCardNumber } from '@/features/cards/utils/masks';
import { cardsService } from '@/features/cards/api';
import { CARD_ROUTES } from '@/features/cards/types';

export default function CardDetailPage() {
  const params = useParams();
  const cardId = Number(params.cardId);
  const { card, loading, error, refetch } = useCardDetail(cardId);

  const [showNumber, setShowNumber] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [copied, setCopied] = useState('');
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [freezeOpen, setFreezeOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  // Auto-hide reveals after 60s
  useEffect(() => {
    if (showNumber || showCvv) {
      const t = setTimeout(() => { setShowNumber(false); setShowCvv(false); }, 60000);
      return () => clearTimeout(t);
    }
  }, [showNumber, showCvv]);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''));
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleFreeze = async () => {
    if (!card) return;
    setActionLoading(true);
    try {
      const newStatus = card.status === 'frozen' ? 'active' : 'frozen';
      await cardsService.updateCardStatus(card.userBankcardId, newStatus);
      refetch();
      setFreezeOpen(false);
    } catch { /* handled */ } finally { setActionLoading(false); }
  };

  const handleCancel = async () => {
    if (!card) return;
    setActionLoading(true);
    try {
      await cardsService.cancelCard(card.userBankcardId);
      refetch();
      setCancelOpen(false);
    } catch { /* handled */ } finally { setActionLoading(false); }
  };

  const handleTopUp = async (amount: number) => {
    if (!card) return;
    await cardsService.topUpCard(card.userBankcardId, amount);
    refetch();
  };

  // Loading
  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-8 bg-slate-200 rounded w-1/3" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6"><div className="bg-slate-200 rounded-2xl aspect-[1.6/1]" /><div className="bg-slate-100 rounded-2xl h-48" /></div>
          <div className="space-y-6"><div className="bg-slate-100 rounded-2xl h-48" /><div className="bg-slate-100 rounded-2xl h-40" /></div>
        </div>
      </div>
    );
  }

  // Error
  if (error || !card) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <p className="text-sm font-bold text-red-700 mb-2">Failed to load card</p>
        <p className="text-xs text-red-600 mb-4">{error || 'Card not found.'}</p>
        <button onClick={refetch} className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700">Try Again</button>
      </div>
    );
  }

  const isFrozen = card.status === 'frozen';
  const isCancelled = card.status === 'cancelled';
  const physical = isPhysicalCard(card);
  const canAct = !isCancelled;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.list} className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              CardsFlow {card.binType === 'onyx' ? 'Onyx' : 'Volt'} •••{card.lastFour}
            </h1>
            <CardTypeBadge kind={card.bankCardNature} />
            <CardStatusBadge status={card.status} />
          </div>
        </div>
      </div>

      {/* Activation banner for physical cards */}
      {needsActivation(card) && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-amber-600" />
            <div>
              <p className="text-sm font-bold text-amber-900">Your physical card has arrived. Activate it to start making purchases.</p>
              <p className="text-xs text-amber-700 mt-0.5">Activation is required before your card can be used.</p>
            </div>
          </div>
          <Link href={CARD_ROUTES.activate(card.userBankcardId)} className="px-5 py-2.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] whitespace-nowrap">
            Activate Card
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <CardVisual card={card} showFullNumber={showNumber} />

          {/* Card details reveal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Card Details</h3>
            <div className="space-y-3">
              {[
                { label: 'Card Number', value: formatCardNumber(card.cardNo || ''), masked: card.maskedNumber, show: showNumber, toggle: () => setShowNumber(!showNumber), field: 'number' },
                { label: 'CVV', value: card.cvv || '—', masked: '•••', show: showCvv, toggle: () => setShowCvv(!showCvv), field: 'cvv' },
                { label: 'Expiry', value: card.expiryDate || '—', masked: card.expiryDate || '—', show: true, toggle: () => {}, field: 'expiry' },
                { label: 'Cardholder', value: card.cardholderName || '—', masked: card.cardholderName || '—', show: true, toggle: () => {}, field: 'holder' },
              ].map((item) => (
                <div key={item.field} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm font-bold text-[#0F172A] font-mono tabular-nums">{item.show ? item.value : item.masked}</p>
                  </div>
                  {(item.field === 'number' || item.field === 'cvv') && (
                    <div className="flex items-center gap-2">
                      <button onClick={item.toggle} className="p-2 rounded-lg hover:bg-slate-100" aria-label={item.show ? `Hide ${item.label}` : `Reveal ${item.label}`} aria-pressed={item.show}>
                        {item.show ? <EyeOff size={16} className="text-slate-500" /> : <Eye size={16} className="text-slate-500" />}
                      </button>
                      {item.show && (
                        <button onClick={() => copyToClipboard(item.value, item.field)} className="p-2 rounded-lg hover:bg-slate-100" aria-label={`Copy ${item.label}`}>
                          {copied === item.field ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-slate-500" />}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery section — physical only */}
          {physical && cardCan(card, 'delivery') && card.delivery && (
            <DeliveryStatusTimeline
              status={card.delivery.status}
              trackingNumber={card.delivery.trackingNumber}
              estimatedDelivery={card.delivery.estimatedDelivery}
              shippedAt={card.delivery.shippedAt}
              deliveredAt={card.delivery.deliveredAt}
            />
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <BalanceWidget
            balance={card.balance}
            ccy={card.ccy}
            disabled={!canAct || isFrozen}
            onTopUp={() => setTopUpOpen(true)}
          />

          {/* Card management */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] mb-3">Card Management</h3>
            <div className="space-y-2">
              <Link href={CARD_ROUTES.transactions(card.userBankcardId)} className="w-full text-left px-4 py-3 text-sm font-medium text-[#0F172A] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                <CreditCard size={14} className="text-slate-500" /> View Transactions
              </Link>

              {/* Physical card actions */}
              {physical && cardCan(card, 'set_pin') && card.status === 'active' && (
                <Link href={CARD_ROUTES.pin(card.userBankcardId)} className="w-full text-left px-4 py-3 text-sm font-medium text-[#0F172A] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                  <Lock size={14} className="text-slate-500" /> PIN Management
                </Link>
              )}

              {physical && cardCan(card, 'delivery') && (
                <Link href={CARD_ROUTES.delivery(card.userBankcardId)} className="w-full text-left px-4 py-3 text-sm font-medium text-[#0F172A] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                  <Package size={14} className="text-slate-500" /> Delivery Info
                </Link>
              )}

              {canAct && cardCan(card, isFrozen ? 'unfreeze' : 'freeze') && (
                <button onClick={() => setFreezeOpen(true)} className="w-full text-left px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors flex items-center gap-3">
                  <Snowflake size={14} /> {isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                </button>
              )}

              {canAct && cardCan(card, 'update_email') && (
                <button className="w-full text-left px-4 py-3 text-sm font-medium text-[#0F172A] bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-3">
                  <Mail size={14} className="text-slate-500" /> Update Card Email
                </button>
              )}

              {canAct && cardCan(card, 'cancel') && (
                <button onClick={() => setCancelOpen(true)} className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center gap-3">
                  <Trash2 size={14} /> Cancel Card
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TopUpModal open={topUpOpen} balance={card.balance} ccy={card.ccy} onConfirm={handleTopUp} onClose={() => setTopUpOpen(false)} />

      <ConfirmActionDialog
        open={freezeOpen}
        title={isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
        description={isFrozen ? 'This will reactivate your card for transactions.' : 'Are you sure you want to freeze this card? All pending transactions will be declined.'}
        confirmLabel={isFrozen ? 'Unfreeze' : 'Freeze'}
        variant="warning"
        loading={actionLoading}
        onConfirm={handleFreeze}
        onCancel={() => setFreezeOpen(false)}
      />

      <ConfirmActionDialog
        open={cancelOpen}
        title="Cancel Card"
        description="Cancelling this card is permanent and cannot be undone. Any remaining balance will be returned to your wallet."
        confirmLabel="Cancel Card"
        variant="danger"
        loading={actionLoading}
        onConfirm={handleCancel}
        onCancel={() => setCancelOpen(false)}
      />
    </div>
  );
}
