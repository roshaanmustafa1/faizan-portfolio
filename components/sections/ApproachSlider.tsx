"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ApproachSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = PORTFOLIO_DATA.approach;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[currentIndex];

  return (
    <section id="approach" className="py-24 lg:py-36 bg-white relative overflow-hidden z-10">
      <div className="textio-container relative">
        {/* Giant Ambient Watermark */}
        <div className="font-syne font-extrabold text-[80px] sm:text-[120px] lg:text-[170px] text-black/[0.04] leading-none uppercase select-none pointer-events-none mb-4 -ml-2">
          APPROACH
        </div>

        {/* Decorative Quote Mark & Style Graphics */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-12 relative opacity-70">
            <Image
              src="/images/testimonial/quate.png"
              alt="Quote icon"
              width={104}
              height={76}
              className="w-full h-auto object-contain"
            />
          </div>
          <span className="font-syne font-bold text-xs uppercase tracking-widest text-[#17c2b3]">
            Operational Philosophy & Standards
          </span>
        </div>

        {/* Slider Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Statement Content */}
          <div className="lg:col-span-8 space-y-6" data-entrance="left" data-entrance-duration="600">
            <div className="inline-block px-3 py-1 rounded bg-[#f3f3f3] text-xs font-syne font-bold text-[#17c2b3] uppercase tracking-wider">
              {current.role}
            </div>

            <h3 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0f0e0e] leading-snug">
              &ldquo;{current.description}&rdquo;
            </h3>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between">
              <div>
                <h5 className="font-syne font-bold text-lg text-[#0f0e0e]">{current.title}</h5>
                <p className="text-sm text-[#545b63] font-manrope">{current.subtitle}</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-black/10 bg-white hover:bg-[#0f0e0e] text-[#0f0e0e] hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Previous approach"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-black/10 bg-[#0f0e0e] hover:bg-[#17c2b3] text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label="Next approach"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-4 relative flex justify-center" data-entrance="image-right" data-entrance-duration="1000" data-entrance-delay="100">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-[#f3f3f3]">
              <Image
                src={current.image}
                alt="Faizan Karamat, Medical Billing and RCM Specialist"
                fill
                sizes="(max-width: 767px) 100vw, 340px"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-syne font-bold uppercase tracking-wider text-[#17c2b3]">
                  Core Standard
                </span>
                <div className="font-syne font-bold text-lg text-white mt-1">
                  Faizan Karamat
                </div>
                <div className="text-xs text-white/70">
                  Assistant Manager Billing & Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
