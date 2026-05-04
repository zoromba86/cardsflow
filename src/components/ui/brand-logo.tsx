import React from 'react';

export default function BrandLogo({ scrolled = true, className = "" }: { scrolled?: boolean; className?: string }) {
  return (
    <div className={`w-8 h-8 shrink-0 relative ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_8px_rgba(229,178,32,0.4)]">
        <defs>
          <linearGradient id="opt3-left" x1="20" y1="40" x2="0" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5B220" />
            <stop offset="1" stopColor="#FDE047" />
          </linearGradient>
          <linearGradient id="opt3-right" x1="20" y1="40" x2="40" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="opt3-top" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEF08A" />
            <stop offset="1" stopColor="#FDE047" />
          </linearGradient>
        </defs>
        <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#opt3-left)" opacity="0.9"/>
        <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#opt3-right)"/>
        <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#opt3-top)"/>
        <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill={scrolled ? "#FFFFFF" : "#0F1B2D"} className="transition-colors duration-300"/>
      </svg>
    </div>
  );
}
