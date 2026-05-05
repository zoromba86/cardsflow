'use client';

import { useState, useEffect, useCallback } from 'react';
import { cardsService } from '../api';
import { mapApiCardToUserCard } from '../mappers/cardMapper';
import type { UserCard } from '../types';

interface UseCardDetailReturn {
  card: UserCard | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCardDetail(cardId: number): UseCardDetailReturn {
  const [card, setCard] = useState<UserCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCard = useCallback(async () => {
    if (!cardId) return;
    setLoading(true);
    setError(null);
    try {
      const apiCard = await cardsService.getCardInfo(cardId);
      setCard(mapApiCardToUserCard(apiCard));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load card details.');
    } finally {
      setLoading(false);
    }
  }, [cardId]);

  useEffect(() => { fetchCard(); }, [fetchCard]);

  return { card, loading, error, refetch: fetchCard };
}
