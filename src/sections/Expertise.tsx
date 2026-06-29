"use client";

import { Network, ShieldAlert, Server, Cpu, Settings, LucideIcon } from "lucide-react";
import { expertise } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Network,
  ShieldAlert,
  Server,
  Cpu,
  Settings,
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-20 bg-slate-950/40 border-t border-slate-900 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Skill Mapping
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
              Technical Expertise & Competency
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Categorized directory of systems, configurations, and network operations managed on-site.
            </p>
          </Reveal>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertise.map((cat, catIdx) => {
            // Dynamically select Lucide icon component based on data definition
            const IconComponent = iconMap[cat.icon] || Settings;

            return (
              <Reveal key={cat.id} delay={0.08 * catIdx}>
                <div className="group h-full flex flex-col p-6 bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/30 rounded-xl backdrop-blur-sm shadow-md transition-all duration-300 hover:bg-slate-900">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 mb-4">
                    <div className="p-2.5 bg-slate-950/85 border border-slate-800 rounded-lg text-teal-400 group-hover:text-teal-300 group-hover:border-teal-500/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 font-sans group-hover:text-teal-400 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2 mt-2 flex-grow align-top">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold font-mono bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:text-teal-400 hover:border-teal-500/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
