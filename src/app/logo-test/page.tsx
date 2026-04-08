"use client";

import React, { useRef } from "react";

export default function LogoPreview() {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgLightRef = useRef<SVGSVGElement>(null);

  const handleDownloadPNG = (isLight: boolean) => {
    const svgNode = isLight ? svgLightRef.current : svgRef.current;
    if (!svgNode) return;
    
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgNode);
    
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
         ctx.drawImage(img, 0, 0, 1024, 1024);
         const pngUrl = canvas.toDataURL("image/png");
         const a = document.createElement("a");
         a.href = pngUrl;
         a.download = `cardsflow-logo-option3-${isLight ? 'light' : 'dark'}-high-res.png`;
         a.click();
         URL.revokeObjectURL(url);
      }
    };
    img.src = url;
  };

  return (
    <div className="min-h-screen bg-slate-100 py-20 px-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-black text-slate-900 mb-2 text-center">
          Cardsflow SVG Logo Candidates (Premium Tier)
        </h1>
        <p className="text-slate-500 text-center mb-16">
          High-end, geometrically precise SVG marks utilizing gradients, opacity, and minimalist SaaS aesthetics.
        </p>

        <div className="flex flex-col gap-12">
          {/* OPTION 1: The Modern Monogram */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#0F1B2D] p-10 flex-1 flex flex-col items-center justify-center gap-6 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(229,178,32,0.3)]">
                    <defs>
                      <linearGradient id="opt1-grad1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FDE047" />
                        <stop offset="1" stopColor="#D97706" />
                      </linearGradient>
                      <linearGradient id="opt1-grad2" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E5B220" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                    <path d="M28 8H16C11.5817 8 8 11.5817 8 16V24C8 28.4183 11.5817 32 16 32H28" stroke="url(#opt1-grad1)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M12 20H32" stroke="url(#opt1-grad2)" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
                    <circle cx="32" cy="20" r="3" fill="#FDE047" />
                  </svg>
                </div>
                <span className="font-black text-2xl tracking-tighter text-white">CardsFlow</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-2">Option 1: The Dynamic 'C' + Flow</p>
            </div>
            <div className="bg-slate-50 p-10 flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                    <defs>
                      <linearGradient id="opt1-grad1-light" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E5B220" />
                        <stop offset="1" stopColor="#B45309" />
                      </linearGradient>
                    </defs>
                    <path d="M28 8H16C11.5817 8 8 11.5817 8 16V24C8 28.4183 11.5817 32 16 32H28" stroke="url(#opt1-grad1-light)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M12 20H32" stroke="url(#opt1-grad1-light)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                    <circle cx="32" cy="20" r="3" fill="#D97706" />
                  </svg>
                </div>
                <span className="font-black text-2xl tracking-tighter text-slate-900">CardsFlow</span>
              </div>
            </div>
          </div>

          {/* OPTION 2: The Geometric Stacks */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#0F1B2D] p-10 flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center relative">
                   <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                     <defs>
                       <linearGradient id="opt2-grad1" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                         <stop stopColor="#E5B220" />
                         <stop offset="1" stopColor="#FDE047" stopOpacity="0.2" />
                       </linearGradient>
                       <linearGradient id="opt2-grad2" x1="40" y1="40" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                         <stop stopColor="#F59E0B" />
                         <stop offset="1" stopColor="#E5B220" />
                       </linearGradient>
                     </defs>
                     {/* Back plate */}
                     <rect x="4" y="12" width="22" height="22" rx="6" fill="url(#opt2-grad1)" opacity="0.6"/>
                     {/* Front plate */}
                     <rect x="14" y="6" width="22" height="22" rx="6" fill="url(#opt2-grad2)" className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"/>
                     <circle cx="25" cy="17" r="4" fill="#0F1B2D" opacity="0.8"/>
                   </svg>
                </div>
                <span className="font-black text-2xl tracking-tighter text-white">CardsFlow</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-2">Option 2: Shifted Planes</p>
            </div>
            <div className="bg-slate-50 p-10 flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center relative">
                   <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                     <defs>
                       <linearGradient id="opt2-grad1-light" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                         <stop stopColor="#F59E0B" stopOpacity="0.3" />
                         <stop offset="1" stopColor="#D97706" stopOpacity="0.1" />
                       </linearGradient>
                       <linearGradient id="opt2-grad2-light" x1="40" y1="40" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                         <stop stopColor="#E5B220" />
                         <stop offset="1" stopColor="#FDE047" />
                       </linearGradient>
                     </defs>
                     <rect x="4" y="12" width="22" height="22" rx="6" fill="url(#opt2-grad1-light)" />
                     <rect x="14" y="6" width="22" height="22" rx="6" fill="url(#opt2-grad2-light)" className="drop-shadow-sm"/>
                     <circle cx="25" cy="17" r="4" fill="#FFFFFF"/>
                   </svg>
                </div>
                <span className="font-black text-2xl tracking-tighter text-slate-900">CardsFlow</span>
              </div>
            </div>
          </div>

          {/* OPTION 3: The Isometric Spark */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row relative">
            <div className="bg-[#0F1B2D] p-10 flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 shrink-0">
                    <svg ref={svgRef} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_8px_rgba(229,178,32,0.4)]">
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
                      <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill="#0F1B2D"/>
                    </svg>
                  </div>
                  <span className="font-black text-3xl tracking-tight text-white" style={{ fontFamily: "Inter, sans-serif" }}>CardsFlow</span>
                </div>
                <button 
                  onClick={() => handleDownloadPNG(false)}
                  className="bg-[#E5B220] hover:bg-[#F59E0B] text-slate-900 font-bold py-2 px-6 rounded-lg text-sm shadow-md transition-colors"
                >
                  Download Transparent PNG (1024x1024)
                </button>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-2">Option 3: The Isometric 'C' Prism</p>
            </div>
            <div className="bg-slate-50 p-10 flex-1 flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 shrink-0">
                    <svg ref={svgLightRef} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                      <path d="M20 40L4 30.7692V12.3077L20 3.0769L36 12.3077V30.7692L20 40Z" fill="url(#opt3-left)" opacity="0.9"/>
                      <path d="M20 40L36 30.7692V12.3077L20 21.5385V40Z" fill="url(#opt3-right)"/>
                      <path d="M20 21.5385L4 12.3077L20 3.0769L36 12.3077L20 21.5385Z" fill="url(#opt3-top)"/>
                      <path d="M20 31L10 25.2V14.8L20 9L25 11.9L15 17.6V22.4L25 28.1L20 31Z" fill="#F8FAFC"/>
                    </svg>
                  </div>
                  <span className="font-black text-3xl tracking-tight text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>CardsFlow</span>
                </div>
                <button 
                  onClick={() => handleDownloadPNG(true)}
                  className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-900 font-bold py-2 px-6 rounded-lg text-sm shadow-sm transition-colors"
                >
                  Download Transparent PNG (1024x1024)
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
