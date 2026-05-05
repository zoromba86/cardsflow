// ─── Transaction API Response Mapper ───────────────────────────────────

import type { Transaction } from '@/lib/types/dashboard';
import type { CardTransaction } from '../types';

/** Map an API Transaction response to the CardTransaction domain model. */
export function mapApiTransaction(apiTxn: Transaction): CardTransaction {
  return {
    id: apiTxn.id,
    cardId: apiTxn.cardId,
    cardLastFour: apiTxn.cardLastFour,
    amount: apiTxn.amount,
    currency: apiTxn.currency,
    merchant: apiTxn.merchant,
    date: apiTxn.date,
    status: apiTxn.status,
    type: apiTxn.type,
    fxRate: apiTxn.fxRate,
    authorizationCode: apiTxn.authorizationCode,
  };
}
