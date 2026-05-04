'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, ArrowRight, ShieldCheck, Headphones } from 'lucide-react';
import authService from '@/lib/api/auth';
import BrandLogo from '@/components/ui/brand-logo';

export default function LoginPageClient() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsLoading(true);
    try {
      await authService.login({ email, password });
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-[family-name:var(--font-jakarta)]">
      {/* Left Panel — Hero */}
      <div className="relative lg:w-[48%] bg-[#0F172A] text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#E5B220]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#0D9488]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* Top badge */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <BrandLogo scrolled={true} />
            <span className="text-lg font-bold tracking-tight">CardsFlow</span>
          </Link>
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5B220] bg-[#E5B220]/10 border border-[#E5B220]/30 rounded-full">
            CardsFlow
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 my-auto py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
            Secure access<br />
            to your wallet<br />
            and card<br />
            dashboard
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md">
            Sign in to manage balances, deposits, withdrawals, card orders, and transaction activity from one stable CardsFlow workspace designed for production use.
          </p>
        </div>

        {/* Bottom actions */}
        <div className="relative z-10 flex flex-wrap gap-3">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-full hover:bg-[#D4A017] transition-all duration-200"
          >
            Create account
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/trust/support-and-escalations"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-all duration-200"
          >
            <Headphones size={14} />
            Support & escalations
          </Link>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 bg-[#F0F4F8] flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Badge */}
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8860B] bg-[#E5B220]/10 border border-[#E5B220]/30 rounded-full mb-6">
            Customer Login
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Access your CardsFlow workspace
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Sign in to manage wallets, deposits, withdrawals, cards, and transaction activity.
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-semibold text-[#0F172A] mb-2"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220] transition-all"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-semibold text-[#0F172A] mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 focus:border-[#E5B220] transition-all pr-12"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Links */}
          <div className="flex items-center justify-between mt-6 text-sm">
            <Link
              href="/register"
              className="font-semibold text-[#0F172A] hover:text-[#E5B220] transition-colors"
            >
              Create an account
            </Link>
            <Link
              href="/forgot-password"
              className="font-semibold text-[#0F172A] hover:text-[#E5B220] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
              <ShieldCheck size={14} className="mt-0.5 shrink-0 text-slate-400" />
              <p>
                After login, you will be redirected to the live dashboard connected to the stable backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
