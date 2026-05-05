'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTransactions } from '@/features/cards/hooks/useTransactions';
import { TransactionList } from '@/features/cards/components/TransactionList';
import { TransactionDetailsDrawer } from '@/features/cards/components/TransactionDetailsDrawer';
import { CARD_ROUTES } from '@/features/cards/types';
import type { CardTransaction } from '@/features/cards/types';

export default function CardTransactionsPage() {
  const params = useParams();
  const cardId = Number(params.cardId);
  const { transactions, loading, error, page, totalPages, setPage, refetch } = useTransactions(cardId);
  const [selectedTxn, setSelectedTxn] = useState<CardTransaction | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link href={CARD_ROUTES.detail(cardId)} className="p-2 rounded-lg hover:bg-slate-200 transition-colors">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">Transactions</h1>
          <p className="text-slate-500 text-sm mt-1">View all transactions for this card.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 space-y-4 animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-9 h-9 bg-slate-200 rounded-xl" />
                <div className="flex-1 space-y-2"><div className="h-4 bg-slate-200 rounded w-1/3" /><div className="h-3 bg-slate-100 rounded w-1/4" /></div>
                <div className="h-4 bg-slate-200 rounded w-16" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-8 text-center">
            <p className="text-sm font-bold text-red-700 mb-2">Failed to load transactions</p>
            <p className="text-xs text-red-600 mb-4">{error}</p>
            <button onClick={refetch} className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700">Try Again</button>
          </div>
        ) : (
          <TransactionList transactions={transactions} onSelect={setSelectedTxn} />
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setPage(page - 1)} disabled={page <= 1} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft size={16} /></button>
          <span className="text-sm font-bold text-slate-700">Page {page} of {totalPages}</span>
          <button onClick={() => setPage(page + 1)} disabled={page >= totalPages} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronRight size={16} /></button>
        </div>
      )}

      <TransactionDetailsDrawer txn={selectedTxn} onClose={() => setSelectedTxn(null)} />
    </div>
  );
}
