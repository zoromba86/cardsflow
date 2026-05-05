// ─── Route Guards for Physical-Only Pages ──────────────────────────────

import type { UserCard } from '../types';
import { CARD_ROUTES } from '../types';

/**
 * Returns a redirect path if the card doesn't support the requested page.
 * Returns null if the user should be allowed to proceed.
 */
export function getPhysicalOnlyRedirect(
  card: UserCard | null | undefined,
  cardId: string
): string | null {
  if (!card) return null; // Let loading/error states handle this
  if (card.bankCardNature === 'PHYSICAL') return null; // Physical card — allow
  return CARD_ROUTES.detail(cardId); // Virtual card — redirect to detail
}
