// ─── NOWPayments API Service ───────────────────────────────────────────
// Integration with NOWPayments for 100+ cryptocurrency deposits.

import apiClient from './client';
import type { Deposit } from '@/lib/types/dashboard';

export const paymentsService = {
  /** Create a crypto payment invoice */
  async createPayment(amount: number, payCurrency: string, orderId?: string): Promise<{
    paymentId: string;
    payAddress: string;
    payAmount: string;
    payCurrency: string;
    expiresAt: string;
  }> {
    const res = await apiClient.post<{
      paymentId: string;
      payAddress: string;
      payAmount: string;
      payCurrency: string;
      expiresAt: string;
    }>('/payments/create', { amount, payCurrency, orderId });
    return res.data;
  },

  /** Check payment status */
  async getPaymentStatus(paymentId: string): Promise<Deposit> {
    const res = await apiClient.post<Deposit>('/payments/status', { paymentId });
    return res.data;
  },

  /** Get available cryptocurrencies */
  async getAvailableCurrencies(): Promise<string[]> {
    const res = await apiClient.get<string[]>('/payments/currencies');
    return res.data;
  },

  /** Get minimum payment amount for a currency */
  async getMinPaymentAmount(currency: string): Promise<{ minAmount: string }> {
    const res = await apiClient.get<{ minAmount: string }>(`/payments/min-amount?currency=${currency}`);
    return res.data;
  },

  /** Get estimated exchange rate */
  async getEstimatedPrice(amount: number, fromCurrency: string, toCurrency: string): Promise<{ estimatedAmount: string }> {
    const res = await apiClient.get<{ estimatedAmount: string }>(
      `/payments/estimate?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );
    return res.data;
  },
};

export default paymentsService;
