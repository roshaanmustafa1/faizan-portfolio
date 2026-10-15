"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create authentic mailto link with encoded subject and body
    const subject = encodeURIComponent(
      `Medical Billing / RCM Inquiry from ${formData.firstName} ${formData.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;

    // Trigger user's native email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const navItems = PORTFOLIO_DATA.contact.navLinks;

  return (
    <section id="contact" className="bg-[#0f0e0e] text-white pt-16 pb-24 relative z-10 overflow-hidden">
      {/* Contact Marquee */}
      <div className="py-8 bg-black/40 border-y border-white/10 select-none overflow-hidden mb-16">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="flex items-center">
                  <span className="font-syne font-bold text-2xl sm:text-4xl text-stroke-white uppercase px-6">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <span className="text-white/60 font-syne text-xl sm:text-3xl px-2">_</span>
                  <span className="font-syne font-bold text-2xl sm:text-4xl text-white uppercase px-6">
                    {PORTFOLIO_DATA.personal.phoneDisplay}
                  </span>
                  <span className="text-[#ff6b00] font-syne text-xl sm:text-3xl px-2">_</span>
                  <span className="font-syne font-bold text-2xl sm:text-4xl text-stroke-white uppercase px-6">
                    Lahore, Pakistan
                  </span>
                  <span className="text-[#ff6b00] font-syne text-xl sm:text-3xl px-4">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="textio-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form & Heading */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-syne font-bold uppercase tracking-widest text-[#ff6b00] block mb-2">
                Get In Touch
              </span>
              <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
                {PORTFOLIO_DATA.contact.heading}
              </h2>
              <p className="font-manrope text-white/70 text-base sm:text-lg mt-4 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.contact.description}
              </p>
            </div>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap items-center gap-4 py-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
              >
                <Mail size={16} className="text-[#ff6b00]" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
              >
                <Phone size={16} className="text-[#ff6b00]" />
                <span>{PORTFOLIO_DATA.personal.phoneDisplay}</span>
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80">
                <MapPin size={16} className="text-[#ff6b00]" />
                <span>Lahore, Pakistan</span>
              </span>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-syne font-bold uppercase text-white/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-2.5 px-1 outline-none font-manrope text-sm transition-colors"
                    placeholder="e.g. John"
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-xs font-syne font-bold uppercase text-white/80 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-2.5 px-1 outline-none font-manrope text-sm transition-colors"
                    placeholder="e.g. Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-syne font-bold uppercase text-white/80 mb-2">
                    Email <span className="text-[#ff6b00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-2.5 px-1 outline-none font-manrope text-sm transition-colors"
                    placeholder="john@organization.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-syne font-bold uppercase text-white/80 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-2.5 px-1 outline-none font-manrope text-sm transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-syne font-bold uppercase text-white/80 mb-2">
                  Message <span className="text-[#ff6b00]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white text-white py-2.5 px-1 outline-none font-manrope text-sm transition-colors resize-y"
                  placeholder="Tell me about your revenue cycle needs or consultation topic..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bttn bttn-theme px-10 py-4 font-syne font-bold text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-all duration-300"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-lg bg-white/10 border border-[#ff6b00]/50 text-xs text-white/90 flex items-start gap-2 animate-in fade-in">
                  <CheckCircle2 size={16} className="text-[#ff6b00] shrink-0 mt-0.5" />
                  <span>
                    Your default email client has been prepared with your message addressed to <strong>{PORTFOLIO_DATA.personal.email}</strong>.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Numbered Navigation & Socials */}
          <div className="lg:col-span-5 lg:pl-12 pt-8 lg:pt-16">
            <nav className="divide-y divide-[#292727] border-y border-[#292727]">
              {navItems.map((item) => (
                <Link
                  key={item.num}
                  href={item.href}
                  className="group py-4 sm:py-5 flex items-center justify-between transition-colors hover:text-[#ff6b00]"
                >
                  <span className="font-syne font-bold text-xl sm:text-2xl text-white/80 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <span className="font-syne font-bold text-sm text-[#ff6b00]/80 group-hover:text-[#ff6b00] transition-colors">
                    {item.num}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Social Media Links */}
            <div className="pt-10">
              <span className="text-xs uppercase font-syne font-bold text-white/50 block mb-4">
                Professional Profiles
              </span>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full border border-[#292727] flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#0f0e0e] transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={22} />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="w-14 h-14 rounded-full border border-[#292727] flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#0f0e0e] transition-all"
                    aria-label="Email"
                  >
                    <Mail size={22} />
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="w-14 h-14 rounded-full border border-[#292727] flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#0f0e0e] transition-all"
                    aria-label="Phone"
                  >
                    <Phone size={22} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
