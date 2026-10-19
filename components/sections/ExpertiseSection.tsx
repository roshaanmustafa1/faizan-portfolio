"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA, CapabilityProject } from "@/data/portfolio";
import { ExpertiseCard } from "./ExpertiseCard";

export function ExpertiseSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Expertise");
  const [selectedProject, setSelectedProject] = useState<CapabilityProject | null>(null);

  const filters = ["All Expertise", "Accounts Receivable", "Claims", "Denials", "Operations"];

  const filteredProjects = activeFilter === "All Expertise"
    ? PORTFOLIO_DATA.capabilities
    : PORTFOLIO_DATA.capabilities.filter((p) => p.category === activeFilter);

  return (
    <section id="expertise" className="py-16 lg:py-24 bg-[#0f0e0e] text-white relative z-10">
      <div className="textio-container">
        {/* Title & Filter Bar */}
        <div className="flex flex-col gap-8 mb-8">
          {/* Section Title */}
          <div className="section-title section-title-dark">
            <h2 className="font-syne font-semibold text-3xl lg:text-4xl text-white">
              RCM Expertise in Action
            </h2>
            <span className="title-bar" />
          </div>

          {/* Filter Categories */}
          <nav aria-label="Filter expertise" className="flex flex-wrap items-center gap-2" data-entrance="right" data-entrance-duration="400">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`text-xs sm:text-sm font-medium transition-colors px-4 py-2 rounded-full border cursor-pointer ${
                    isActive ? "text-[#17c2b3] border-[#17c2b3]/40 bg-[#17c2b3]/10" : "text-white/60 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <ExpertiseCard key={project.id} project={project} delay={(index % 3) * 80} onSelect={() => setSelectedProject(project)} />
          ))}
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-[#17c2b3] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-syne font-bold uppercase tracking-wider text-[#17c2b3] bg-black/60 px-3 py-1 rounded-full">
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
                      <CheckCircle className="w-5 h-5 text-[#17c2b3] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#f3f3f3] rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#17c2b3] shrink-0" />
                  <div>
                    <div className="font-syne font-bold text-sm text-[#0f0e0e]">Professional Background</div>
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
