"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function MarqueeSection() {
  const items = PORTFOLIO_DATA.marquee;

  return (
    <div className="py-12 sm:py-16 bg-white overflow-hidden select-none border-y border-black/10">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First Loop */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <span key={`a-${idx}`} className="flex items-center">
              <span
                className={`font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase px-4 sm:px-6 ${
                  idx % 2 === 1 ? "text-stroke-black" : "text-[#0f0e0e]"
                }`}
              >
                {item}
              </span>
              <span className="text-[#17c2b3] font-syne font-bold text-2xl sm:text-4xl px-2">
                •
              </span>
            </span>
          ))}
        </div>

        {/* Second Duplicate Loop for Seamless Infinite Scroll */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <span key={`b-${idx}`} className="flex items-center">
              <span
                className={`font-syne font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase px-4 sm:px-6 ${
                  idx % 2 === 1 ? "text-stroke-black" : "text-[#0f0e0e]"
                }`}
              >
                {item}
              </span>
              <span className="text-[#17c2b3] font-syne font-bold text-2xl sm:text-4xl px-2">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
