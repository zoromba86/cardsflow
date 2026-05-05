'use client';

import { useState, useEffect, useCallback } from 'react';
import { cardsService } from '../api';
import { mapApiCardToUserCard } from '../mappers/cardMapper';
import type { UserCard } from '../types';

interface UseCardListReturn {
  cards: UserCard[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCardList(): UseCardListReturn {
  const [cards, setCards] = useState<UserCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const apiCards = await cardsService.getUserCards();
      setCards(apiCards.map(mapApiCardToUserCard));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load cards.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchCards(); }, [fetchCards]);

  return { cards, loading, error, refetch: fetchCards };
}
