"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface OffcanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 w-[340px] max-w-[90vw] h-full bg-[#f3f3f3] z-[9999] overflow-y-auto transition-transform duration-400 ease-out shadow-2xl flex flex-col justify-between p-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Close button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-[#0f0e0e] text-white rounded-md flex items-center justify-center hover:bg-[#17c2b3] transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <Link href="/" onClick={onClose} className="font-syne font-bold text-2xl tracking-tight text-[#0f0e0e]">
              FAIZAN <span className="text-[#17c2b3]">K</span>ARAMAT
            </Link>
            <p className="text-xs font-semibold text-[#545b63] uppercase tracking-wider mt-1">
              RCM & Medical Billing Specialist
            </p>
          </div>

          {/* Intro text */}
          <p className="text-sm text-[#545b63] leading-relaxed mb-8">
            5+ years of specialized experience in U.S. healthcare RCM, Accounts Receivable management,
            denial resolution, and payment collections. Currently Assistant Manager Billing and Operations at F&A Global.
          </p>

          <nav aria-label="RCM knowledge" className="mb-8 flex flex-col gap-3 text-sm font-semibold">
            <Link href="/#specialties" onClick={onClose} className="hover:text-[#087c72]">Medical Specialties</Link>
            <Link href="/#technical-skills" onClick={onClose} className="hover:text-[#087c72]">Technical Skills</Link>
            <Link href="/#rcm-metrics" onClick={onClose} className="hover:text-[#087c72]">Performance Metrics</Link>
          </nav>

          {/* Contact Details */}
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0f0e0e] text-white flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-xs uppercase font-syne font-bold text-[#17c2b3] block">Address</span>
                <span className="text-sm font-medium text-[#0f0e0e]">{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0f0e0e] text-white flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-xs uppercase font-syne font-bold text-[#17c2b3] block">Email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm font-medium text-[#0f0e0e] hover:text-[#17c2b3] transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0f0e0e] text-white flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <span className="text-xs uppercase font-syne font-bold text-[#17c2b3] block">Call Now</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="text-sm font-medium text-[#0f0e0e] hover:text-[#17c2b3] transition-colors"
                >
                  {PORTFOLIO_DATA.personal.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mb-8">
            <span className="text-xs uppercase font-syne font-bold text-[#545b63] block mb-3">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0f0e0e] text-white flex items-center justify-center hover:bg-[#17c2b3] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="w-10 h-10 rounded-full bg-[#0f0e0e] text-white flex items-center justify-center hover:bg-[#17c2b3] transition-colors"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/#contact"
            onClick={onClose}
            className="w-full bg-[#17c2b3] text-white py-3.5 px-6 rounded font-syne font-bold text-center flex items-center justify-center gap-2 hover:bg-[#d55b04] transition-colors shadow-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </aside>
    </>
  );
}
