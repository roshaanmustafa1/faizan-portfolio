import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CapabilityProject } from "@/data/portfolio";

interface ExpertiseCardProps {
  project: CapabilityProject;
  onSelect: () => void;
}

export function ExpertiseCard({ project, onSelect }: ExpertiseCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#191818] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17c2b3]">{project.category}</span>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 mb-5 text-sm leading-relaxed text-white/60">{project.description}</p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
          <span className="text-xs font-medium text-white/80">Explore capability</span>
          <ArrowUpRight size={18} className="text-[#17c2b3]" aria-hidden="true" />
        </div>
      </div>
      <button type="button" onClick={onSelect} className="absolute inset-0 rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#17c2b3]" aria-label={`View ${project.title}`} />
    </article>
  );
}
