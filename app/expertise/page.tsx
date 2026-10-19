import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSlider } from "@/components/sections/ApproachSlider";
import { CoreExpertiseSection } from "@/components/sections/CoreExpertiseSection";
import { MedicalSpecialtiesSection } from "@/components/sections/MedicalSpecialtiesSection";
import { TechnicalSkillsSection } from "@/components/sections/TechnicalSkillsSection";
import { RcmMetricsSection } from "@/components/sections/RcmMetricsSection";

export const metadata: Metadata = {
  title: "RCM Expertise & Capabilities | Faizan Karamat",
  description:
    "Explore Faizan Karamat's U.S. healthcare RCM capabilities, medical specialty billing workflows, payer knowledge, technical skills, and operational performance metrics.",
};

export default function ExpertisePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <PageBanner
          title="RCM Expertise & Capabilities"
          subtitle="Specialized operational domains across the healthcare revenue cycle."
          breadcrumb="Expertise"
        />

        {/* Expertise Section */}
        <CoreExpertiseSection />
        <ExpertiseSection />

        {/* Services Section */}
        <ServicesSection />
        <MedicalSpecialtiesSection />
        <TechnicalSkillsSection />
        <RcmMetricsSection />

        {/* Approach Slider */}
        <ApproachSlider />
      </main>

      <Footer />
    </div>
  );
}
