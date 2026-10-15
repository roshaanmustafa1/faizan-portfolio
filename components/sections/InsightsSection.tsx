"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, X, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA, InsightArticle } from "@/data/portfolio";

export function InsightsSection() {
  const [activeArticleId, setActiveArticleId] = useState<string>("insight-1");
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);

  return (
    <section id="insights" className="py-24 lg:py-36 bg-white relative z-10 overflow-hidden">
      <div className="textio-container">
        {/* Section Title with Textio bar & dot */}
        <div className="section-title mb-16">
          <h3 className="font-syne font-bold text-4xl lg:text-5xl text-[#0f0e0e]">
            RCM Insights
          </h3>
          <span className="title-bar" />
        </div>

        {/* Editorial Article Rows */}
        <div className="divide-y divide-black/10 border-t border-black/10">
          {PORTFOLIO_DATA.insights.map((article) => {
            const isActive = activeArticleId === article.id;

            return (
              <div
                key={article.id}
                className="py-10 transition-all duration-300"
              >
                <div
                  onClick={() => setActiveArticleId(isActive ? "" : article.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                >
                  {/* Article Title & Category */}
                  <div className="max-w-3xl">
                    <span className="text-xs font-syne font-bold uppercase tracking-wider text-[#ff6b00] block mb-2">
                      {article.category} • {article.readTime}
                    </span>
                    <h4
                      className={`font-syne font-bold text-2xl sm:text-3xl lg:text-4xl transition-colors leading-tight ${
                        isActive
                          ? "text-[#ff6b00] underline decoration-[#ff6b00] underline-offset-8"
                          : "text-[#0f0e0e] group-hover:text-[#ff6b00]"
                      }`}
                    >
                      {article.title}
                    </h4>
                    <p className="font-manrope text-sm text-[#545b63] mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Date Box (matching Textio date widget) */}
                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center shrink-0">
                    <div className="w-24 h-20 border border-black/10 rounded-lg bg-[#f3f3f3] flex flex-col items-center justify-center text-center p-2 group-hover:border-[#ff6b00] transition-colors">
                      <span className="font-syne font-bold text-2xl text-[#0f0e0e] leading-none">
                        {article.date}/
                      </span>
                      <span className="font-syne text-xs uppercase font-bold text-[#ff6b00] tracking-wider mt-1">
                        {article.month}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Thumbnail & Action */}
                {isActive && (
                  <div className="mt-8 relative rounded-2xl overflow-hidden aspect-[21/9] max-h-[420px] bg-[#0f0e0e] group animate-in slide-in-from-top-4 duration-400">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Centered Read Article Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setReadingArticle(article)}
                        className="w-24 h-24 rounded-full bg-[#ff6b00] text-white flex flex-col items-center justify-center font-syne font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0f0e0e] transition-all shadow-2xl cursor-pointer"
                      >
                        <span>Read</span>
                        <ArrowUpRight size={18} />
                      </button>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs font-syne font-bold text-[#ff6b00] uppercase tracking-wider mb-1">
                        Educational Guide
                      </div>
                      <div className="font-syne font-bold text-lg sm:text-xl line-clamp-1">
                        {article.title}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link href="/insights" className="bttn-round">
            <span className="font-syne text-sm font-bold">All Insights</span>
            <span className="text-xs text-[#ff6b00] uppercase tracking-wider flex items-center gap-1">
              Read <ArrowUpRight size={14} />
            </span>
          </Link>
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
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6b00] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 text-xs font-syne font-bold uppercase tracking-wider text-[#ff6b00] mb-3">
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
              <div className="p-4 bg-[#f3f3f3] rounded-xl text-xs text-[#545b63] border-l-4 border-[#ff6b00]">
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
