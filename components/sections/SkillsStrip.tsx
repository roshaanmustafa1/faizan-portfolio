"use client";

import React from "react";
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
            Validated hands-on expertise managing high-volume U.S. healthcare billing, AR recovery, and payer interactions.
          </p>
        </div>
      </div>

      <Swiper
        key="skills-continuous-autoplay"
        id="skills-carousel"
        className={styles.viewport}
        modules={[Autoplay, A11y]}
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
            <SwiperSlide key={`${skill.id}-${index}`}>
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
    </section>
  );
}
