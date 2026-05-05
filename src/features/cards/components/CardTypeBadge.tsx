'use client';

import React from 'react';
import type { CardKind } from '../types';
import { Monitor, CreditCard } from 'lucide-react';

interface CardTypeBadgeProps {
  kind: CardKind;
}

export function CardTypeBadge({ kind }: CardTypeBadgeProps) {
  const isVirtual = kind === 'VIRTUAL';

  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
        isVirtual
          ? 'bg-purple-50 text-purple-600 border-purple-200'
          : 'bg-slate-100 text-slate-700 border-slate-300'
      }`}
    >
      {isVirtual ? <Monitor size={10} /> : <CreditCard size={10} />}
      {isVirtual ? 'Virtual' : 'Physical'}
    </span>
  );
}
