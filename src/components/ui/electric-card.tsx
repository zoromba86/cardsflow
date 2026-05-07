"use client";

import React, { useId } from "react";

export type ElectricCardProps = {
  /** Visual style: "swirl" = displacement + traveling turbulence; "hue" = animated hue turbulence */
  variant?: "swirl" | "hue";
  /** Accent / border color (any valid CSS color). */
  color?: string;
  /** Badge text in the top pill. */
  badge?: string;
  /** Title text. */
  title?: string;
  /** Description text. */
  description?: string;
  /** Fixed card width (e.g. "22rem", "360px"). Default is 22rem. */
  width?: string;
  /** Aspect ratio of the card (e.g. "7 / 10", "3 / 4"). */
  aspectRatio?: string;
  /** Extra class names for the outer wrapper (optional). */
  className?: string;
};

/**
 * ElectricCard — Performant version
 *
 * Replaced the heavy SVG feTurbulence / feDisplacementMap filter pipeline
 * with CSS-only conic-gradient animation. This eliminates the main-thread
 * SVG filter recalculations that caused severe scroll jank.
 *
 * Visual result: animated glowing border with the same premium aesthetic.
 */
const ElectricCard = ({
  variant = "swirl",
  color = "#dd8448",
  badge = "Dramatic",
  title = "Original",
  description = "In case you'd like to emphasize something very dramatically.",
  width = "22rem",
  aspectRatio = "7 / 10",
  className = "",
}: ElectricCardProps) => {
  useId();

  // Determine animation speed based on variant
  const animDuration = variant === "hue" ? "3s" : "4s";

  return (
    <div className={`ec-wrap ${className}`}>
      <div
        className="ec-card"
        style={{
          ["--ec-color" as string]: color,
          ["--ec-width" as string]: width,
          ["--ec-ratio" as string]: aspectRatio,
          ["--ec-dur" as string]: animDuration,
        }}
      >
        {/* Animated border glow — uses @property animation via conic-gradient */}
        <div className="ec-border" />

        {/* Card surface */}
        <div className="ec-surface" />

        {/* Ambient glow behind the card */}
        <div className="ec-glow" />

        {/* Content */}
        <div className="ec-content">
          <div className="ec-content-top">
            <div className="ec-badge">{badge}</div>
            <p className="ec-title">{title}</p>
          </div>

          <hr className="ec-divider" />

          <div className="ec-content-bottom">
            <p className="ec-desc">{description}</p>
          </div>
        </div>
      </div>

      <style>{`
        .ec-wrap {
          position: relative;
          display: inline-block;
          color-scheme: light dark;
        }

        .ec-card {
          position: relative;
          width: var(--ec-width);
          aspect-ratio: var(--ec-ratio);
          border-radius: 1.5em;
          overflow: visible;
        }

        /* ── Animated border ────────────────────────── */
        .ec-border {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            var(--ec-color),
            transparent 60deg,
            transparent 120deg,
            var(--ec-color) 180deg,
            transparent 240deg,
            transparent 300deg,
            var(--ec-color) 360deg
          );
          animation: ec-spin var(--ec-dur) linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        @keyframes ec-spin {
          to { transform: rotate(360deg) translateZ(0); }
        }

        /* ── Card surface ───────────────────────────── */
        .ec-surface {
          position: absolute;
          inset: 2px;
          border-radius: calc(1.5em - 2px);
          background: white;
          z-index: 1;
        }

        /* ── Ambient glow behind card ───────────────── */
        .ec-glow {
          position: absolute;
          inset: -12px;
          border-radius: 2em;
          background: radial-gradient(
            ellipse at 50% 50%,
            var(--ec-color),
            transparent 70%
          );
          opacity: 0.15;
          filter: blur(24px);
          z-index: -1;
          pointer-events: none;
          transform: translateZ(0);
        }

        /* ── Content layout ─────────────────────────── */
        .ec-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          border-radius: 1.5em;
          overflow: hidden;
        }

        .ec-content-top {
          display: flex;
          flex-direction: column;
          padding: 32px;
          padding-bottom: 16px;
          flex: 1;
        }

        .ec-content-bottom {
          display: flex;
          flex-direction: column;
          padding: 32px;
          padding-top: 16px;
        }

        .ec-badge {
          background: radial-gradient(
              47.2% 50% at 50.39% 88.37%,
              rgba(255, 255, 255, 0.12) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            rgba(0, 0, 0, 0.04);
          position: relative;
          transition: background 0.3s ease;
          border-radius: 999px;
          width: fit-content;
          height: fit-content;
          padding: 0.5em 1.25em;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.75em;
          letter-spacing: 0.08em;
          color: rgba(0, 0, 0, 0.75);
        }
        .ec-badge::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            150deg,
            rgba(0, 0, 0, 0.12) 16.73%,
            rgba(0, 0, 0, 0.04) 30.2%,
            rgba(0, 0, 0, 0.04) 68.2%,
            rgba(0, 0, 0, 0.12) 81.89%
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          pointer-events: none;
        }

        .ec-title {
          font-size: 1.85em;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-top: auto;
          color: #0f172a;
        }

        .ec-desc {
          opacity: 0.75;
          font-size: 0.95em;
          line-height: 1.5;
          color: #334155;
        }

        .ec-divider {
          margin-top: auto;
          border: none;
          height: 1px;
          background-color: #0f172a;
          opacity: 0.1;
          mask-image: linear-gradient(to right, transparent, black, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black, transparent);
        }
      `}</style>
    </div>
  );
};

export { ElectricCard };
