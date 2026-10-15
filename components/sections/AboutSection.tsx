import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className={styles.about}>
      <div className="textio-container">
        <div className="section-title">
          <h3>{about.sectionTitle}</h3>
          <span className="title-bar" />
        </div>
        <h2 className={styles.headline}>
          I am a Medical Billing &amp; RCM Specialist with over five years of experience in <span className="txt-orange">U.S. healthcare</span>. Driving efficiency across the healthcare revenue cycle.
        </h2>
        <div className={styles.grid}>
          <div className={styles.experience}>
            <Image src="/images/about/arrow.svg" alt="" width={110} height={110} className={styles.arrow} />
            <div className={styles.counter}>{about.experienceYears}</div>
            <h3 className={styles.experienceTitle}>Years of<br />Experience</h3>
            <Image src="/images/shape-black.svg" alt="" width={92} height={92} className={styles.shape} />
            <Link href="/about" className="bttn-round"><span>More About Me</span><ArrowUpRight size={20} /></Link>
          </div>
          <div>
            <div className={styles.portrait}>
              <Image src={personal.portraitImage} alt="Faizan Karamat" width={636} height={614} sizes="(max-width: 767px) 100vw, 50vw" className={styles.image} />
            </div>
            <div className={styles.copy}>
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
