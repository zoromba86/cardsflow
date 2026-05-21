// ─── Base API Client ───────────────────────────────────────────────────
// JWT-aware HTTP client for all dashboard API calls.

import type { ApiResponse } from '@/lib/types/dashboard';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getToken(): string | null {
    if (typeof window === 'undefined') return null;
    const expiresAt = localStorage.getItem('cardsflow_token_expires_at');
    if (expiresAt) {
      const ts = Date.parse(expiresAt);
      if (!Number.isNaN(ts) && ts <= Date.now()) {
        localStorage.removeItem('cardsflow_token');
        localStorage.removeItem('cardsflow_user');
        localStorage.removeItem('cardsflow_token_expires_at');
        return null;
      }
    }
    return localStorage.getItem('cardsflow_token');
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (response.status === 401) {
      // Token expired or invalid — clear and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cardsflow_token');
        localStorage.removeItem('cardsflow_user');
        localStorage.removeItem('cardsflow_token_expires_at');
        window.location.href = '/login';
      }
      throw new Error('Session expired. Please log in again.');
    }

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(
        errorBody.message || `Request failed with status ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  }

  async get<T>(path: string): Promise<ApiResponse<T>> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers,
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    return this.handleResponse<T>(response);
  }

  async put<T>(path: string, body?: unknown): Promise<ApiResponse<T>> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'PUT',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    return this.handleResponse<T>(response);
  }

  async upload<T>(path: string, formData: FormData): Promise<ApiResponse<T>> {
    const token = this.getToken();
    const headers: Record<string, string> = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    // Don't set Content-Type — browser will set multipart/form-data with boundary

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers,
      body: formData,
    });

    return this.handleResponse<T>(response);
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
