"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { PORTFOLIO_DATA, InsightArticle } from "@/data/portfolio";
import { InsightCard } from "./InsightCard";

export function InsightsSection() {
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" aria-labelledby="insights-heading" className="py-16 lg:py-24 bg-white relative z-10">
      <div className="textio-container">
        {/* Section Title with Textio bar & dot */}
        <div className="mb-8 lg:mb-10">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17c2b3] mb-3">Knowledge &amp; Perspectives</span>
          <h2 id="insights-heading" className="font-syne font-semibold text-3xl lg:text-4xl text-[#0f0e0e]">
            RCM Insights
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#545b63]">Practical perspectives on medical billing, claims management, and healthcare revenue operations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 xl:gap-16 items-start">
          {PORTFOLIO_DATA.insights.slice(0, 1).map((article) => (
            <InsightCard key={article.id} article={article} featured onRead={() => setReadingArticle(article)} />
          ))}
          <div className="flex flex-col">
            {PORTFOLIO_DATA.insights.slice(1).map((article) => (
              <InsightCard key={article.id} article={article} onRead={() => setReadingArticle(article)} />
            ))}
          </div>
        </div>

      </div>

      {/* Full Educational Article Modal */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white text-[#0f0e0e] rounded-2xl overflow-hidden shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 sm:p-8 bg-[#0f0e0e] text-white relative">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#17c2b3] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 text-xs font-syne font-bold uppercase tracking-wider text-[#17c2b3] mb-3">
                <span>{readingArticle.category}</span>
                <span>•</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight pr-8">
                {readingArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-white/60 font-manrope mt-4">
                <span>Author: Faizan Karamat</span>
                <span>•</span>
                <span>Published: {readingArticle.date} {readingArticle.month} 2026</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6 text-[#333] font-manrope text-base sm:text-lg leading-relaxed">
              {readingArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}

              {/* Disclaimer */}
              <div className="p-4 bg-[#f3f3f3] rounded-xl text-xs text-[#545b63] border-l-4 border-[#17c2b3]">
                <strong>Note:</strong> This article is authored as educational professional commentary on U.S. Healthcare Revenue Cycle Management workflows.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#f8f8f8] border-t border-black/10 flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="bttn bttn-primary text-xs py-2.5 px-6"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
