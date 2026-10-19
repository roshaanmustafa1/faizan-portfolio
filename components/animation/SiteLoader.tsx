"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SiteLoaderProps {
  onLoaded?: () => void;
}

export function SiteLoader({ onLoaded }: SiteLoaderProps) {
  const [progress, setProgress] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const onLoadedRef = useRef(onLoaded);

  useEffect(() => {
    onLoadedRef.current = onLoaded;
  }, [onLoaded]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    let frame = 0;
    let exitTimer: ReturnType<typeof setTimeout>;
    let exitAnimation: gsap.core.Tween | undefined;

    function updateCounter() {
      const nextProgress = Math.min(100, 1 + Math.floor(((performance.now() - startTime) / 1800) * 99));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = requestAnimationFrame(updateCounter);
        return;
      }

      exitTimer = setTimeout(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        exitAnimation = gsap.to(containerRef.current, {
          opacity: 0,
          duration: reduceMotion ? 0 : 0.4,
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = originalOverflow;
            setIsDone(true);
            onLoadedRef.current?.();
          },
        });
      }, 150);
    }

    frame = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      exitAnimation?.kill();
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (isDone) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] overflow-hidden bg-[#0a0a0c] text-white select-none" aria-label="Loading portfolio" aria-busy="true">
      <div className="absolute right-4 bottom-6 flex w-[620px] max-w-[calc(100vw-32px)] flex-col items-end gap-5 sm:right-10 sm:bottom-10">
        <span aria-hidden="true" className="font-syne text-[220px] leading-none font-medium tabular-nums tracking-[-0.06em]">
          {progress}%
        </span>
        <div className="h-[3px] w-full overflow-hidden bg-white/20" role="progressbar" aria-label="Loading portfolio" aria-valuenow={progress} aria-valuemin={1} aria-valuemax={100}>
          <div className="h-full origin-left bg-white" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  );
}
