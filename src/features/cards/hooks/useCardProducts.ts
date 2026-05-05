'use client';

import { useState, useEffect, useCallback } from 'react';
import { cardsService } from '../api';
import type { CardProduct } from '../types';

interface UseCardProductsReturn {
  products: CardProduct[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCardProducts(): UseCardProductsReturn {
  const [products, setProducts] = useState<CardProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await cardsService.getCardProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load card products.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}
