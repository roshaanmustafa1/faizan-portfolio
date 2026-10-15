import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { CapabilitiesPackages } from "@/components/sections/CapabilitiesPackages";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Career Experience | Faizan Karamat — Medical Billing & RCM Specialist",
  description:
    "Faizan Karamat's career progression: Assistant Manager Billing & Operations at F&A Global, Senior AR Executive, Billing Executive at PRG, and RCM Executive at CureMD.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <PageBanner
          title="Career Experience"
          subtitle="A five-year progression from RCM Executive to Assistant Manager Billing & Operations."
          breadcrumb="Experience"
        />

        {/* Complete Timeline Component */}
        <ExperienceTimeline />

        {/* Capabilities Packages */}
        <CapabilitiesPackages />
      </main>

      <Footer />
    </div>
  );
}
