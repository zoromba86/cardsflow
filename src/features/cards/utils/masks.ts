// ─── Card Masking & Formatting Utilities ───────────────────────────────

/** Mask a card number, showing only the last 4 digits. */
export function maskCardNumber(cardNo: string): string {
  const cleaned = cardNo.replace(/\s/g, '');
  if (cleaned.length < 4) return '•••• •••• •••• ••••';
  const last4 = cleaned.slice(-4);
  return `•••• •••• •••• ${last4}`;
}

/** Extract the last 4 digits from a card number. */
export function getLastFour(cardNo: string): string {
  const cleaned = cardNo.replace(/\s/g, '');
  return cleaned.slice(-4);
}

/** Format a balance value for display. */
export function formatBalance(balance: string, ccy: string = 'USD'): string {
  const num = parseFloat(balance);
  if (isNaN(num)) return `$0.00`;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: ccy,
    minimumFractionDigits: 2,
  }).format(num);
}
