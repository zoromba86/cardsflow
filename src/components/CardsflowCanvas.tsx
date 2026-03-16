"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import HeroContent from "./HeroContent";

const FRAME_COUNT = 79;
const START_FRAME = 1;

export default function CardsflowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const loadedImages: HTMLImageElement[] = [];
    
    for (let i = START_FRAME; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = `/frames/coffee_frame_${i}.jpg`;
        img.onload = () => {
            loaded++;
            setLoadedCount(loaded);
          if (i === START_FRAME) {
              // Intentionally removed background extraction to use globals.css site structure theme
          }
      };
      loadedImages.push(img);
  }
  setImages(loadedImages);
}, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map progress (0 -> 1) to frame index (0 -> 78)
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = (index: number) => {
    if (images.length === 0 || !images[index]) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Responsive Canvas Resizing for high DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear previously drawn instances
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Crop source image: exclude bottom 8% to remove Veo watermark
    const cropFraction = 0.08;
    const srcX = 0;
    const srcY = 0;
    const srcW = img.width;
    const srcH = img.height * (1 - cropFraction);

    // Logic for object-fit: contain using the cropped aspect ratio
    const croppedImgRatio = srcW / srcH;
    const canvasRatio = rect.width / rect.height;

    let drawWidth, drawHeight;
    if (canvasRatio > croppedImgRatio) {
        drawHeight = rect.height;
        drawWidth = drawHeight * croppedImgRatio;
    } else {
        drawWidth = rect.width;
        drawHeight = drawWidth / croppedImgRatio;
    }

    const x = (rect.width - drawWidth) / 2;
    const y = (rect.height - drawHeight) / 2;

    // Draw only the cropped portion of the source image
    ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, drawWidth, drawHeight);
  };

  useMotionValueEvent(currentFrameIndex, "change", (latest) => {
     requestAnimationFrame(() => drawFrame(Math.floor(latest)));
  });

  // Re-draw on resize
  useEffect(() => {
    const handleResize = () => {
        if (images.length > 0) {
           drawFrame(Math.floor(currentFrameIndex.get()));
        }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  // Initial draw once first frame loads
  useEffect(() => {
    if (images.length > 0 && loadedCount >= 1) {
       drawFrame(0);
    }
  }, [loadedCount, images]);

  const isLoaded = loadedCount === FRAME_COUNT;
  const progressPercent = Math.floor((loadedCount / FRAME_COUNT) * 100);

  return (
    <>
      {/* Sleek Preloader */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F1B2D] transition-opacity duration-700 ease-in-out">
          <motion.div 
            className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden"
          >
             <motion.div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
             />
          </motion.div>
          <span className="text-zinc-600 mt-4 text-xs uppercase tracking-widest font-bold">
             Connecting {progressPercent}%
          </span>
        </div>
      )}

      {/* Scrollytelling Container */}
      <div id="main-layout" ref={containerRef} className="relative w-full h-[600vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0F1B2D]">
             {/* Text Overlay */}
             <HeroContent />
             {/* The animation canvas */}
             <canvas 
                ref={canvasRef} 
                className="w-full h-full"
                style={{ 
                   opacity: isLoaded ? 1 : 0, 
                   transition: "opacity 1s ease-in-out" 
                }}
             />
             {/* Bottom gradient to cover any remaining watermark artifacts */}
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F1B2D] to-transparent pointer-events-none z-[5]" />
        </div>
      </div>
    </>
  );
}
