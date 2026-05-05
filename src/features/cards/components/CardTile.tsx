'use client';

import React from 'react';
import Link from 'next/link';
import type { UserCard } from '../types';
import { CARD_ROUTES } from '../types';
import { CardVisual } from './CardVisual';
import { CardStatusBadge } from './CardStatusBadge';
import { CardTypeBadge } from './CardTypeBadge';
import { formatBalance } from '../utils/masks';
import { needsActivation, isPhysicalCard } from '../utils/capabilities';
import { Package, AlertTriangle } from 'lucide-react';

interface CardTileProps {
  card: UserCard;
}

export function CardTile({ card }: CardTileProps) {
  return (
    <div className="space-y-3">
      <CardVisual card={card} />
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        {/* Balance + Badges */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-slate-500">Balance</p>
            <p className="text-lg font-extrabold text-[#0F172A] tabular-nums">
              {formatBalance(card.balance, card.ccy)}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <CardTypeBadge kind={card.bankCardNature} />
            <CardStatusBadge status={card.status} />
          </div>
        </div>

        {/* Physical card alerts */}
        {needsActivation(card) && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-xs font-semibold text-amber-700">
            <AlertTriangle size={14} />
            Activation required
          </div>
        )}

        {isPhysicalCard(card) && card.delivery && card.delivery.status !== 'delivered' && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold text-blue-700">
            <Package size={14} />
            {card.delivery.status === 'pending' ? 'Preparing for shipment' : 'Card is on its way'}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Link
            href={CARD_ROUTES.detail(card.userBankcardId)}
            className="flex-1 text-center text-xs font-bold bg-[#0F172A] text-white rounded-lg py-2 hover:bg-[#1E293B] transition-colors"
          >
            View Details
          </Link>
          {card.status === 'active' && (
            <Link
              href={`/dashboard/cards/${card.userBankcardId}/transactions`}
              className="flex-1 text-center text-xs font-bold bg-slate-100 text-slate-700 rounded-lg py-2 hover:bg-slate-200 transition-colors"
            >
              Transactions
            </Link>
          )}
          {needsActivation(card) && (
            <Link
              href={CARD_ROUTES.activate(card.userBankcardId)}
              className="flex-1 text-center text-xs font-bold bg-[#E5B220] text-[#0F172A] rounded-lg py-2 hover:bg-[#D4A017] transition-colors"
            >
              Activate
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
