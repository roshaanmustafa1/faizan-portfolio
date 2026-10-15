import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSlider } from "@/components/sections/ApproachSlider";

export const metadata: Metadata = {
  title: "RCM Expertise & Capabilities | Faizan Karamat",
  description:
    "Explore Faizan Karamat's core capabilities in U.S. healthcare Accounts Receivable management, insurance claim follow-up, denial rework, and billing operations.",
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
        <ExpertiseSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Approach Slider */}
        <ApproachSlider />
      </main>

      <Footer />
    </div>
  );
}
