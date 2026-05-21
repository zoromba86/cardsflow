'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import authService from '@/lib/api/auth';
import BrandLogo from '@/components/ui/brand-logo';
import { checkPassword, PASSWORD_MIN_LENGTH } from '@/lib/utils/password';

export default function RegisterPageClient() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const policy = checkPassword(password);
    if (!policy.ok) {
      setError(policy.message || 'Password does not meet the security policy.');
      return;
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setIsLoading(true);
    try {
      await authService.register({ email, password });
      // Auto-login after registration
      await authService.login({ email, password });
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-[family-name:var(--font-jakarta)]">
      {/* Left Panel — Hero */}
      <div className="relative lg:w-[48%] bg-[#0F172A] text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0D9488]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#E5B220]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <BrandLogo scrolled={true} />
            <span className="text-lg font-bold tracking-tight">CardsFlow</span>
          </Link>
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 rounded-full">
            Get Started
          </span>
        </div>

        {/* Hero */}
        <div className="relative z-10 my-auto py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
            Start issuing<br />
            virtual Visa<br />
            cards in<br />
            minutes
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mb-8">
            Fund with 100+ cryptocurrencies. Issue cards instantly. Spend wherever Visa is accepted worldwide.
          </p>
          <div className="space-y-3">
            {[
              'Zero-knowledge eligibility verification',
              'Free deposits — only pay when you top up',
              'Two card lines: CardsFlow Onyx & Volt',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-[#0D9488] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Already have an account? Sign in
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Right Panel — Register Form */}
      <div className="flex-1 bg-[#F0F4F8] flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/30 rounded-full mb-6">
            New Account
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Create your CardsFlow account
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Register to access wallets, card issuance, deposits, and transaction tracking.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="reg-email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email Address
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:border-[#0D9488] transition-all"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={`Min. ${PASSWORD_MIN_LENGTH} characters`}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:border-[#0D9488] transition-all pr-12"
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

            <div>
              <label htmlFor="reg-confirm" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Confirm Password
              </label>
              <input
                id="reg-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/50 focus:border-[#0D9488] transition-all"
                required
                disabled={isLoading}
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-[#0D9488] focus:ring-[#0D9488]"
                disabled={isLoading}
              />
              <span className="text-xs text-slate-500 leading-relaxed">
                I agree to the{' '}
                <Link href="/legal/terms" className="font-semibold text-[#0F172A] hover:text-[#0D9488]">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/legal/privacy" className="font-semibold text-[#0F172A] hover:text-[#0D9488]">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#0D9488] text-white text-sm font-bold rounded-xl hover:bg-[#0B7C72] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-sm font-semibold text-[#0F172A] hover:text-[#0D9488] transition-colors"
            >
              Already have an account? Sign in
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
              <ShieldCheck size={14} className="mt-0.5 shrink-0" />
              <p>
                After registration, you will be redirected to the live dashboard where you can complete verification and start issuing cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
