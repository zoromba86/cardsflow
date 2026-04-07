"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  motion,
  AnimatePresence,
} from "framer-motion";
import HeroContent from "./HeroContent";

// ─── Constants ────────────────────────────────────────────────────────────────
const FRAME_COUNT = 40;
const START_FRAME = 1;
const BATCH_SIZE = 5; // images loaded per tick
const BATCH_DELAY_MS = 100; // ms between batches — keeps network calm
const MOBILE_BP = 768;

// ─── Component ────────────────────────────────────────────────────────────────
export default function CardsflowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All loaded Image objects stored in a plain ref — never triggers re-renders
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    Array(FRAME_COUNT).fill(null),
  );
  const loadedCountRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const firstFrameDrawn = useRef(false); // draw frame-0 exactly once
  const isReadyRef = useRef(false); // set once after first paint

  // State — kept minimal to avoid cascade re-renders
  const [progress, setProgress] = useState(0); // 0–100
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ─── Mobile detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BP);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── Batched image loader ──────────────────────────────────────────────────
  // Loads BATCH_SIZE frames every BATCH_DELAY_MS to avoid spiking memory or
  // overwhelming the dev server with 79 simultaneous requests.
  useEffect(() => {
    let cancelled = false;
    loadedCountRef.current = 0;
    firstFrameDrawn.current = false;

    const images = imagesRef.current;

    const onFrameLoaded = (idx: number, img: HTMLImageElement | null) => {
      if (cancelled) return;
      images[idx] = img;
      loadedCountRef.current += 1;

      // Update progress state only at milestones (not 79 individual updates)
      const pct = Math.floor((loadedCountRef.current / FRAME_COUNT) * 100);
      setProgress(pct);
    };

    const loadBatch = (startIdx: number) => {
      if (cancelled) return;
      const end = Math.min(startIdx + BATCH_SIZE, FRAME_COUNT);

      for (let i = startIdx; i < end; i++) {
        const frameNum = START_FRAME + i;
        const img = new Image();
        img.decoding = "async";

        const capturedIdx = i;
        img.onload = () => onFrameLoaded(capturedIdx, img);
        img.onerror = () => onFrameLoaded(capturedIdx, null); // still count it

        const paddedNum = String(frameNum).padStart(3, "0");
        img.src = `/frames/ezgif-frame-${paddedNum}.jpg`;
      }

      if (end < FRAME_COUNT) {
        setTimeout(() => loadBatch(end), BATCH_DELAY_MS);
      }
    };

    loadBatch(0);
    return () => {
      cancelled = true;
    };
  }, []); // runs once — no deps

  // ─── drawFrame — stable ref, zero state deps ───────────────────────────────
  // IMPORTANT: this function intentionally has NO state in its dependency array.
  // isReadyRef is a ref so we can update it without recreating the function.
  const drawFrame = useCallback((rawIndex: number) => {
    const idx = Math.max(0, Math.min(Math.floor(rawIndex), FRAME_COUNT - 1));
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = 1; // Forced to 1 to save GPU fill-rate on low-power devices
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    // Only resize backing store when dimensions actually change
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Crop bottom 8% to hide watermark
    const srcW = img.naturalWidth;
    const srcH = img.naturalHeight * 0.92;
    const imgR = srcW / srcH;
    const canR = rect.width / rect.height;

    let dw: number, dh: number;
    if (canR > imgR) {
      // Canvas is wider relative to height than the image -> match width
      dw = rect.width;
      dh = dw / imgR;
    } else {
      // Canvas is taller relative to width than the image -> match height
      dh = rect.height;
      dw = dh * imgR;
    }

    // On mobile, the focal point (cart) is generally near the center-bottom, 
    // but the default center-cropping might chop it off.
    // However, exact center horizontal cropping is usually fine.
    const offsetX = (rect.width - dw) / 2;
    // Shift slightly down on mobile to make room for top text, or keep centered
    const offsetY = (rect.height - dh) / 2;

    ctx.drawImage(img, 0, 0, srcW, srcH, offsetX, offsetY, dw, dh);

    // Mark ready — use ref to avoid recreating this callback
    if (!isReadyRef.current) {
      isReadyRef.current = true;
      setIsReady(true);
    }
  }, []); // ← intentionally empty; all mutable state is via refs

  // ─── Schedule a RAF draw, cancelling any pending one ──────────────────────
  const scheduleFrame = useCallback(
    (idx: number) => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        drawFrame(idx);
      });
    },
    [drawFrame],
  );

  // ─── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ─── Draw frame 0 exactly once when it becomes available ──────────────────
  useEffect(() => {
    if (firstFrameDrawn.current) return;
    if (progress < 1) return; // at least one frame loaded

    const img = imagesRef.current[0];
    if (!img) return;

    firstFrameDrawn.current = true;
    scheduleFrame(0);
  }, [progress, scheduleFrame]); // progress changes ~8 times (milestones), not 79

  // ─── Scroll hook — 600vh container + sticky panel on all screen sizes ─────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Soften the raw scroll value to prevent CPU locking on heavy scroll events
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  const frameIndex = useTransform(
    smoothProgress,
    [0, 1],
    [0, FRAME_COUNT - 1],
  );

  // Drive animation on every device — guard removed so mobile works too
  useMotionValueEvent(frameIndex, "change", (latest) => {
    scheduleFrame(latest);
  });

  // ─── Redraw on window resize ───────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => scheduleFrame(frameIndex.get());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [scheduleFrame, frameIndex]);

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Preloader — shown until the first frame is painted */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0F1B2D]"
            exit={{
              opacity: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-12 h-12 bg-[#E5B220] rounded-xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(229,178,32,0.4)]"
            >
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 8L8 14L2 8L8 2Z" fill="#0F1B2D" />
              </svg>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E5B220] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="mt-4 text-zinc-600 text-[10px] uppercase tracking-[0.25em] font-bold">
              {progress < 100 ? `Loading ${progress}%` : "Starting…"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/*
        Hero wrapper:
          • Always 600vh so useScroll has room to track on mobile + desktop
          • Inner panel is sticky top-0 so it fills the viewport the entire time
      */}
      <div
        id="main-layout"
        ref={containerRef}
        className="relative w-full"
        style={{ height: "600vh" }}
      >
        {/* Sticky full-screen panel */}
        <div
          className="sticky top-0 w-full overflow-hidden bg-[#0F1B2D]"
          style={{ height: "100dvh" }}
        >
          {/* Canvas — z-0, behind all overlays */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 0,
              opacity: isReady ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          />

          {/* Readability gradient over canvas */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(15,27,45,0.9) 0%, rgba(15,27,45,0.4) 35%, transparent 70%), linear-gradient(90deg, rgba(15,27,45,0.9) 0%, rgba(15,27,45,0.3) 50%, transparent 100%)",
            }}
          />

          {/* Bottom fade into the section below (now slate-50 for light mode) */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{
              zIndex: 2,
              background:
                "linear-gradient(to top, #f8fafc 0%, rgba(248,250,252,0.8) 50%, transparent 100%)",
            }}
          />

          {/* Hero text — z-10, always on top */}
          <div className="relative w-full h-full" style={{ zIndex: 10 }}>
            <HeroContent isMobile={isMobile} isLoaded={progress === 100} />
          </div>
        </div>
      </div>
    </>
  );
}
