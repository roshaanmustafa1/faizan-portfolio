import { RCM_EXPERTISE } from "@/data/rcm";
import Link from "next/link";
import { KnowledgeHeading, KnowledgeIcon } from "./KnowledgeCategory";

export function CoreExpertiseSection() {
  return (
    <section id="rcm-expertise" data-refresh-scroll aria-labelledby="rcm-expertise-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
      <div className="textio-container">
        <KnowledgeHeading id="rcm-expertise-heading" eyebrow="Core Competencies" title="U.S. Healthcare Revenue Cycle Management Expertise" description="Specialized expertise in U.S. healthcare revenue cycle operations, supporting efficient claim processing, payer reimbursement, accounts receivable recovery, denial resolution, and operational performance across complex medical billing workflows." />
        <nav aria-label="Explore RCM knowledge" className="mb-8 flex flex-wrap gap-3 text-sm font-semibold">
          {[{ href: "#specialties", label: "Medical Specialties" }, { href: "#technical-skills", label: "Technical Skills" }, { href: "#rcm-metrics", label: "Performance Metrics" }].map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-black/15 px-4 py-2 hover:border-[#087c72] hover:text-[#087c72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087c72]">{link.label}</Link>)}
        </nav>
        <p className="mb-6 max-w-3xl text-sm text-[#545b63]">Explore the operational scope of each billing domain. Detailed activities describe relevant workflows; individual responsibilities depend on the role and practice.</p>
        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          {RCM_EXPERTISE.map((category, index) => (
            <article key={category.id} data-entrance="up" data-entrance-delay={(index % 3) * 80} className="group rounded-2xl border border-black/10 bg-[#f3f3f3] p-6 transition-shadow hover:shadow-lg motion-reduce:transition-none">
              <KnowledgeIcon name={category.icon} />
              <h3 className="mt-5 min-h-14 text-xl font-semibold">{category.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#545b63]">{category.description}</p>
              <details className="mt-5 border-t border-black/10 pt-4">
                <summary className="cursor-pointer rounded text-sm font-semibold text-[#087c72] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087c72]">View workflow capabilities</summary>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-[#545b63]">
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
