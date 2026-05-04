// ─── CardsFlow Fee Engine ──────────────────────────────────────────────
// Single source of truth. All values match /trust/fees-and-disclosures.

export const FEES = {
  // Deposits
  DEPOSIT_FEE: 0,
  MIN_DEPOSIT: 60,

  // Card issuance
  VIRTUAL_CARD_FEE: 5,
  PHYSICAL_CARD_FEE: 50,

  // Top-up
  MIN_TOPUP: 25,
  TOPUP_TIERS: [
    { min: 25, max: 1999, rate: 0.07, label: 'Tier 1' },
    { min: 2000, max: 4999, rate: 0.06, label: 'Tier 2' },
    { min: 5000, max: Infinity, rate: 0.05, label: 'Tier 3' },
  ] as const,

  // Other charges
  FX_MARKUP: 0.012,          // +1.2% above interbank
  ATM_FLAT: 2.00,            // $2.00 flat
  ATM_RATE: 0.025,           // + 2.5%
  PREAUTH_FEE: 0.20,         // $0.20 per transaction
  DISPUTE_FEE: 35,            // $35 per case

  // Affiliate
  AFFILIATE_COMMISSION_RATE: 0.01, // 1% lifetime

  // Limits
  MAX_SINGLE_TXN: 20000,
  DAILY_SPEND_LIMIT: 100000,
  MONTHLY_SPEND_LIMIT: 1000000,
  CARDS_PER_ACCOUNT: 3,
  SINGLE_ATM_WITHDRAWAL: 2500,
  DAILY_ATM_WITHDRAWALS: 6,
  MONTHLY_ATM_CAP: 100000,
  CARD_VALIDITY_YEARS: 5,
} as const;

export interface TopUpFeeResult {
  amount: number;
  fee: number;
  rate: number;
  ratePercent: string;
  net: number;
  tierLabel: string;
  totalCharged: number;
}

/**
 * Calculate the top-up fee for a given amount.
 * Returns the fee, the rate, the net amount loaded, and the tier label.
 */
export function calculateTopUpFee(amount: number): TopUpFeeResult {
  if (amount < FEES.MIN_TOPUP) {
    return {
      amount,
      fee: 0,
      rate: 0,
      ratePercent: '0%',
      net: 0,
      tierLabel: `Minimum $${FEES.MIN_TOPUP}`,
      totalCharged: 0,
    };
  }

  const tier = FEES.TOPUP_TIERS.find((t) => amount >= t.min && amount <= t.max);
  if (!tier) {
    // Fallback to highest tier
    const highestTier = FEES.TOPUP_TIERS[FEES.TOPUP_TIERS.length - 1];
    const fee = amount * highestTier.rate;
    return {
      amount,
      fee: Math.round(fee * 100) / 100,
      rate: highestTier.rate,
      ratePercent: `${Math.round(highestTier.rate * 100)}%`,
      net: Math.round((amount - fee) * 100) / 100,
      tierLabel: highestTier.label,
      totalCharged: amount,
    };
  }

  const fee = amount * tier.rate;
  return {
    amount,
    fee: Math.round(fee * 100) / 100,
    rate: tier.rate,
    ratePercent: `${Math.round(tier.rate * 100)}%`,
    net: Math.round((amount - fee) * 100) / 100,
    tierLabel: tier.label,
    totalCharged: amount,
  };
}

/**
 * Get the one-time card issuance fee.
 */
export function getCardIssuanceFee(type: 'VIRTUAL' | 'PHYSICAL'): number {
  return type === 'VIRTUAL' ? FEES.VIRTUAL_CARD_FEE : FEES.PHYSICAL_CARD_FEE;
}

/**
 * Calculate ATM withdrawal fee.
 */
export function calculateATMFee(amount: number): number {
  return Math.round((FEES.ATM_FLAT + amount * FEES.ATM_RATE) * 100) / 100;
}

/**
 * Calculate FX markup fee.
 */
export function calculateFXFee(amount: number): number {
  return Math.round(amount * FEES.FX_MARKUP * 100) / 100;
}

/**
 * Calculate affiliate commission from a top-up fee.
 */
export function calculateAffiliateCommission(topUpFee: number): number {
  return Math.round(topUpFee * FEES.AFFILIATE_COMMISSION_RATE * 100) / 100;
}

/**
 * Format USD amount with proper display.
 */
export function formatUSD(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(num)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}
