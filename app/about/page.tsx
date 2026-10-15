import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight, Award, Building2, Calendar, CheckCircle2, Download, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me | Faizan Karamat — Medical Billing & RCM Specialist",
  description:
    "Learn about Faizan Karamat's professional background, education, and 5+ years of experience in U.S. healthcare Revenue Cycle Management.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <PageBanner
          title="About Faizan Karamat"
          subtitle="Assistant Manager Billing & Operations with 5+ years optimizing U.S. healthcare revenue cycles."
          breadcrumb="About Me"
        />

        {/* Detailed Profile Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="textio-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Portrait & Fast Stats */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden bg-[#f3f3f3] border border-black/10 shadow-xl mb-8">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={PORTFOLIO_DATA.personal.portraitImage}
                      alt="Faizan Karamat"
                      fill
                      className="object-contain object-bottom p-4"
                      priority
                    />
                  </div>
                  <div className="p-6 bg-[#0f0e0e] text-white">
                    <h3 className="font-syne font-bold text-2xl text-white">Faizan Karamat</h3>
                    <p className="text-xs font-semibold text-[#ff6b00] uppercase tracking-wider mt-1">
                      {PORTFOLIO_DATA.personal.currentPosition}
                    </p>
                    <p className="text-xs text-white/70 mt-1">
                      {PORTFOLIO_DATA.personal.currentOrganization} • {PORTFOLIO_DATA.personal.location}
                    </p>
                  </div>
                </div>

                {/* Resume Download CTA Card */}
                <div className="p-6 rounded-2xl bg-[#f8f8f8] border border-black/10 flex items-center justify-between gap-4">
                  <div>
                    <h5 className="font-syne font-bold text-base text-[#0f0e0e]">Official Resume</h5>
                    <p className="text-xs text-[#545b63]">Complete verified career history (PDF)</p>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.personal.cvPath}
                    download="Faizan_Karamat_Medical_Billing_RCM_Resume.pdf"
                    className="bttn bttn-primary text-xs py-2.5 px-5 flex items-center gap-2"
                  >
                    <span>Download</span>
                    <Download size={15} />
                  </a>
                </div>
              </div>

              {/* Bio & Deep Dive */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-syne font-bold uppercase tracking-widest text-[#ff6b00] block mb-2">
                    Professional Biography
                  </span>
                  <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0f0e0e] leading-tight">
                    Dedicated to Precision, Compliance, and Healthcare Financial Health.
                  </h2>
                </div>

                <div className="space-y-4 font-manrope text-base sm:text-lg text-[#545b63] leading-relaxed">
                  <p>{PORTFOLIO_DATA.about.paragraphs[0]}</p>
                  <p>{PORTFOLIO_DATA.about.paragraphs[1]}</p>
                  <p>
                    From front-end patient demographic intake and charge scrubbing to back-end denial investigation and payer appeals, my workflow focuses on minimizing days in Accounts Receivable (AR) and maximizing net collection ratios for medical practices and multi-specialty health organizations.
                  </p>
                </div>

                {/* Key Career Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-5 rounded-xl border border-black/10 bg-white">
                    <Calendar className="w-6 h-6 text-[#ff6b00] mb-2" />
                    <h4 className="font-syne font-bold text-lg text-[#0f0e0e]">5+ Years in RCM</h4>
                    <p className="text-xs text-[#545b63] mt-1 font-manrope">
                      Dedicated career progression in U.S. medical billing workflows.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-black/10 bg-white">
                    <Building2 className="w-6 h-6 text-[#ff6b00] mb-2" />
                    <h4 className="font-syne font-bold text-lg text-[#0f0e0e]">F&A Global, PRG & CureMD</h4>
                    <p className="text-xs text-[#545b63] mt-1 font-manrope">
                      Proven track record across leading healthcare operations organizations.
                    </p>
                  </div>
                </div>

                {/* Education Section */}
                <div className="pt-6 border-t border-black/10">
                  <span className="text-xs font-syne font-bold uppercase tracking-widest text-[#ff6b00] block mb-3">
                    Academic Background
                  </span>
                  <div className="p-6 rounded-2xl bg-[#f3f3f3] border border-black/10 flex items-start gap-4">
                    <GraduationCap className="w-8 h-8 text-[#ff6b00] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-syne font-bold text-xl text-[#0f0e0e]">
                        {PORTFOLIO_DATA.education[0].degree}
                      </h4>
                      <div className="text-sm text-[#545b63] font-manrope mt-1">
                        {PORTFOLIO_DATA.education[0].institution} • {PORTFOLIO_DATA.education[0].location}
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs font-syne font-bold text-[#ff6b00] bg-white px-2.5 py-0.5 rounded">
                          CGPA: {PORTFOLIO_DATA.education[0].cgpa}
                        </span>
                        <span className="text-xs text-[#545b63]">
                          {PORTFOLIO_DATA.education[0].period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Strip */}
        <SkillsStrip />
      </main>

      <Footer />
    </div>
  );
}
