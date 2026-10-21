"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useAnimation } from "@/components/animation/AnimationContext";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { personal, hero } = PORTFOLIO_DATA;
  const { isLoaded } = useAnimation();

  // Split heading into words for mask-reveal animation
  const headingWords = hero.heading.split(" ");

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`textio-container ${styles.container}`}>
        {/* Diagonal aesthetic line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isLoaded ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.diagonal}
          aria-hidden="true"
        />

        {/* Hero Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: -45 }}
          animate={isLoaded ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.92, x: -45 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.portrait}
        >
          <Image
            src="/images/faizan-snap-2.png"
            alt="Faizan Karamat, Medical Billing and RCM Specialist"
            width={2935}
            height={2939}
            className={styles.portraitImage}
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 470px, (max-width: 1199px) 540px, (max-width: 1399px) 600px, 652px"
          />
        </motion.div>

        {/* Circular Contact Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 14, delay: 0.55 }}
          className={styles.contactBadge}
        >
          <Link href="/#contact" aria-label="Contact Faizan" className="relative grid place-items-center w-full h-full">
            <Image
              src="/images/hero/contact-me-txt.svg"
              alt=""
              width={128}
              height={128}
              className={styles.contactText}
            />
            <Image
              src="/images/hero/contact-me-arrow.svg"
              alt=""
              width={74}
              height={74}
              className={styles.contactArrow}
            />
          </Link>
        </motion.div>

        {/* Greeting Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={styles.greeting}
        >
          <span>Hi there!</span>
          <Image src="/images/hero/hi.svg" alt="Waving hand" width={20} height={20} />
          <span>I&apos;m</span>
        </motion.div>

        {/* Masked Reveal Headline */}
        <h1 id="hero-heading" className={styles.heading}>
          {headingWords.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-3.5 pb-1">
              <motion.span
                className="inline-block"
                initial={{ y: "115%", opacity: 0 }}
                animate={isLoaded ? { y: "0%", opacity: 1 } : { y: "115%", opacity: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.35 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Content Box */}
        <div className={styles.content}>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={styles.description}
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className={styles.actions}
          >
            <div className={styles.buttons}>
              <Link href="/#contact" className="bttn bttn-primary">
                {hero.primaryCta}
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={personal.cvPath}
                download="Faizan_Karamat_Medical_Billing_RCM_Resume.pdf"
                className="bttn bttn-secondary"
              >
                {hero.secondaryCta}
                <Download size={18} />
              </a>
            </div>

            <Image
              src="/images/hero/lg-arrow.svg"
              alt=""
              width={133}
              height={20}
              className={styles.arrow}
            />

            <div className={styles.socials}>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Faizan on LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
              <a href={`mailto:${personal.email}`} aria-label="Email Faizan">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Giant Watermark Profession Text */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={styles.profession}
          data-text="MEDICAL BILLING & RCM"
          aria-label={hero.subheading}
        >
          MEDICAL BILLING &amp; RCM
        </motion.div>
      </div>
    </section>
  );
}
