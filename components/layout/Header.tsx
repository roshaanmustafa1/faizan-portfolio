"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAnimation } from "@/components/animation/AnimationContext";
import { OffcanvasMenu } from "./OffcanvasMenu";
import { useActiveSection } from "./useActiveSection";

const sectionIds = ["about", "expertise", "services", "specialties", "technical-skills", "experience", "contact"];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const pathname = usePathname();
  const activeHash = useActiveSection(sectionIds);
  const activeHref = `${pathname}${activeHash}`;
  const { isLoaded } = useAnimation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#about" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Services", href: "/#services" },
    { name: "Specialties", href: "/#specialties", mobileOnly: true },
    { name: "Technical Skills", href: "/#technical-skills", mobileOnly: true },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/10"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex items-center justify-between h-[80px] lg:h-[95px] xl:h-[103px]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center h-full xl:border-r xl:border-black/10 xl:pl-8 xl:pr-8"
            >
              <Link href="/" className="group flex items-center">
                <span className="font-syne font-bold text-lg sm:text-xl xl:text-2xl tracking-tight text-[#0f0e0e] group-hover:text-[#17c2b3] transition-colors">
                  FAIZAN <span className="text-[#17c2b3] group-hover:text-[#0f0e0e] transition-colors">K</span>ARAMAT
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-9">
              {navLinks.map((link, index) => {
                const isActive = activeHref === link.href;
                return (
                  <motion.div
                    key={link.name}
                    className={link.mobileOnly ? "hidden" : undefined}
                    initial={{ opacity: 0, y: -10 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`font-syne text-[15px] xl:text-[16px] font-bold tracking-tight transition-colors duration-200 py-2 relative block ${
                        isActive ? "text-[#17c2b3]" : "text-[#0f0e0e] hover:text-[#17c2b3]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Right Action Components */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center h-full"
            >
              {/* Let's Talk CTA */}
              <Link
                href="/#contact"
                className="hidden xl:flex items-center gap-2 h-full px-8 xl:px-10 border-l border-black/10 font-syne font-bold text-[16px] text-[#0f0e0e] hover:text-[#17c2b3] transition-colors group"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>

              {/* Offcanvas Drawer Trigger Button */}
              <button
                onClick={() => setIsOffcanvasOpen(true)}
                className="hidden lg:flex w-[80px] xl:w-[110px] h-full bg-[#0f0e0e] text-white items-center justify-center hover:bg-[#17c2b3] transition-colors cursor-pointer"
                aria-label="Open side drawer"
              >
                <div className="space-y-1.5 flex flex-col items-center justify-center">
                  <span className="w-6 h-0.5 bg-white block"></span>
                  <span className="w-4 h-0.5 bg-white block"></span>
                  <span className="w-6 h-0.5 bg-white block"></span>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden ml-3 p-2 text-[#0f0e0e] hover:text-[#17c2b3] transition-colors"
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto bg-white border-b border-black/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <nav id="mobile-navigation" className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={activeHref === link.href ? "location" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-syne font-bold text-lg transition-colors py-1 border-b border-black/5 ${
                    activeHref === link.href ? "text-[#17c2b3]" : "text-[#0f0e0e] hover:text-[#17c2b3]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bttn bttn-primary w-full justify-center text-center py-3"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </motion.header>

      {/* Offcanvas Side Menu */}
      <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
    </>
  );
}
