"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#151515] text-white border-t border-white/10 relative z-20">
      <div className="textio-container py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="font-syne font-extrabold text-2xl tracking-tight text-white">
              FAIZAN <span className="text-[#17c2b3]">K</span>ARAMAT
            </Link>
            <span className="hidden sm:inline-block text-white/30 text-sm">|</span>
            <span className="hidden sm:inline-block text-white/60 text-xs font-syne uppercase tracking-wider">
              Medical Billing & RCM Specialist
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#17c2b3] hover:bg-[#17c2b3] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#17c2b3] hover:bg-[#17c2b3] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#17c2b3] hover:bg-[#17c2b3] transition-all"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#17c2b3] text-white flex items-center justify-center transition-colors ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-xs md:text-sm text-white/60 font-manrope">
            © 2026 <span className="text-white font-medium">Faizan Karamat</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
