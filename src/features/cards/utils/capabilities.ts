// ─── Card Capability Utilities ─────────────────────────────────────────

import type { CardKind, CardCapability, UserCard } from '../types';

const VIRTUAL_CAPABILITIES: CardCapability[] = [
  'view_details',
  'view_balance',
  'top_up',
  'freeze',
  'unfreeze',
  'cancel',
  'view_transactions',
  'three_ds',
  'update_email',
];

const PHYSICAL_CAPABILITIES: CardCapability[] = [
  ...VIRTUAL_CAPABILITIES,
  'delivery',
  'activate',
  'set_pin',
];

/** Returns the default capability set for a card kind. */
export function getDefaultCapabilities(kind: CardKind): CardCapability[] {
  return kind === 'PHYSICAL' ? [...PHYSICAL_CAPABILITIES] : [...VIRTUAL_CAPABILITIES];
}

/** Check if a card has a specific capability. */
export function cardCan(card: UserCard, capability: CardCapability): boolean {
  return card.capabilities.includes(capability);
}

/** Check if a card is a physical card. */
export function isPhysicalCard(card: UserCard): boolean {
  return card.bankCardNature === 'PHYSICAL';
}

/** Check if a physical card needs activation. */
export function needsActivation(card: UserCard): boolean {
  return isPhysicalCard(card) && card.status === 'inactive';
}

/** Check if a card is actionable (not cancelled). */
export function isActionable(card: UserCard): boolean {
  return card.status !== 'cancelled';
}
