import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { personal, hero } = PORTFOLIO_DATA;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`textio-container ${styles.container}`}>
        <div className={styles.diagonal} aria-hidden="true" />
        <div className={styles.portrait}>
          <Image src="/images/faizan-snap-2.png" alt="Faizan Karamat, Medical Billing and RCM Specialist" width={2935} height={2939} className={styles.portraitImage} priority sizes="(max-width: 767px) 100vw, (max-width: 991px) 470px, (max-width: 1199px) 540px, (max-width: 1399px) 600px, 652px" />
        </div>
        <Link href="/#contact" className={styles.contactBadge} aria-label="Contact Faizan">
          <Image src="/images/hero/contact-me-txt.svg" alt="" width={128} height={128} className="animate-spin-slow" />
          <Image src="/images/hero/contact-me-arrow.svg" alt="" width={74} height={74} className={styles.contactArrow} />
        </Link>
        <div className={styles.greeting}>
          <span>Hi there!</span>
          <Image src="/images/hero/hi.svg" alt="Waving hand" width={20} height={20} />
          <span>I&apos;m</span>
        </div>
        <h1 id="hero-heading" className={styles.heading}>{hero.heading}</h1>
        <div className={styles.content}>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <div className={styles.buttons}>
              <Link href="/#contact" className="bttn bttn-primary">{hero.primaryCta}<ArrowUpRight size={18} /></Link>
              <a href={personal.cvPath} download="Faizan_Karamat_Medical_Billing_RCM_Resume.pdf" className="bttn bttn-secondary">{hero.secondaryCta}<Download size={18} /></a>
            </div>
            <Image src="/images/hero/lg-arrow.svg" alt="" width={133} height={20} className={styles.arrow} />
            <div className={styles.socials}>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="Faizan on LinkedIn"><LinkedInIcon size={22} /></a>
              <a href={`mailto:${personal.email}`} aria-label="Email Faizan"><Mail size={22} /></a>
            </div>
          </div>
        </div>
        <div className={styles.profession} data-text="MEDICAL BILLING & RCM" aria-label={hero.subheading}>MEDICAL BILLING &amp; RCM</div>
      </div>
    </section>
  );
}
