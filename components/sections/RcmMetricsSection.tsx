import { RCM_METRICS } from "@/data/rcm";
import { KnowledgeHeading } from "./KnowledgeCategory";

export function RcmMetricsSection() {
  return (
    <section id="rcm-metrics" aria-labelledby="rcm-metrics-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
      <div className="textio-container">
        <KnowledgeHeading id="rcm-metrics-heading" eyebrow="Operational Performance" title="Measuring What Moves the Revenue Cycle" description="Industry KPIs used to understand account resolution, claims quality, collections, and team performance. These are measurement areas, rather than reported personal results." />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {RCM_METRICS.map((group, index) => (
            <article key={group.title} data-entrance="up" data-entrance-delay={index * 80} className="border-t-2 border-[#087c72] pt-5">
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="space-y-2 text-sm text-[#545b63]">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
