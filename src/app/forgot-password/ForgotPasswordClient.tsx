'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Loader2, ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import authService from '@/lib/api/auth';

export default function ForgotPasswordClient() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    try {
      await authService.forgotPassword(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center p-6 font-[family-name:var(--font-jakarta)]">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-[#E5B220] rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="3" stroke="#0F172A" strokeWidth="2.5" />
              <path d="M2 10h20" stroke="#0F172A" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#0F172A] tracking-tight">CardsFlow</span>
        </Link>

        {sent ? (
          /* Success state */
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-emerald-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Check your email</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              If an account exists for <strong className="text-[#0F172A]">{email}</strong>, we&apos;ve sent password reset instructions to your inbox.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white text-sm font-bold rounded-xl hover:bg-[#1E293B] transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Sign In
            </Link>
          </div>
        ) : (
          /* Form state */
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
              <Mail size={24} className="text-slate-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Reset your password
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Enter the email address associated with your CardsFlow account. We&apos;ll send you a link to reset your password.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Email Address
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220] transition-all"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send reset link'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[#0F172A] transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
