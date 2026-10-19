import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSlider } from "@/components/sections/ApproachSlider";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { CapabilitiesPackages } from "@/components/sections/CapabilitiesPackages";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoreExpertiseSection } from "@/components/sections/CoreExpertiseSection";
import { MedicalSpecialtiesSection } from "@/components/sections/MedicalSpecialtiesSection";
import { TechnicalSkillsSection } from "@/components/sections/TechnicalSkillsSection";
import { RcmMetricsSection } from "@/components/sections/RcmMetricsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Primary Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills & Competencies Strip */}
        <SkillsStrip />
        <CoreExpertiseSection />

        {/* About Section */}
        <AboutSection />

        {/* Selected Capabilities / Portfolio Grid */}
        <ExpertiseSection />

        {/* Professional Services */}
        <ServicesSection />
        <MedicalSpecialtiesSection />

        {/* Professional Approach / Philosophy */}
        <ApproachSlider />

        {/* Seamless Animated Marquee */}
        <MarqueeSection />

        {/* Core Capabilities / Packages */}
        <CapabilitiesPackages />
        <TechnicalSkillsSection />
        <RcmMetricsSection />

        {/* Career Timeline */}
        <ExperienceTimeline />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
