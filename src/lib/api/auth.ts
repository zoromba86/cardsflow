// ─── Auth Service ──────────────────────────────────────────────────────

import apiClient from './client';
import type { AuthSession, LoginRequest, RegisterRequest, RegisterResponse, User } from '@/lib/types/dashboard';

const TOKEN_KEY = 'cardsflow_token';
const USER_KEY = 'cardsflow_user';
const EXPIRES_KEY = 'cardsflow_token_expires_at';

/**
 * NOTE — token storage is a known posture limitation: keeping JWTs in
 * `localStorage` makes them XSS-exfiltrable. The production hardening plan
 * (docs/SECURITY.md, Track A) moves sessions to `HttpOnly; Secure;
 * SameSite=Strict` cookies set by the backend and removes the helpers below.
 * Until that migration is complete we at least validate expiry on every
 * read so an obviously-stale token does not present the UI as authenticated.
 */

function isExpired(expiresAt: string | null): boolean {
  if (!expiresAt) return false; // no expiry info — defer to server
  const ts = Date.parse(expiresAt);
  if (Number.isNaN(ts)) return false;
  return ts <= Date.now();
}

function clearSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}

export const authService = {
  async login(data: LoginRequest): Promise<AuthSession> {
    const response = await apiClient.post<AuthSession>('/auth/login', data);
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
      if (response.data.expiresAt) {
        localStorage.setItem(EXPIRES_KEY, response.data.expiresAt);
      } else {
        localStorage.removeItem(EXPIRES_KEY);
      }
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
    clearSession();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  },

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    const expiresAt = localStorage.getItem(EXPIRES_KEY);
    if (isExpired(expiresAt)) {
      clearSession();
      return null;
    }
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser(): User | null {
    if (typeof window === 'undefined') return null;
    // Re-use getToken so an expired session also clears the cached user.
    if (!this.getToken()) return null;
    const raw = localStorage.getItem(USER_KEY);
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
