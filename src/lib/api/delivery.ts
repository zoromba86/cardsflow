// ─── Delivery Service ──────────────────────────────────────────────────
// Physical card delivery address management.

import apiClient from './client';
import type { DeliveryAddress } from '@/lib/types/dashboard';

export const deliveryService = {
  /** Get mailing areas */
  async getMailingAreas(): Promise<{ code: string; name: string }[]> {
    const res = await apiClient.post<{ code: string; name: string }[]>('/delivery/areas');
    return res.data;
  },

  /** Add delivery address */
  async addAddress(data: Omit<DeliveryAddress, 'id'>): Promise<DeliveryAddress> {
    const res = await apiClient.post<DeliveryAddress>('/delivery/address', data);
    return res.data;
  },

  /** Update delivery address */
  async updateAddress(id: number, data: Partial<DeliveryAddress>): Promise<DeliveryAddress> {
    const res = await apiClient.put<DeliveryAddress>(`/delivery/address/${id}`, data);
    return res.data;
  },

  /** Get address info */
  async getAddressInfo(id: number): Promise<DeliveryAddress> {
    const res = await apiClient.get<DeliveryAddress>(`/delivery/address/${id}`);
    return res.data;
  },
};

export default deliveryService;
