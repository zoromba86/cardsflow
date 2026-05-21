// ─── CardsFlow Dashboard Types ─────────────────────────────────────────

// ── Auth ───────────────────────────────────────────────────────────────

export interface User {
  uid: number;
  email: string;
  username: string;
  accountType: 'customer' | 'admin';
  emailVerified: boolean;
  createdAt: string;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  uid: number;
}



// ── Cards ──────────────────────────────────────────────────────────────

export type CardNature = 'VIRTUAL' | 'PHYSICAL';
export type CardStatus = 'active' | 'frozen' | 'cancelled' | 'inactive';
export type CardBinType = 'onyx' | 'volt';

export interface CardProduct {
  id: number;
  bankCardNature: CardNature;
  title: string;
  ccy: string;
  applyFee: string;
  cardBin: string;
  rechargeFee: string;
  bankcardRegion: string;
  activeMinLimit: string;
  rechargeMinLimit: string;
  // Frontend-enriched fields
  binType?: CardBinType;
  supportsApplePay?: boolean;
  supportsGooglePay?: boolean;
}

export interface Card {
  userBankcardId: number;
  bankCardNature: CardNature;
  status: CardStatus;
  balance: string;
  ccy: string;
  cardBin: string;
  expiryDate?: string;
  // Frontend-enriched
  binType: CardBinType;
  supportsApplePay: boolean;
  supportsGooglePay: boolean;
  maskedNumber: string;
  lastFour: string;
}

export interface CardApplyRequest {
  productId: number;
  deliveryAddressId?: number;
}

export interface CardApplyResponse {
  userBankcardId: number;
  cardNo: string;
  orderNo: string;
}

export interface CardTopUpRequest {
  userBankcardId: number;
  amount: number;
}

export interface CardPinRequest {
  userBankcardId: number;
  pin: string;
}

// ── Transactions ───────────────────────────────────────────────────────

export type TransactionStatus = 'completed' | 'pending' | 'declined' | 'refunded' | 'reversed';
export type TransactionType = 'purchase' | 'refund' | 'reversal' | 'topup' | 'withdrawal';

export interface Transaction {
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

// ── Deposits ───────────────────────────────────────────────────────────

export type DepositStatus = 'waiting' | 'confirming' | 'confirmed' | 'sending' | 'finished' | 'failed' | 'expired';

export interface Deposit {
  id: string;
  amount: string;
  amountCrypto: string;
  cryptoCurrency: string;
  payAddress: string;
  status: DepositStatus;
  createdAt: string;
  txnHash?: string;
}

export interface CreateDepositRequest {
  amount: number;
  payCurrency: string;
}

// ── Withdrawals ────────────────────────────────────────────────────────

export type WithdrawalStatus = 'pending' | 'processing' | 'completed' | 'rejected';

export interface Withdrawal {
  id: string;
  fullName: string;
  walletAddress: string;
  amount: string;
  reason: string;
  status: WithdrawalStatus;
  createdAt: string;
  processedAt?: string;
}

export interface WithdrawalRequest {
  fullName: string;
  walletAddress: string;
  amount: number;
  reason: string;
}

// ── Affiliate ──────────────────────────────────────────────────────────

export interface AffiliateStats {
  referralLink: string;
  totalSignups: number;
  activeReferrals: number;
  totalCommissions: string;
  pendingPayout: string;
}

export interface CommissionEntry {
  id: string;
  referredEmail: string;
  topUpAmount: string;
  feeCharged: string;
  commission: string;
  date: string;
}

// ── Delivery ───────────────────────────────────────────────────────────

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

// ── API Response Wrappers ──────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ── Dashboard Stats ────────────────────────────────────────────────────

export interface DashboardStats {
  totalBalance: string;
  activeCards: number;
  pendingDeposits: number;
  monthlySpend: string;
}

// ── Wallet ─────────────────────────────────────────────────────────────

export interface WalletBalance {
  available: string;
  pending: string;
  currency: string;
}
