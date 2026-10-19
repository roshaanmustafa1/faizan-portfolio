import type { SpecialtyCategory } from "@/data/rcm";
import { KnowledgeIcon, SkillBadges } from "./KnowledgeCategory";

export function SpecialtyCategoryCard({ category }: { category: SpecialtyCategory }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-black/10 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#087c72]/40 hover:shadow-lg motion-reduce:transition-none">
      <div className="flex items-center justify-between gap-3">
        <KnowledgeIcon name={category.icon} />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#545b63]">{category.experienceStatus}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold">{category.title}</h3>
      <p className="mt-3 mb-6 text-sm leading-relaxed text-[#545b63]">{category.description}</p>
      <div className="mt-auto"><SkillBadges items={category.items} /></div>
    </article>
  );
}
