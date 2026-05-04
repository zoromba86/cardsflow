// ─── Withdrawal Service ────────────────────────────────────────────────
// Manual withdrawal requests → admin dashboard + email notification.

import apiClient from './client';
import type { Withdrawal, WithdrawalRequest, PaginatedResponse } from '@/lib/types/dashboard';

export const withdrawalService = {
  /** Submit a withdrawal request */
  async requestWithdrawal(data: WithdrawalRequest): Promise<Withdrawal> {
    const res = await apiClient.post<Withdrawal>('/withdrawals', data);
    return res.data;
  },

  /** Get withdrawal history */
  async getHistory(page: number = 1, size: number = 20): Promise<PaginatedResponse<Withdrawal>> {
    const res = await apiClient.get<PaginatedResponse<Withdrawal>>(`/withdrawals?page=${page}&size=${size}`);
    return res.data;
  },

  /** Get withdrawal status */
  async getStatus(id: string): Promise<Withdrawal> {
    const res = await apiClient.get<Withdrawal>(`/withdrawals/${id}`);
    return res.data;
  },
};

export default withdrawalService;
