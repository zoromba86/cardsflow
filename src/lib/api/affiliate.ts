// ─── Affiliate Service ─────────────────────────────────────────────────
// 1% lifetime commission on referred users' top-up fees.

import apiClient from './client';
import type { AffiliateStats, CommissionEntry, PaginatedResponse } from '@/lib/types/dashboard';

export const affiliateService = {
  /** Get referral link and stats */
  async getStats(): Promise<AffiliateStats> {
    const res = await apiClient.get<AffiliateStats>('/affiliate/stats');
    return res.data;
  },

  /** Get commission history */
  async getCommissionHistory(page: number = 1, size: number = 20): Promise<PaginatedResponse<CommissionEntry>> {
    const res = await apiClient.get<PaginatedResponse<CommissionEntry>>(`/affiliate/commissions?page=${page}&size=${size}`);
    return res.data;
  },

  /** Request payout */
  async requestPayout(walletAddress: string, amount: number): Promise<{ requestId: string }> {
    const res = await apiClient.post<{ requestId: string }>('/affiliate/payout', { walletAddress, amount });
    return res.data;
  },
};

export default affiliateService;
