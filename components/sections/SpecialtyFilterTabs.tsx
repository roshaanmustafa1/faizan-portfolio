interface SpecialtyFilterTabsProps {
  filters: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function SpecialtyFilterTabs({ filters, activeId, onSelect }: SpecialtyFilterTabsProps) {
  return (
    <div role="group" aria-label="Filter medical specialties" className="mb-6 flex gap-2 overflow-x-auto pb-3 md:flex-wrap">
      {filters.map((filter) => (
        <button key={filter.id} type="button" aria-pressed={activeId === filter.id} aria-controls="specialty-results" onClick={() => onSelect(filter.id)} className={`shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087c72] motion-reduce:transition-none ${activeId === filter.id ? "border-[#0f0e0e] bg-[#0f0e0e] text-white" : "border-black/15 bg-white text-[#545b63] hover:border-[#087c72] hover:text-[#087c72]"}`}>
          {filter.label}
        </button>
      ))}
    </div>
  );
}
