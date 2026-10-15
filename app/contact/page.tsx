import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Faizan Karamat | Medical Billing & RCM Specialist",
  description:
    "Get in touch with Faizan Karamat, Assistant Manager Billing & Operations, for consultations and discussions on U.S. healthcare revenue cycle management.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        <PageBanner
          title="Let's Connect"
          subtitle="Interested in discussing medical billing, revenue cycle management, or professional opportunities? Feel free to reach out."
          breadcrumb="Contact"
        />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
