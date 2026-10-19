"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <div className="bg-[#f3f3f3] py-20 lg:py-28 border-b border-black/10 text-center relative overflow-hidden">
      <div className="textio-container relative z-10">
        <h1 data-entrance="down" data-entrance-duration="500" className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0f0e0e] tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p data-entrance="up" data-entrance-duration="400" data-entrance-delay="100" className="font-manrope text-base sm:text-lg text-[#545b63] max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        <div data-entrance="fade" data-entrance-duration="300" data-entrance-delay="180" className="flex items-center justify-center gap-2 font-syne text-sm font-bold text-[#545b63]">
          <Link href="/" className="hover:text-[#17c2b3] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#17c2b3]" />
          <span className="text-[#17c2b3]">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
}
