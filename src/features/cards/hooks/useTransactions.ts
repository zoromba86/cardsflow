'use client';

import { useState, useEffect, useCallback } from 'react';
import { cardsService } from '../api';
import { mapApiTransaction } from '../mappers/transactionMapper';
import type { CardTransaction } from '../types';

interface UseTransactionsReturn {
  transactions: CardTransaction[];
  total: number;
  page: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  setPage: (page: number) => void;
  refetch: () => void;
}

export function useTransactions(cardId: number, pageSize: number = 20): UseTransactionsReturn {
  const [transactions, setTransactions] = useState<CardTransaction[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    if (!cardId) return;
    setLoading(true);
    setError(null);
    try {
      const res = await cardsService.getTransactions(cardId, page, pageSize);
      setTransactions(res.items.map(mapApiTransaction));
      setTotal(res.total);
      setTotalPages(res.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load transactions.');
    } finally {
      setLoading(false);
    }
  }, [cardId, page, pageSize]);

  useEffect(() => { fetchTransactions(); }, [fetchTransactions]);

  return { transactions, total, page, totalPages, loading, error, setPage, refetch: fetchTransactions };
}
