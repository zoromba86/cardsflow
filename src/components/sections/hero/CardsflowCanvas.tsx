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
const BATCH_SIZE = 5;       // images loaded per tick
const BATCH_DELAY_MS = 100; // ms between batches — keeps network calm
const MOBILE_BP = 768;

// ─── Dev-mode guard ───────────────────────────────────────────────────────────
// In development, Next.js Fast Refresh re-mounts components on every file save.
// The preloader (which needs images to load before hiding) would block the entire
// screen for 5-10 seconds after every save — causing the "freeze" the user sees.
// Bypassing the preloader in dev means the canvas just fades in silently while
// images load, with zero blocking. Production is unaffected.
const IS_DEV = process.env.NODE_ENV === "development";

// ─── Component ────────────────────────────────────────────────────────────────
export default function CardsflowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);

  // All loaded Image objects stored in a plain ref — never triggers re-renders
  const imagesRef      = useRef<(HTMLImageElement | null)[]>(Array(FRAME_COUNT).fill(null));
  const loadedCountRef = useRef(0);
  const rafRef         = useRef<number | null>(null);
  const firstFrameDrawn = useRef(false);

  // In dev: start ready so the preloader never blocks after a hot-reload
  const [progress, setProgress] = useState(IS_DEV ? 100 : 0);
  const [isReady,  setIsReady]  = useState(IS_DEV);        // ← key fix
  const [isMobile, setIsMobile] = useState(false);

  // ─── Mobile detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BP);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── Batched image loader ──────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    loadedCountRef.current = 0;
    firstFrameDrawn.current = false;

    const images = imagesRef.current;

    const onFrameLoaded = (idx: number, img: HTMLImageElement | null) => {
      if (cancelled) return;
      images[idx] = img;
      loadedCountRef.current += 1;

      const pct = Math.floor((loadedCountRef.current / FRAME_COUNT) * 100);
      // In dev we never show the preloader, so no need to track progress state
      if (!IS_DEV) setProgress(pct);
    };

    const loadBatch = (startIdx: number) => {
      if (cancelled) return;
      const end = Math.min(startIdx + BATCH_SIZE, FRAME_COUNT);

      for (let i = startIdx; i < end; i++) {
        const frameNum = START_FRAME + i;
        const img = new Image();
        img.decoding = "async";

        const capturedIdx = i;
        img.onload  = () => onFrameLoaded(capturedIdx, img);
        img.onerror = () => onFrameLoaded(capturedIdx, null);

        const paddedNum = String(frameNum).padStart(3, "0");
        img.src = `/frames/ezgif-frame-${paddedNum}.jpg`;
      }

      if (end < FRAME_COUNT) {
        setTimeout(() => loadBatch(end), BATCH_DELAY_MS);
      }
    };

    loadBatch(0);
    return () => { cancelled = true; };
  }, []); // runs once — no deps

  // ─── drawFrame — stable ref, zero state deps ───────────────────────────────
  const drawFrame = useCallback((rawIndex: number) => {
    const idx = Math.max(0, Math.min(Math.floor(rawIndex), FRAME_COUNT - 1));
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr  = 1; // Forced to 1 to save GPU fill-rate on low-power devices
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const targetW = Math.round(rect.width  * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width  = targetW;
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
      dw = rect.width;
      dh = dw / imgR;
    } else {
      dh = rect.height;
      dw = dh * imgR;
    }

    const offsetX = (rect.width  - dw) / 2;
    const offsetY = (rect.height - dh) / 2;

    ctx.drawImage(img, 0, 0, srcW, srcH, offsetX, offsetY, dw, dh);

    // Mark ready — functional update is safe across Fast Refresh cycles
    setIsReady((prev) => prev ? prev : true);
  }, []); // intentionally empty; all mutable state is via refs

  // ─── Schedule a RAF draw, cancelling any pending one ──────────────────────
  const scheduleFrame = useCallback(
    (idx: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        drawFrame(idx);
      });
    },
    [drawFrame],
  );

  // ─── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => {
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ─── Draw frame 0 exactly once when it becomes available ──────────────────
  useEffect(() => {
    if (firstFrameDrawn.current) return;
    if (progress < 1 && !IS_DEV) return;

    const img = imagesRef.current[0];
    if (!img) return;

    firstFrameDrawn.current = true;
    scheduleFrame(0);
  }, [progress, scheduleFrame]);

  // ─── Scroll hook ───────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(
    smoothProgress,
    [0, 0.5],
    [0, FRAME_COUNT - 1],
  );

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
      {/* Preloader — shown in PRODUCTION only until first frame is painted */}
      {!IS_DEV && (
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
      )}

      <div
        id="main-layout"
        ref={containerRef}
        className="relative w-full"
        style={{ height: "250vh" }}
      >
        <div
          className="sticky top-0 w-full overflow-hidden bg-[#0F1B2D]"
          style={{ height: "100dvh" }}
        >
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

          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(15,27,45,0.9) 0%, rgba(15,27,45,0.4) 35%, transparent 70%), linear-gradient(90deg, rgba(15,27,45,0.9) 0%, rgba(15,27,45,0.3) 50%, transparent 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
            style={{
              zIndex: 2,
              background:
                "linear-gradient(to top, #f8fafc 0%, rgba(248,250,252,0.8) 50%, transparent 100%)",
            }}
          />

          <div className="relative w-full h-full" style={{ zIndex: 10 }}>
            <HeroContent isMobile={isMobile} isLoaded={progress === 100} />
          </div>
        </div>
      </div>
    </>
  );
}
