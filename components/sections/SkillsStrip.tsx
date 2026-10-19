"use client";

import React, { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FileText,
  RefreshCw,
  TrendingUp,
  ShieldAlert,
  DollarSign,
  PhoneCall,
  CheckCircle2,
  Layers,
  Users,
  BarChart3,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import styles from "./SkillsStrip.module.css";

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileText className="w-12 h-12 text-[#17c2b3]" />,
  RefreshCw: <RefreshCw className="w-12 h-12 text-[#17c2b3]" />,
  TrendingUp: <TrendingUp className="w-12 h-12 text-[#17c2b3]" />,
  ShieldAlert: <ShieldAlert className="w-12 h-12 text-[#17c2b3]" />,
  DollarSign: <DollarSign className="w-12 h-12 text-[#17c2b3]" />,
  PhoneCall: <PhoneCall className="w-12 h-12 text-[#17c2b3]" />,
  CheckCircle2: <CheckCircle2 className="w-12 h-12 text-[#17c2b3]" />,
  Layers: <Layers className="w-12 h-12 text-[#17c2b3]" />,
  Users: <Users className="w-12 h-12 text-[#17c2b3]" />,
  BarChart3: <BarChart3 className="w-12 h-12 text-[#17c2b3]" />,
};

export function SkillsStrip() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  function toggleAutoplay() {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;
    if (isPaused) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
    setIsPaused(!isPaused);
  }

  return (
    <section aria-label="Core RCM competencies" className="pt-0 lg:pt-20 bg-white relative z-20 overflow-hidden">
      <div className="sr-only">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-syne font-bold text-[#17c2b3] tracking-widest block mb-2">
              Core Competencies
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0f0e0e]">
              Specialized RCM Skills
            </h2>
          </div>
          <p className="text-sm text-[#545b63] max-w-md font-manrope">
            U.S. healthcare billing, A/R recovery, payer follow-up, and operational coordination.
          </p>
        </div>
      </div>

      <Swiper
        key="skills-continuous-autoplay"
        id="skills-carousel"
        data-entrance="up"
        data-entrance-duration="500"
        className={styles.viewport}
        modules={[Autoplay, A11y]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        slidesPerView="auto"
        spaceBetween={24}
        breakpoints={{ 640: { spaceBetween: 32 } }}
        speed={6000}
        loop
        grabCursor
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: true }}
        a11y={{ wrapperLiveRegion: false }}
        aria-label="RCM skills carousel"
        data-lenis-prevent
      >
          {[...PORTFOLIO_DATA.skills, ...PORTFOLIO_DATA.skills].map((skill, index) => (
            <SwiperSlide key={`${skill.id}-${index}`} aria-hidden={index >= PORTFOLIO_DATA.skills.length ? true : undefined}>
            <div
              className={`${styles.card} w-[196px] h-[290px] sm:h-[347px] rounded-[15px] sm:rounded-[300px] border border-black/10 bg-white p-6 flex flex-col items-center justify-between text-center shrink-0`}
            >
              {/* Circular Figure Container */}
              <div className="w-[136px] h-[136px] rounded-full bg-[#f3f3f3] flex items-center justify-center">
                <div>
                  {iconMap[skill.iconName] || <FileText className="w-12 h-12 text-[#17c2b3]" />}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 mb-3">
                <h4 className="font-syne font-bold text-lg text-[#0f0e0e] leading-tight mb-1">
                  {skill.name}
                </h4>
                <span className="font-syne font-semibold text-xs uppercase tracking-wider text-[#17c2b3] block mb-1">
                  {skill.category}
                </span>
                <span className="text-[11px] text-[#545b63] block leading-tight px-1">
                  {skill.description}
                </span>
              </div>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="textio-container flex justify-end pb-2">
        <button type="button" onClick={toggleAutoplay} aria-controls="skills-carousel" aria-pressed={isPaused} className="rounded px-3 py-2 text-xs font-medium text-[#545b63] hover:text-[#087c72] focus-visible:outline-2 focus-visible:outline-[#087c72]">
          {isPaused ? "Resume skills carousel" : "Pause skills carousel"}
        </button>
      </div>
    </section>
  );
}
