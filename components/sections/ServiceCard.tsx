import Link from "next/link";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import type { ServiceItem } from "@/data/portfolio";
import styles from "./ServicesSection.module.css";

interface ServiceCardProps {
  service: ServiceItem;
  number: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ServiceCard({ service, number, isExpanded, onToggle }: ServiceCardProps) {
  return (
    <article className={styles.card} onClick={onToggle}>
      <h3>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={isExpanded}
          aria-controls={`${service.id}-details`}
          id={`${service.id}-heading`}
        >
          <span className={styles.number} aria-hidden="true">{String(number).padStart(2, "0")}</span>
          <span className={styles.title}>{service.title}</span>
          <span className={styles.toggle} aria-hidden="true">
            {isExpanded ? <Minus size={17} /> : <Plus size={17} />}
          </span>
        </button>
      </h3>
      <p className={styles.summary}>{service.tagline}</p>
      <div id={`${service.id}-details`} hidden={!isExpanded} aria-labelledby={`${service.id}-heading`} className={styles.details}>
        <ul className={styles.points}>
          {service.points.map((point) => (
            <li key={point}><Check size={15} aria-hidden="true" /><span>{point}</span></li>
          ))}
        </ul>
        <Link href="/#contact" className={styles.serviceLink} onClick={(event) => event.stopPropagation()}>Discuss this service <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
