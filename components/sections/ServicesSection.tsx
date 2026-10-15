"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ServiceCard } from "./ServiceCard";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const services = PORTFOLIO_DATA.services;
  const splitIndex = Math.ceil(services.length / 2);
  const columns = [services.slice(0, splitIndex), services.slice(splitIndex)];

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="textio-container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Medical Billing &amp; RCM</span>
          <h2 id="services-heading">Specialized Services</h2>
          <span className={styles.divider} aria-hidden="true" />
        </div>

        <div className={styles.columns}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {column.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  number={columnIndex * splitIndex + index + 1}
                  isExpanded={activeServiceId === service.id}
                  onToggle={() => setActiveServiceId((active) => active === service.id ? null : service.id)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/#contact" className={styles.contactLink}>
            Discuss Your Requirements <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
