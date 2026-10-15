import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { InsightsSection } from "@/components/sections/InsightsSection";

export const metadata: Metadata = {
  title: "RCM Insights & Educational Guides | Faizan Karamat",
  description:
    "Professional educational articles on U.S. healthcare Accounts Receivable, denial resolution, claim follow-up, and revenue cycle management workflows.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <PageBanner
          title="RCM Professional Insights"
          subtitle="Educational perspectives and best practices on U.S. healthcare billing and revenue cycle operations."
          breadcrumb="Insights"
        />

        <InsightsSection />
      </main>

      <Footer />
    </div>
  );
}
