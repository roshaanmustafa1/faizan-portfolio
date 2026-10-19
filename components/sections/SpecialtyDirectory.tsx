"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SPECIALTY_CATEGORIES } from "@/data/rcm";
import { SpecialtyCategoryCard } from "./SpecialtyCategoryCard";
import { SpecialtyFilterTabs } from "./SpecialtyFilterTabs";

const filters = [{ id: "all", label: "All Specialties" }, ...SPECIALTY_CATEGORIES.map((category) => ({ id: category.id, label: category.filterLabel }))];

export function SpecialtyDirectory() {
  const [activeId, setActiveId] = useState("all");
  const reduceMotion = useReducedMotion();
  const categories = activeId === "all" ? SPECIALTY_CATEGORIES : SPECIALTY_CATEGORIES.filter((category) => category.id === activeId);

  return (
    <>
      <SpecialtyFilterTabs filters={filters} activeId={activeId} onSelect={setActiveId} />
      <p role="status" className="mb-5 text-xs text-[#545b63]">{categories.length} {categories.length === 1 ? "category" : "categories"} · Specialty billing workflow reference</p>
      <div key={activeId} id="specialty-results" className="grid min-h-[36rem] content-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div key={category.id} initial={false} animate={{ opacity: 1, y: 0 }} whileInView={reduceMotion ? undefined : { opacity: [0.7, 1], y: [12, 0] }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : index * 0.04 }}>
            <SpecialtyCategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
