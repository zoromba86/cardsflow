'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, CreditCard, Monitor } from 'lucide-react';
import { useCardList } from '@/features/cards/hooks/useCardList';
import { CardTile } from '@/features/cards/components/CardTile';
import type { CardKind } from '@/features/cards/types';
import { CARD_ROUTES } from '@/features/cards/types';

type FilterTab = 'all' | 'VIRTUAL' | 'PHYSICAL';

export default function CardsPage() {
  const { cards, loading, error, refetch } = useCardList();
  const [filter, setFilter] = useState<FilterTab>('all');

  const filteredCards = filter === 'all' ? cards : cards.filter((c) => c.bankCardNature === filter);

  const tabs: { key: FilterTab; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Cards', icon: <CreditCard size={14} /> },
    { key: 'VIRTUAL', label: 'Virtual', icon: <Monitor size={14} /> },
    { key: 'PHYSICAL', label: 'Physical', icon: <CreditCard size={14} /> },
  ];

  return (
    <div className="relative min-h-[80vh] space-y-8">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/5 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-500/5 blur-[100px] mix-blend-multiply" />
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Cards</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your virtual and physical Visa cards.</p>
        </div>
        <Link
          href={CARD_ROUTES.apply}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors self-start"
        >
          <Plus size={16} /> Order New Card
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors border-b-2 -mb-[1px] ${
              filter === tab.key
                ? 'border-[#E5B220] text-[#0F172A] bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            {tab.label}
            {filter === tab.key && (
              <span className="ml-1 text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-bold">
                {filteredCards.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="bg-slate-200 rounded-2xl aspect-[1.6/1]" />
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="h-5 bg-slate-200 rounded w-1/3" />
                <div className="h-4 bg-slate-100 rounded w-1/2" />
                <div className="flex gap-2">
                  <div className="h-8 bg-slate-100 rounded-lg flex-1" />
                  <div className="h-8 bg-slate-100 rounded-lg flex-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-sm font-bold text-red-700 mb-2">Something went wrong</p>
          <p className="text-xs text-red-600 mb-4">{error}</p>
          <button onClick={refetch} className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors">
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredCards.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard size={32} className="text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {filter === 'all' ? "You don't have any cards yet" : `No ${filter.toLowerCase()} cards`}
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
            Order your first CardsFlow Visa card to get started with instant payments and card management.
          </p>
          <Link
            href={CARD_ROUTES.apply}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors"
          >
            <Plus size={16} /> Order Your First Card
          </Link>
        </div>
      )}

      {/* Card Grid */}
      {!loading && !error && filteredCards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((card) => (
            <CardTile key={card.userBankcardId} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
