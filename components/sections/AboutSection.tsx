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
        <h2 className={styles.headline} data-entrance="up" data-entrance-duration="400">
          I am a Medical Billing &amp; RCM Specialist with over five years of experience in <span className="txt-orange">U.S. healthcare</span>. Driving efficiency across the healthcare revenue cycle.
        </h2>
        <div className={styles.grid}>
          <div className={styles.experience} data-entrance="left" data-entrance-duration="600">
            <Image src="/images/about/arrow.svg" alt="" width={45} height={339} className={styles.arrow} style={{ height: "auto" }} />
            <div className={styles.counter}>{about.experienceYears}</div>
            <h3 className={styles.experienceTitle}>Years of<br />Experience</h3>
            <Image src="/images/shape-black.svg" alt="" width={129} height={140} className={styles.shape} style={{ height: "auto" }} />
            <Link href="/about" className="bttn-round"><span>More About Me</span><ArrowUpRight size={20} /></Link>
          </div>
          <div>
            <div className={styles.portrait} data-entrance="image-right" data-entrance-duration="1000" data-entrance-delay="100">
              <Image src={personal.portraitImage} alt="Faizan Karamat" width={636} height={614} sizes="(max-width: 767px) 100vw, 50vw" className={styles.image} />
            </div>
            <div className={styles.copy} data-entrance="up" data-entrance-duration="400" data-entrance-delay="160">
              {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
