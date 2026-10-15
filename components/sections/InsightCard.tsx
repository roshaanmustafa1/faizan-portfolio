import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { InsightArticle } from "@/data/portfolio";
import styles from "./InsightCard.module.css";

interface InsightCardProps {
  article: InsightArticle;
  onRead: () => void;
  featured?: boolean;
}

export function InsightCard({ article, onRead, featured = false }: InsightCardProps) {
  return (
    <article className={`${styles.article} ${featured ? styles.featured : styles.compact}`}>
      <div className={styles.image}>
        <Image src={article.image} alt={article.title} fill sizes={featured ? "(max-width: 1023px) 100vw, 50vw" : "(max-width: 479px) 80px, 112px"} className="object-cover" />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{article.category}</span>
        <h3 className={styles.title}>{article.title}</h3>
        {featured && <p className={styles.excerpt}>{article.excerpt}</p>}
        <div className={styles.meta}>
          <span>{article.date} {article.month} 2026</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>
        {featured && <span className={styles.read}>Read article <ArrowUpRight size={17} aria-hidden="true" /></span>}
      </div>
      {!featured && <ArrowUpRight size={19} className={styles.arrow} aria-hidden="true" />}
      <button type="button" onClick={onRead} aria-label={`Read ${article.title}`} className={styles.button} />
    </article>
  );
}
