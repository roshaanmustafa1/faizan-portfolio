import { TECHNICAL_SKILLS } from "@/data/rcm";
import { KnowledgeHeading, SkillCategory } from "./KnowledgeCategory";

export function TechnicalSkillsSection() {
  return (
    <section id="technical-skills" aria-labelledby="technical-skills-heading" className="scroll-mt-28 bg-[#f3f3f3] py-16 lg:py-24">
      <div className="textio-container">
        <KnowledgeHeading id="technical-skills-heading" eyebrow="Technical Proficiency" title="Technical Skills & Industry Knowledge" description="Knowledge of U.S. healthcare billing standards, payer workflows, reimbursement processes, claim management, and revenue cycle operations." />
        <p className="mb-6 max-w-3xl text-sm text-[#545b63]">Operational skills are informed by the career history below. Standards and terminology describe relevant industry knowledge, without implying certification or proficiency in every listed workflow.</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TECHNICAL_SKILLS.map((category, index) => (
            <div key={category.id} data-entrance="up" data-entrance-delay={(index % 3) * 80}><SkillCategory category={category} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
