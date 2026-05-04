'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Wifi } from 'lucide-react';

const mockCards = [
  { id: '1', binType: 'onyx', nature: 'VIRTUAL', masked: '•••• •••• •••• 4821', last4: '4821', balance: '1,250.00', status: 'active', expiry: '12/31', apple: true, google: true },
  { id: '2', binType: 'volt', nature: 'VIRTUAL', masked: '•••• •••• •••• 7392', last4: '7392', balance: '800.00', status: 'active', expiry: '06/30', apple: false, google: true },
  { id: '3', binType: 'onyx', nature: 'PHYSICAL', masked: '•••• •••• •••• 1105', last4: '1105', balance: '400.00', status: 'frozen', expiry: '09/29', apple: true, google: true },
];

function CardVisual({ card }: { card: typeof mockCards[0] }) {
  const isOnyx = card.binType === 'onyx';
  // Premium subtle gradients
  const bg = isOnyx ? 'from-[#0A0F1C] via-[#111827] to-[#1E293B]' : 'from-[#1E1B4B] via-[#2E1065] to-[#4C1D95]';
  
  // Base64 extremely subtle noise texture for that metallic/plastic feel without performance hit
  const noiseTexture = "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')";

  return (
    <div className={`relative bg-gradient-to-br ${bg} rounded-2xl p-6 text-white overflow-hidden aspect-[1.6/1] flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 group`}>
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: noiseTexture }} />
      
      {/* Glossy Reflection Highlight */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-opacity duration-500 pointer-events-none" />

      {/* Decorative Geometry */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
      <div className="flex justify-between relative z-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">CardsFlow {isOnyx ? 'Onyx' : 'Volt'}</p>
          <p className="text-[10px] text-white/40 mt-0.5">{card.nature === 'VIRTUAL' ? 'Virtual' : 'Physical'}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Wifi size={14} className="text-white/60 rotate-90" />
          {card.status === 'frozen' && <span className="text-[9px] font-bold bg-blue-400/30 text-blue-200 px-1.5 py-0.5 rounded">FROZEN</span>}
        </div>
      </div>
      <p className="text-lg font-mono tracking-[0.15em] text-white/90 relative z-10">{card.masked}</p>
      <div className="flex items-end justify-between relative z-10">
        <div><p className="text-[9px] text-white/40 uppercase">Expires</p><p className="text-xs font-semibold">{card.expiry}</p></div>
        <div className="flex items-center gap-2">
          {card.apple && <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded text-white/80">Apple Pay</span>}
          {card.google && <span className="text-[8px] font-bold bg-white/15 px-1.5 py-0.5 rounded text-white/80">G Pay</span>}
          <span className="text-xl font-extrabold italic text-white/80">VISA</span>
        </div>
      </div>
    </div>
  );
}

export default function CardsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">Cards</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your virtual and physical Visa cards.</p>
        </div>
        <Link href="/dashboard/orders" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5B220] text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#D4A017] transition-colors self-start">
          <Plus size={16} /> Order New Card
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCards.map((card) => (
          <div key={card.id} className="space-y-3">
            <CardVisual card={card} />
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-slate-500">Balance</p>
                  <p className="text-lg font-extrabold text-[#0F172A] tabular-nums">${card.balance}</p>
                </div>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${card.status === 'active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : card.status === 'frozen' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>{card.status}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href={`/dashboard/cards/${card.id}`} className="flex-1 text-center text-xs font-bold bg-[#0F172A] text-white rounded-lg py-2 hover:bg-[#1E293B] transition-colors">View Details</Link>
                <Link href="/dashboard/topups" className="flex-1 text-center text-xs font-bold bg-emerald-50 text-emerald-700 rounded-lg py-2 hover:bg-emerald-100 transition-colors">Top-up</Link>
                <button className={`flex-1 text-xs font-bold rounded-lg py-2 transition-colors ${card.status === 'frozen' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{card.status === 'frozen' ? 'Unfreeze' : 'Freeze'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
