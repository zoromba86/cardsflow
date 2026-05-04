// ─── Card Supplier API Service ─────────────────────────────────────────
// Maps to the Apifox card-supplier-api-en endpoints.
// All endpoints require RSA signing on the backend side.

import apiClient from './client';
import type { Card, CardProduct, CardApplyResponse, Transaction, PaginatedResponse } from '@/lib/types/dashboard';

export const cardsService = {
  /** Get available card products (BINs) */
  async getCardProducts(): Promise<CardProduct[]> {
    const res = await apiClient.post<CardProduct[]>('/cards/products');
    return res.data;
  },

  /** Get user's card list */
  async getUserCards(): Promise<Card[]> {
    const res = await apiClient.post<Card[]>('/cards/list');
    return res.data;
  },

  /** Apply for a new card */
  async applyCard(productId: number, deliveryAddressId?: number): Promise<CardApplyResponse> {
    const res = await apiClient.post<CardApplyResponse>('/cards/apply', { productId, deliveryAddressId });
    return res.data;
  },

  /** Activate a card */
  async activateCard(userBankcardId: number): Promise<void> {
    await apiClient.post('/cards/activate', { userBankcardId });
  },

  /** Get full card info (number, CVV, expiry) */
  async getCardInfo(userBankcardId: number): Promise<Card> {
    const res = await apiClient.post<Card>('/cards/info', { userBankcardId });
    return res.data;
  },

  /** Get card balance */
  async getCardBalance(userBankcardId: number): Promise<{ balance: string; ccy: string }> {
    const res = await apiClient.post<{ balance: string; ccy: string }>('/cards/balance', { userBankcardId });
    return res.data;
  },

  /** Set card PIN */
  async setPin(userBankcardId: number, pin: string): Promise<void> {
    await apiClient.post('/cards/pin/set', { userBankcardId, pin });
  },

  /** Query card PIN */
  async getPin(userBankcardId: number): Promise<{ pin: string }> {
    const res = await apiClient.post<{ pin: string }>('/cards/pin/query', { userBankcardId });
    return res.data;
  },

  /** Top up card */
  async topUpCard(userBankcardId: number, amount: number): Promise<void> {
    await apiClient.post('/cards/recharge', { userBankcardId, amount });
  },

  /** Unload card (Withdraw from card to internal wallet) */
  async unloadCard(userBankcardId: number, amount: number): Promise<void> {
    await apiClient.post('/cards/unload', { userBankcardId, amount });
  },

  /** Update card status (freeze/unfreeze) */
  async updateCardStatus(userBankcardId: number, status: 'active' | 'frozen'): Promise<void> {
    await apiClient.post('/cards/status/update', { userBankcardId, status });
  },

  /** Cancel card */
  async cancelCard(userBankcardId: number): Promise<void> {
    await apiClient.post('/cards/cancel', { userBankcardId });
  },

  /** Update card email */
  async updateCardEmail(userBankcardId: number, email: string): Promise<void> {
    await apiClient.post('/cards/email/update', { userBankcardId, email });
  },

  /** Get transaction list for a card */
  async getTransactions(userBankcardId: number, page: number = 1, size: number = 20): Promise<PaginatedResponse<Transaction>> {
    const res = await apiClient.post<PaginatedResponse<Transaction>>('/cards/transactions', { userBankcardId, page, size });
    return res.data;
  },

  /** Get transaction detail */
  async getTransactionDetail(transactionId: string): Promise<Transaction> {
    const res = await apiClient.post<Transaction>('/cards/transactions/detail', { transactionId });
    return res.data;
  },

  /** Approve 3DS transaction */
  async approve3DS(transactionId: string): Promise<void> {
    await apiClient.post('/cards/3ds/approve', { transactionId });
  },

  /** Deny 3DS transaction */
  async deny3DS(transactionId: string): Promise<void> {
    await apiClient.post('/cards/3ds/deny', { transactionId });
  },
};

export default cardsService;
