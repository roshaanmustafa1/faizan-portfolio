"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface SiteLoaderProps {
  onLoaded?: () => void;
}

export function SiteLoader({ onLoaded }: SiteLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Lock scrolling while loader is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress simulation with dynamic easing to match real asset readiness
    const startTime = performance.now();
    let currentProgress = 0;
    let animFrame: number;

    const updateCounter = () => {
      const elapsed = performance.now() - startTime;
      
      // Accelerate smoothly to 100% over ~1.6s
      if (elapsed < 600) {
        currentProgress = Math.min(45, (elapsed / 600) * 45);
      } else if (elapsed < 1200) {
        currentProgress = 45 + Math.min(45, ((elapsed - 600) / 600) * 45);
      } else if (elapsed < 1600) {
        currentProgress = 90 + Math.min(10, ((elapsed - 1200) / 400) * 10);
      } else {
        currentProgress = 100;
      }

      const rounded = Math.floor(currentProgress);
      setProgress(rounded);

      if (currentProgress < 100) {
        animFrame = requestAnimationFrame(updateCounter);
      } else {
        // Finished reaching 100%
        setTimeout(() => {
          exitLoader();
        }, 150);
      }
    };

    animFrame = requestAnimationFrame(updateCounter);

    const exitLoader = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          document.body.style.overflow = originalOverflow;
          if (onLoaded) {
            onLoaded();
          }
        },
      });

      // 1. Fade out the center emblem & progress bar
      tl.to(contentRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.45,
        ease: "power2.inOut",
      });

      // 2. Smooth curtain wipe upward
      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "-=0.15"
      );
    };

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0c] text-white select-none overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(23,194,179,0.06)_0%,rgba(10,10,12,0.95)_75%)] pointer-events-none" />
      <div className="absolute -top-32 -left-32 z-0 h-[500px] w-[500px] rounded-full bg-indigo-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 z-0 h-[500px] w-[500px] rounded-full bg-[#17c2b3]/15 blur-[120px] pointer-events-none" />

      {/* Main Content (Emblem + Progress) */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Animated Monogram / Logo Mark */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full border border-[#17c2b3]/25 animate-ping opacity-25" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#17c2b3]/20 via-transparent to-indigo-500/20 blur-sm animate-pulse" />

            {/* Circular badge container */}
            <div className="relative w-full h-full rounded-full border border-white/10 bg-[#121216]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(23,194,179,0.15)]">
              <span className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                F<span className="text-[#17c2b3]">K</span>
              </span>
              <div className="w-6 h-[1.5px] bg-[#17c2b3] mt-1 rounded-full" />
            </div>
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-1.5 mb-10">
          <h2 className="font-syne font-bold text-lg sm:text-xl tracking-[0.2em] uppercase text-white">
            Faizan Karamat
          </h2>
          <p className="font-manrope text-xs tracking-[0.16em] uppercase text-white/50">
            Medical Billing &amp; RCM Specialist
          </p>
        </div>

        {/* Progress Counter & Bar */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] flex flex-col items-center gap-3">
          <div className="w-full flex items-center justify-between text-xs font-syne font-bold">
            <span className="tracking-[0.2em] text-white/40 uppercase">Loading</span>
            <span
              ref={progressTextRef}
              className="text-base sm:text-lg font-bold tabular-nums tracking-[0.15em] text-[#17c2b3]"
            >
              {progress}%
            </span>
          </div>

          {/* Progress Track */}
          <div
            className="w-full h-[3px] rounded-full bg-white/10 overflow-hidden relative"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-gradient-to-r from-[#17c2b3] to-[#4ade80] shadow-[0_0_12px_#17c2b3] transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
