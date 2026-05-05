// ─── Card Feature Domain Types ─────────────────────────────────────────

// ── Card Kind & Status ─────────────────────────────────────────────────

export type CardKind = 'VIRTUAL' | 'PHYSICAL';

export type CardStatus = 'active' | 'frozen' | 'cancelled' | 'inactive';

export type CardBinType = 'onyx' | 'volt';

// ── Capabilities ───────────────────────────────────────────────────────

export type CardCapability =
  | 'view_details'
  | 'view_balance'
  | 'top_up'
  | 'unload'
  | 'freeze'
  | 'unfreeze'
  | 'cancel'
  | 'view_transactions'
  | 'three_ds'
  | 'update_email'
  | 'delivery'
  | 'activate'
  | 'set_pin'
  | 'query_pin';

// ── Card Product ───────────────────────────────────────────────────────

export interface CardProduct {
  id: number;
  bankCardNature: CardKind;
  title: string;
  ccy: string;
  applyFee: string;
  cardBin: string;
  rechargeFee: string;
  bankcardRegion: string;
  activeMinLimit: string;
  rechargeMinLimit: string;
  binType?: CardBinType;
  supportsApplePay?: boolean;
  supportsGooglePay?: boolean;
}

// ── User Card ──────────────────────────────────────────────────────────

export interface UserCard {
  userBankcardId: number;
  cardNo: string;
  bankCardNature: CardKind;
  status: CardStatus;
  balance: string;
  ccy: string;
  cardBin: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
  binType: CardBinType;
  maskedNumber: string;
  lastFour: string;
  capabilities: CardCapability[];
  supportsApplePay: boolean;
  supportsGooglePay: boolean;
  delivery?: PhysicalCardDelivery;
}

// ── Physical Card Delivery ─────────────────────────────────────────────

export type DeliveryStatus = 'pending' | 'shipped' | 'delivered';

export interface PhysicalCardDelivery {
  addressId: number;
  status: DeliveryStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
  shippedAt?: string;
  deliveredAt?: string;
}

// ── Delivery Address ───────────────────────────────────────────────────

export interface DeliveryAddress {
  id: number;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  country: string;
  postalCode: string;
  phone?: string;
}

// ── Transactions ───────────────────────────────────────────────────────

export type TransactionStatus = 'completed' | 'pending' | 'declined' | 'refunded' | 'reversed';
export type TransactionType = 'purchase' | 'refund' | 'reversal' | 'topup' | 'withdrawal';

export interface CardTransaction {
  id: string;
  cardId: number;
  cardLastFour: string;
  amount: string;
  currency: string;
  merchant: string;
  date: string;
  status: TransactionStatus;
  type: TransactionType;
  fxRate?: string;
  authorizationCode?: string;
}

// ── API Response Helpers ───────────────────────────────────────────────

export interface PaginatedTransactions {
  items: CardTransaction[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ── Route Constants ────────────────────────────────────────────────────

export const CARD_ROUTES = {
  list: '/dashboard/cards',
  apply: '/dashboard/cards/apply',
  detail: (id: string | number) => `/dashboard/cards/${id}`,
  transactions: (id: string | number) => `/dashboard/cards/${id}/transactions`,
  delivery: (id: string | number) => `/dashboard/cards/${id}/delivery`,
  activate: (id: string | number) => `/dashboard/cards/${id}/activate`,
  pin: (id: string | number) => `/dashboard/cards/${id}/pin`,
} as const;
