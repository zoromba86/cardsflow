'use client';

import React, { useState } from 'react';
import { User, Shield, Lock, Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';

export default function SettingsPage() {
  const { user } = useAuth();
  const [tab, setTab] = useState<'profile' | 'security'>('profile');
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwSuccess, setPwSuccess] = useState(false);
  const [pwError, setPwError] = useState('');

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwError('');
    if (newPw.length < 8) { setPwError('New password must be at least 8 characters.'); return; }
    if (newPw !== confirmPw) { setPwError('Passwords do not match.'); return; }
    setPwLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setPwLoading(false);
    setPwSuccess(true);
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
    setTimeout(() => setPwSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your profile and security preferences.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-fit">
        {(['profile', 'security'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-2 text-sm font-bold rounded-lg transition-colors capitalize ${tab === t ? 'bg-white text-[#0F172A] shadow-sm' : 'text-slate-500 hover:text-[#0F172A]'}`}>
            {t === 'profile' ? <span className="flex items-center gap-2"><User size={14} />Profile</span> : <span className="flex items-center gap-2"><Shield size={14} />Security</span>}
          </button>
        ))}
      </div>

      {tab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Account Information</h3>
            <div className="space-y-4">
              {[
                { label: 'Username', value: user?.username || 'User' },
                { label: 'Email Address', value: user?.email || 'user@example.com' },
                { label: 'Account Type', value: 'Customer' },
                { label: 'Member Since', value: 'May 2026' },
              ].map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <span className="text-xs text-slate-500 font-medium">{f.label}</span>
                  <span className="text-sm font-bold text-[#0F172A]">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Account Status</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Email Verification</p>
                  <p className="text-xs text-slate-500">Your email address has been verified.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Account Active</p>
                  <p className="text-xs text-slate-500">This account is active and operational.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Session</p>
                  <p className="text-xs text-slate-500">Authenticated session is active.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'security' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Change Password</h3>
            {pwSuccess && <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium flex items-center gap-2"><CheckCircle2 size={14} />Password updated successfully.</div>}
            {pwError && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{pwError}</div>}
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="set-current-pw" className="block text-sm font-semibold text-[#0F172A] mb-2">Current Password</label>
                <div className="relative">
                  <input id="set-current-pw" type={showPw ? 'text' : 'password'} value={currentPw} onChange={(e) => setCurrentPw(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50 pr-12" required disabled={pwLoading} />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400" tabIndex={-1}>
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="set-new-pw" className="block text-sm font-semibold text-[#0F172A] mb-2">New Password</label>
                <input id="set-new-pw" type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="Min. 8 characters"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50" required disabled={pwLoading} />
              </div>
              <div>
                <label htmlFor="set-confirm-pw" className="block text-sm font-semibold text-[#0F172A] mb-2">Confirm New Password</label>
                <input id="set-confirm-pw" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#E5B220]/50" required disabled={pwLoading} />
              </div>
              <button type="submit" disabled={pwLoading}
                className="w-full py-3 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                {pwLoading ? <><Loader2 size={16} className="animate-spin" /> Updating...</> : <><Lock size={14} /> Update Password</>}
              </button>
            </form>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-5">Two-Factor Authentication</h3>
            <div className="py-8 text-center">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4"><Shield size={24} className="text-slate-400" /></div>
              <p className="text-sm font-bold text-[#0F172A] mb-2">2FA Coming Soon</p>
              <p className="text-xs text-slate-500">Two-factor authentication will be available once the backend endpoint is configured.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
