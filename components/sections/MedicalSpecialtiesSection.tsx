import { KnowledgeHeading } from "./KnowledgeCategory";
import { SpecialtyDirectory } from "./SpecialtyDirectory";

export function MedicalSpecialtiesSection() {
  return (
    <section id="specialties" data-refresh-scroll aria-labelledby="specialties-heading" className="scroll-mt-28 bg-[#f3f3f3] py-16 lg:py-24">
      <div className="textio-container">
        <KnowledgeHeading id="specialties-heading" eyebrow="U.S. Healthcare Specialties" title="Medical Specialties & Billing Workflows" description="Understanding specialty-specific billing workflows, insurance requirements, claim processing, reimbursement complexities, and revenue cycle operations across U.S. healthcare." />
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#545b63]">This directory outlines relevant specialty billing workflows. It does not represent confirmed personal experience or client engagements in every specialty.</p>
        <SpecialtyDirectory />
      </div>
    </section>
  );
}
