"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLoader } from "./SiteLoader";
import { ScrollProgress } from "./ScrollProgress";
import { AnimationProvider, useAnimation } from "./AnimationContext";

function AnimationWrapper({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { isLoaded, setIsLoaded } = useAnimation();
  const [hasShownLoader, setHasShownLoader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Set up ScrollTrigger reveals once loader is finished or page is ready
  useEffect(() => {
    if (!isLoaded && !hasShownLoader) return;

    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // 1. Animate Section Titles (.section-title)
      const sectionTitles = root.querySelectorAll<HTMLElement>(".section-title");
      sectionTitles.forEach((title) => {
        const heading = title.querySelector("h2, h3, h4");
        const titleBar = title.querySelector(".title-bar");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (heading) {
          tl.from(heading, {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        if (titleBar) {
          tl.from(
            titleBar,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.8,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
        }
      });

      // 2. Animate all elements with [data-entrance] attribute
      const entranceElements = root.querySelectorAll<HTMLElement>("[data-entrance]");
      entranceElements.forEach((el) => {
        // Skip hero elements that are animated by HeroSection itself
        if (el.closest("header") || (el.closest("section")?.getAttribute("aria-labelledby") === "hero-heading")) {
          return;
        }

        const type = el.dataset.entrance || "up";
        const delay = (Number(el.dataset.entranceDelay) || 0) / 1000;
        const duration = Math.max(0.6, (Number(el.dataset.entranceDuration) || 600) / 1000);

        const fromVars: gsap.TweenVars = {
          opacity: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        };

        if (type === "up") {
          fromVars.y = 40;
        } else if (type === "down") {
          fromVars.y = -30;
        } else if (type === "left") {
          fromVars.x = -45;
        } else if (type === "right") {
          fromVars.x = 45;
        } else if (type === "zoom") {
          fromVars.scale = 0.92;
          fromVars.y = 20;
        } else if (type === "image-left") {
          fromVars.x = -50;
          fromVars.scale = 0.95;
        } else if (type === "image-right") {
          fromVars.x = 50;
          fromVars.scale = 0.95;
        }

        gsap.from(el, fromVars);
      });

      // 3. Stagger animate general cards and timeline milestones
      const cardGrids = root.querySelectorAll<HTMLElement>(
        "#expertise .grid, #capabilities .grid, #experience .space-y-12, #approach .grid"
      );

      cardGrids.forEach((grid) => {
        const items = grid.children;
        if (items.length > 0) {
          gsap.from(items, {
            opacity: 0,
            y: 35,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }
      });

      // Refresh ScrollTrigger after initial DOM calculations
      ScrollTrigger.refresh();
    }, rootRef);

    let refreshFrame = 0;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    root.querySelectorAll("[data-refresh-scroll]").forEach((section) => resizeObserver.observe(section));

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, [isLoaded, hasShownLoader, pathname]);

  return (
    <>
      {/* Site Preloader */}
      {!hasShownLoader && (
        <SiteLoader
          onLoaded={() => {
            setHasShownLoader(true);
            setIsLoaded(true);
          }}
        />
      )}

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main App Content */}
      <div ref={rootRef} className="contents">
        {children}
      </div>
    </>
  );
}

export function EntranceAnimations({ children }: { children: ReactNode }) {
  return (
    <AnimationProvider>
      <AnimationWrapper>{children}</AnimationWrapper>
    </AnimationProvider>
  );
}
