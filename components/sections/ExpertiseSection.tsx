"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, CheckCircle, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA, CapabilityProject } from "@/data/portfolio";

export function ExpertiseSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Expertise");
  const [selectedProject, setSelectedProject] = useState<CapabilityProject | null>(null);

  const filters = ["All Expertise", "Accounts Receivable", "Claims", "Denials", "Operations"];

  const filteredProjects = activeFilter === "All Expertise"
    ? PORTFOLIO_DATA.capabilities
    : PORTFOLIO_DATA.capabilities.filter((p) => p.category === activeFilter);

  return (
    <section id="expertise" className="py-24 lg:py-[150px] bg-[#0f0e0e] text-white relative z-10">
      <div className="textio-container">
        {/* Title & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/10">
          {/* Section Title */}
          <div className="section-title section-title-dark">
            <h3 className="font-syne font-bold text-4xl lg:text-5xl text-white">
              RCM Expertise in Action
            </h3>
            <span className="title-bar" />
          </div>

          {/* Filter Categories */}
          <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-syne text-sm sm:text-base font-bold transition-all px-3 py-1.5 relative cursor-pointer ${
                    isActive ? "text-[#ff6b00]" : "text-white/60 hover:text-[#ff6b00]"
                  }`}
                >
                  {filter}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff6b00]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout like Textio
            let colSpan = "md:col-span-6 lg:col-span-4";
            if (project.size === "big") {
              colSpan = "md:col-span-12 lg:col-span-7";
            } else if (project.size === "mid") {
              colSpan = "md:col-span-12 lg:col-span-5";
            }

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group relative overflow-hidden aspect-[16/11] bg-[#1a1919] cursor-pointer transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Background Artwork */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Ambient Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="font-syne text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#ff6b00] border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover Center Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-20 h-20 rounded-full bg-[#ff6b00] text-white flex flex-col items-center justify-center font-syne font-bold text-sm shadow-2xl group-hover:bg-[#d55b04]">
                    <span>View</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Bottom Content Always Visible */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20">
                  <h4 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-[#ff6b00] transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-manrope line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link href="/expertise" className="bttn-round">
            <span className="font-syne text-sm font-bold">All Areas</span>
            <span className="text-xs text-[#ff6b00] uppercase tracking-wider flex items-center gap-1">
              Explore <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white text-[#0f0e0e] rounded-2xl overflow-hidden shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="relative aspect-[16/7] w-full bg-[#0f0e0e] overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e] to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-[#ff6b00] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-syne font-bold uppercase tracking-wider text-[#ff6b00] bg-black/60 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h5 className="font-syne font-bold text-lg text-[#0f0e0e] mb-2">Scope & Focus</h5>
                <p className="text-sm sm:text-base text-[#545b63] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h5 className="font-syne font-bold text-lg text-[#0f0e0e] mb-3">Key Responsibilities & Outcomes</h5>
                <ul className="space-y-2.5">
                  {selectedProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#0f0e0e]">
                      <CheckCircle className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#f3f3f3] rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#ff6b00] shrink-0" />
                  <div>
                    <div className="font-syne font-bold text-sm text-[#0f0e0e]">Verified RCM Experience</div>
                    <div className="text-xs text-[#545b63]">F&A Global, PRG Pakistan & CureMD</div>
                  </div>
                </div>
                <Link
                  href="/#contact"
                  onClick={() => setSelectedProject(null)}
                  className="bttn bttn-primary py-2 px-4 text-xs font-syne"
                >
                  Discuss
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
