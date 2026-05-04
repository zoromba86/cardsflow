// ─── Auth Service ──────────────────────────────────────────────────────

import apiClient from './client';
import type { AuthSession, LoginRequest, RegisterRequest, RegisterResponse, User } from '@/lib/types/dashboard';

export const authService = {
  async login(data: LoginRequest): Promise<AuthSession> {
    const response = await apiClient.post<AuthSession>('/auth/login', data);
    if (response.data.token) {
      localStorage.setItem('cardsflow_token', response.data.token);
      localStorage.setItem('cardsflow_user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await apiClient.post<RegisterResponse>('/auth/register', data);
    return response.data;
  },

  async forgotPassword(email: string): Promise<void> {
    await apiClient.post('/auth/forgot-password', { email });
  },

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    await apiClient.post('/auth/change-password', { currentPassword, newPassword });
  },

  logout(): void {
    localStorage.removeItem('cardsflow_token');
    localStorage.removeItem('cardsflow_user');
    window.location.href = '/login';
  },

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('cardsflow_token');
  },

  getUser(): User | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem('cardsflow_user');
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};

export default authService;
