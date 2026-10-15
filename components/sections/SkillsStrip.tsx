"use client";

import React from "react";
import {
  FileText,
  RefreshCw,
  TrendingUp,
  ShieldAlert,
  DollarSign,
  PhoneCall,
  CheckCircle2,
  Layers,
  Users,
  BarChart3,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileText className="w-12 h-12 text-[#ff6b00]" />,
  RefreshCw: <RefreshCw className="w-12 h-12 text-[#ff6b00]" />,
  TrendingUp: <TrendingUp className="w-12 h-12 text-[#ff6b00]" />,
  ShieldAlert: <ShieldAlert className="w-12 h-12 text-[#ff6b00]" />,
  DollarSign: <DollarSign className="w-12 h-12 text-[#ff6b00]" />,
  PhoneCall: <PhoneCall className="w-12 h-12 text-[#ff6b00]" />,
  CheckCircle2: <CheckCircle2 className="w-12 h-12 text-[#ff6b00]" />,
  Layers: <Layers className="w-12 h-12 text-[#ff6b00]" />,
  Users: <Users className="w-12 h-12 text-[#ff6b00]" />,
  BarChart3: <BarChart3 className="w-12 h-12 text-[#ff6b00]" />,
};

export function SkillsStrip() {
  return (
    <section aria-label="Core RCM competencies" className="pt-0 lg:pt-20 bg-white relative z-20 overflow-hidden">
      <div className="sr-only">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-syne font-bold text-[#ff6b00] tracking-widest block mb-2">
              Core Competencies
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0f0e0e]">
              Specialized RCM Skills
            </h2>
          </div>
          <p className="text-sm text-[#545b63] max-w-md font-manrope">
            Validated hands-on expertise managing high-volume U.S. healthcare billing, AR recovery, and payer interactions.
          </p>
        </div>
      </div>

      {/* Horizontal Scrollable Strip of Oval Cards */}
      <div className="w-full overflow-x-auto no-scrollbar py-6 px-4 sm:px-8 cursor-grab active:cursor-grabbing">
        <div className="flex gap-6 sm:gap-8 w-max mx-auto">
          {PORTFOLIO_DATA.skills.map((skill) => (
            <div
              key={skill.id}
              className="group w-[196px] h-[290px] sm:h-[347px] rounded-[15px] sm:rounded-[300px] border border-black/10 hover:border-[#ff6b00] bg-white hover:bg-[#0f0e0e] transition-colors duration-300 p-6 flex flex-col items-center justify-between text-center shrink-0"
            >
              {/* Circular Figure Container */}
              <div className="w-[136px] h-[136px] rounded-full bg-[#f3f3f3] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {iconMap[skill.iconName] || <FileText className="w-12 h-12 text-[#ff6b00]" />}
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 mb-3">
                <h4 className="font-syne font-bold text-lg text-[#0f0e0e] group-hover:text-white leading-tight mb-1 transition-colors">
                  {skill.name}
                </h4>
                <span className="font-syne font-semibold text-xs uppercase tracking-wider text-[#ff6b00] block mb-1">
                  {skill.category}
                </span>
                <span className="text-[11px] text-[#545b63] group-hover:text-white/70 block transition-colors leading-tight px-1">
                  {skill.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
