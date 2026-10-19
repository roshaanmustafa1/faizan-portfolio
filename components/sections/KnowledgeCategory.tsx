import { Activity, Baby, BarChart3, Bone, Building2, CircleDollarSign, ClipboardCheck, CodeXml, FileText, HeartPulse, Hospital, Microscope, Monitor, PhoneCall, ShieldCheck, Stethoscope, TrendingUp, Users } from "lucide-react";
import type { KnowledgeCategory as KnowledgeCategoryData, RcmIcon } from "@/data/rcm";

const icons = {
  billing: FileText, receivables: TrendingUp, denials: ShieldCheck,
  payer: PhoneCall, payments: CircleDollarSign, eligibility: ClipboardCheck,
  leadership: Users, primary: Stethoscope, family: Baby, emergency: Activity,
  medical: HeartPulse, surgical: Bone, outpatient: Hospital,
  diagnostics: Microscope, coding: CodeXml, edi: Building2,
  analytics: BarChart3, software: Monitor,
};

export function KnowledgeIcon({ name }: { name: RcmIcon }) {
  const Icon = icons[name];
  return <Icon size={24} aria-hidden="true" className="shrink-0 text-[#087c72]" />;
}

export function SkillBadges({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Knowledge areas">
      {items.map((item) => (
        <li key={item} className="max-w-full rounded-full border border-black/10 bg-[#f3f3f3] px-3 py-1.5 text-xs leading-relaxed text-[#363c42] [overflow-wrap:anywhere]">{item}</li>
      ))}
    </ul>
  );
}

export function SkillCategory({ category }: { category: KnowledgeCategoryData }) {
  return (
    <article className="h-full rounded-2xl border border-black/10 bg-white p-6 lg:p-7">
      <KnowledgeIcon name={category.icon} />
      <h3 className="mt-5 text-xl font-semibold">{category.title}</h3>
      <p className="mt-3 mb-5 text-sm leading-relaxed text-[#545b63]">{category.description}</p>
      <SkillBadges items={category.items} />
    </article>
  );
}

export function KnowledgeHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl" data-entrance="up">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#087c72]">{eyebrow}</p>
      <div className="section-title">
        <h2 id={id} className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        <span className="title-bar" aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm leading-relaxed text-[#545b63] sm:text-base">{description}</p>
    </div>
  );
}
