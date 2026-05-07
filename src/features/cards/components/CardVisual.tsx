'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Wifi } from 'lucide-react';
import type { UserCard } from '../types';
import { CardStatusBadge } from './CardStatusBadge';

interface CardVisualProps {
  card: UserCard;
  showFullNumber?: boolean;
}

const noiseTexture = "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')";

export function CardVisual({ card, showFullNumber = false }: CardVisualProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const isOnyx = card.binType === 'onyx';
  const isFrozen = card.status === 'frozen';
  const isCancelled = card.status === 'cancelled';

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isCancelled) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max rotation 15deg
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.8 });
  }, [isCancelled]);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  }, []);

  let bg = '';
  if (isOnyx) {
    bg = card.bankCardNature === 'PHYSICAL'
      ? 'bg-gradient-to-br from-[#0A0F1C] via-[#020617] to-[#000000]' // Onyx Physical: Deep Matte Black
      : 'bg-gradient-to-br from-[#334155] via-[#1E293B] to-[#0F172A]'; // Onyx Virtual: Lighter Slate/Navy
  } else {
    bg = card.bankCardNature === 'PHYSICAL'
      ? 'bg-gradient-to-br from-[#042F2E] via-[#0F766E] to-[#115E59]' // Volt Physical: Deep Emerald
      : 'bg-gradient-to-br from-[#0D9488] via-[#14B8A6] to-[#2DD4BF]'; // Volt Virtual: Vibrant Neon Teal
  }

  return (
    <div className="perspective-[1000px] w-full" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full rounded-2xl p-4 sm:p-6 text-white overflow-hidden aspect-[1.6/1] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/20 transition-all duration-200 ease-out group ${
          isCancelled ? 'grayscale opacity-60 cursor-not-allowed' : 'cursor-pointer hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]'
        }`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: glare.opacity === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s linear'
        }}
      >
        {/* Base Background */}
        <div className={`absolute inset-0 ${bg}`} />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: noiseTexture }}
        />

        {/* Dynamic Glare */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            opacity: glare.opacity,
            transform: 'translateZ(1px)' // Keeps glare on top
          }}
        />

        {/* Static Diagonal Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />

        {/* Frozen overlay */}
        {isFrozen && (
          <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-[1px] pointer-events-none z-10" />
        )}

        {/* Header row */}
        <div className="flex justify-between relative z-20" style={{ transform: 'translateZ(20px)' }}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              CardsFlow <span className={isOnyx ? "text-slate-300" : "text-teal-300"}>{isOnyx ? 'Onyx' : 'Volt'}</span>
            </p>
            <p className="text-[10px] font-medium tracking-wider text-white/50 mt-1">
              {card.bankCardNature === 'VIRTUAL' ? 'Virtual Card' : 'Physical Card'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-white/70 rotate-90 drop-shadow-md" />
            <CardStatusBadge status={card.status} variant="card" />
          </div>
        </div>

        {/* EMV Chip & Number area */}
        <div className="relative z-20 space-y-4" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-center gap-3">
            {/* SVG EMV Chip */}
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 drop-shadow-sm">
              <rect width="40" height="30" rx="4" fill="url(#chip-grad)" stroke="#D4AF37" strokeWidth="0.5"/>
              <path d="M10 0V30 M30 0V30 M0 10H10 M30 10H40 M0 20H10 M30 20H40 M10 15H30" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6"/>
              <defs>
                <linearGradient id="chip-grad" x1="0" y1="0" x2="40" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FDE047"/>
                  <stop offset="0.5" stopColor="#EAB308"/>
                  <stop offset="1" stopColor="#A16207"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="text-base sm:text-2xl font-mono tracking-[0.1em] sm:tracking-[0.2em] text-white/95 whitespace-nowrap" style={{ textShadow: '0px 2px 2px rgba(0,0,0,0.5), 0px -1px 1px rgba(255,255,255,0.2)' }}>
            {showFullNumber ? card.cardNo : card.maskedNumber}
          </p>
        </div>

        {/* Footer row */}
        <div className="flex items-end justify-between gap-2 relative z-20" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex gap-3 sm:gap-6 min-w-0">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/50 uppercase tracking-widest mb-0.5">Valid Thru</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider" style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.5)' }}>{card.expiryDate || '—'}</span>
            </div>
            {card.cardholderName && (
              <div className="flex flex-col min-w-0">
                <span className="text-[8px] text-white/50 uppercase tracking-widest mb-0.5">Cardholder</span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase truncate max-w-[88px] sm:max-w-[120px]" style={{ textShadow: '0px 1px 2px rgba(0,0,0,0.5)' }}>{card.cardholderName}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex flex-col items-end gap-1">
              {card.supportsApplePay && <span className="text-[7px] font-extrabold uppercase tracking-widest whitespace-nowrap bg-white/10 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm">Apple Pay</span>}
              {card.supportsGooglePay && <span className="text-[7px] font-extrabold uppercase tracking-widest whitespace-nowrap bg-white/10 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm shadow-sm">Google Pay</span>}
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold italic text-white drop-shadow-md tracking-tighter">VISA</span>
          </div>
        </div>

        {/* Cancelled watermark */}
        {isCancelled && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <span className="text-4xl font-black text-white/30 tracking-[0.3em] rotate-[-20deg] mix-blend-overlay">
              CANCELLED
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
