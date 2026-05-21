// ─── Card API Response Mapper ──────────────────────────────────────────

import type { Card } from '@/lib/types/dashboard';
import type { UserCard, CardBinType } from '../types';
import { getDefaultCapabilities } from '../utils/capabilities';

/** Resolve a BIN type from the card's cardBin field. */
function resolveBinType(cardBin: string): CardBinType {
  // Simple heuristic — can be extended based on actual BIN ranges
  if (cardBin.startsWith('4096') || cardBin.startsWith('5234')) return 'onyx';
  return 'volt';
}

/** Map an API Card response to the enriched UserCard domain model. */
export function mapApiCardToUserCard(apiCard: Card): UserCard {
  const binType = apiCard.binType || resolveBinType(apiCard.cardBin);

  return {
    userBankcardId: apiCard.userBankcardId,
    bankCardNature: apiCard.bankCardNature,
    status: apiCard.status,
    balance: apiCard.balance,
    ccy: apiCard.ccy,
    cardBin: apiCard.cardBin,
    expiryDate: apiCard.expiryDate,
    binType,
    maskedNumber: apiCard.maskedNumber,
    lastFour: apiCard.lastFour,
    capabilities: getDefaultCapabilities(apiCard.bankCardNature),
    supportsApplePay: apiCard.supportsApplePay ?? (binType === 'onyx'),
    supportsGooglePay: apiCard.supportsGooglePay ?? true,
    delivery: undefined, // Populated separately for physical cards
  };
}
