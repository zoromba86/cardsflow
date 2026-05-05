'use client';

import React from 'react';
import type { CardStatus } from '../types';

interface CardStatusBadgeProps {
  status: CardStatus;
  variant?: 'default' | 'card';
}

const styles: Record<CardStatus, { bg: string; text: string; border: string; cardBg: string; cardText: string }> = {
  active: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    cardBg: 'bg-emerald-400/20',
    cardText: 'text-emerald-300',
  },
  frozen: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    cardBg: 'bg-blue-400/30',
    cardText: 'text-blue-200',
  },
  inactive: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    cardBg: 'bg-amber-400/20',
    cardText: 'text-amber-300',
  },
  cancelled: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
    cardBg: 'bg-red-400/20',
    cardText: 'text-red-300',
  },
};

export function CardStatusBadge({ status, variant = 'default' }: CardStatusBadgeProps) {
  const s = styles[status];

  if (variant === 'card') {
    return (
      <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${s.cardBg} ${s.cardText}`} role="status">
        {status}
      </span>
    );
  }

  return (
    <span
      className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}
      role="status"
    >
      {status}
    </span>
  );
}
