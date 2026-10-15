"use client";

import React from "react";
import { Building2, Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 lg:py-36 bg-white relative z-10 overflow-hidden">
      <div className="textio-container">
        {/* Section Title with Textio bar & dot */}
        <div className="section-title mb-16">
          <h3 className="font-syne font-bold text-4xl lg:text-5xl text-[#0f0e0e]">
            Career Progression
          </h3>
          <span className="title-bar" />
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-black/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {PORTFOLIO_DATA.experience.map((job, idx) => (
            <div key={job.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                  job.isCurrent
                    ? "bg-[#17c2b3] ring-4 ring-[#17c2b3]/20 scale-125"
                    : "bg-[#0f0e0e] group-hover:bg-[#17c2b3]"
                }`}
              />

              {/* Date Box for desktop (left aligned) */}
              <div className="md:absolute md:-left-36 md:top-0 md:w-28 text-left md:text-right mb-2 md:mb-0">
                <span className="inline-block text-xs font-syne font-bold uppercase tracking-wider text-[#17c2b3] bg-[#f3f3f3] px-2.5 py-1 rounded">
                  {job.period.split(" – ")[0]}
                </span>
                <span className="block text-xs text-[#545b63] font-manrope mt-1">
                  {job.period.split(" – ")[1] || ""}
                </span>
              </div>

              {/* Main Role Card */}
              <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-[#17c2b3]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-syne font-bold text-xl sm:text-2xl text-[#0f0e0e] group-hover:text-[#17c2b3] transition-colors">
                      {job.role}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-[#545b63] mt-1 font-manrope">
                      <span className="font-semibold text-[#0f0e0e] flex items-center gap-1.5">
                        <Building2 size={16} className="text-[#17c2b3]" />
                        {job.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {job.isCurrent && (
                    <span className="self-start sm:self-auto text-xs font-syne font-bold px-3 py-1 rounded-full bg-[#0f0e0e] text-white">
                      Current Position
                    </span>
                  )}
                </div>

                {/* Key Responsibilities */}
                <div className="mt-4 pt-4 border-t border-black/5">
                  <span className="text-xs font-syne font-bold uppercase tracking-wider text-[#545b63] block mb-3">
                    Core Operational Impact
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs sm:text-sm font-manrope text-[#545b63] flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-[#17c2b3] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Education Milestone in Timeline */}
          <div className="relative pl-6 sm:pl-10">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#545b63] border-2 border-white" />

            <div className="md:absolute md:-left-36 md:top-0 md:w-28 text-left md:text-right mb-2 md:mb-0">
              <span className="inline-block text-xs font-syne font-bold uppercase tracking-wider text-[#0f0e0e] bg-[#f3f3f3] px-2.5 py-1 rounded">
                2017 – 2021
              </span>
            </div>

            <div className="bg-[#f3f3f3] border border-black/10 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-[#17c2b3]" />
                <h4 className="font-syne font-bold text-lg sm:text-xl text-[#0f0e0e]">
                  {PORTFOLIO_DATA.education[0].degree}
                </h4>
              </div>
              <div className="text-sm font-manrope text-[#545b63]">
                {PORTFOLIO_DATA.education[0].institution} • {PORTFOLIO_DATA.education[0].location}
              </div>
              <div className="inline-block mt-3 px-3 py-1 rounded bg-white text-xs font-syne font-bold text-[#17c2b3] border border-black/5">
                CGPA: {PORTFOLIO_DATA.education[0].cgpa}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
