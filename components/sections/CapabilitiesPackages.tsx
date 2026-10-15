"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function CapabilitiesPackages() {
  return (
    <section id="capabilities" className="py-24 lg:py-[150px] bg-white relative z-10 overflow-hidden">
      <div className="textio-container">
        {/* Section Title with Textio bar & dot */}
        <div className="section-title mb-16">
          <h3 className="font-syne font-bold text-4xl lg:text-5xl text-[#0f0e0e]">
            Core Capabilities
          </h3>
          <span className="title-bar" />
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white hover:bg-[#0f0e0e] border border-black/10 p-8 sm:p-12 flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                {/* Package Category & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-syne text-xs font-bold uppercase tracking-wider text-[#ff6b00]">
                    {pkg.category}
                  </span>
                  {pkg.recommended && (
                    <span className="text-[11px] font-syne font-bold bg-[#ff6b00] text-white px-2.5 py-0.5 rounded-full">
                      Primary Focus
                    </span>
                  )}
                </div>

                {/* Package Name */}
                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#0f0e0e] group-hover:text-white transition-colors mb-2">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="font-manrope text-sm text-[#545b63] group-hover:text-white/70 transition-colors mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* "Includes" Banner with Arrow Flag */}
                <div className="relative my-6 flex items-center">
                  <div className="bg-[#0f0e0e] group-hover:bg-white/10 text-white font-syne font-bold text-xs uppercase tracking-wider px-4 py-2 transition-colors">
                    Includes
                  </div>
                  <div className="w-4 h-4 relative -ml-1">
                    <Image
                      src="/images/pricing/arrow-black.svg"
                      alt="Flag arrow"
                      width={16}
                      height={16}
                      className="block group-hover:hidden"
                    />
                    <Image
                      src="/images/pricing/arrow-white.svg"
                      alt="Flag arrow"
                      width={16}
                      height={16}
                      className="hidden group-hover:block"
                    />
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-manrope text-[#545b63] group-hover:text-white/90 transition-colors flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0f0e0e]/20 group-hover:bg-[#ff6b00] shrink-0 mt-1.5 transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="/#contact"
                className="w-full py-3 px-6 rounded border border-[#0f0e0e] group-hover:border-[#ff6b00] bg-transparent group-hover:bg-[#ff6b00] text-[#0f0e0e] group-hover:text-white font-syne font-bold text-center text-sm flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Discuss Expertise</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
