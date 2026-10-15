"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>("service-2");

  return (
    <section id="services" className="py-24 lg:py-[150px] bg-white relative z-10 overflow-hidden">
      <div className="textio-container relative">
        {/* Decorative Shape on Right */}
        <div className="hidden lg:block absolute top-0 right-0 pointer-events-none opacity-40">
          <Image
            src="/images/shape-black.svg"
            alt="Decorative vector"
            width={70}
            height={70}
            className="w-16 h-16 transform -scale-x-100 rotate-180"
          />
        </div>

        {/* Section Title with Textio bar & dot */}
        <div className="section-title mb-16">
          <h3 className="font-syne font-bold text-4xl lg:text-5xl text-[#0f0e0e]">
            Specialized Services
          </h3>
          <span className="title-bar" />
        </div>

        {/* Big Typography Interactive Rows */}
        <div className="divide-y divide-black/10 border-t border-black/10">
          {PORTFOLIO_DATA.services.map((service, idx) => {
            const isActive = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className="py-8 lg:py-12 transition-all duration-300 group"
              >
                <div
                  onClick={() => setActiveServiceId(isActive ? "" : service.id)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
                >
                  {/* Huge Typography Title */}
                  <div className="flex-1">
                    <span className="text-xs font-syne font-bold uppercase tracking-widest text-[#ff6b00] block mb-2">
                      0{idx + 1} / Specialization
                    </span>
                    <h3 className="font-syne font-bold text-3xl sm:text-5xl lg:text-7xl xl:text-[84px] text-[#0f0e0e] group-hover:text-[#ff6b00] transition-colors leading-[1.08] tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Toggle Indicator & Round View Button */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#0f0e0e] group-hover:border-[#ff6b00] group-hover:text-[#ff6b00] transition-colors">
                      {isActive ? <Minus size={22} /> : <Plus size={22} />}
                    </div>

                    <Link
                      href="/#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="hidden sm:inline-flex w-24 h-24 rounded-full bg-[#0f0e0e] text-white hover:bg-[#ff6b00] items-center justify-center font-syne font-bold text-xs uppercase tracking-wider transition-colors shadow-lg flex-col gap-1"
                    >
                      <span>Consult</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Expanded Accordion Panel */}
                {isActive && (
                  <div className="mt-8 pt-6 border-t border-black/5 animate-in slide-in-from-top-3 duration-300">
                    <p className="font-syne font-semibold text-base text-[#ff6b00] mb-4">
                      {service.tagline}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                      {service.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="font-manrope text-base sm:text-lg text-[#545b63] flex items-start gap-2.5"
                        >
                          <span className="text-[#ff6b00] font-bold text-lg leading-tight">+</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link href="/#contact" className="bttn-round">
            <span className="font-syne text-sm font-bold">All Services</span>
            <span className="text-xs text-[#ff6b00] uppercase tracking-wider flex items-center gap-1">
              Explore <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
