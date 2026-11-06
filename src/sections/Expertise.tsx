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
    <section id="expertise" className="relative py-24 bg-[#080C14]/90 border-t border-slate-800/60 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Technical Stack
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Technical Expertise & Competency
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Categorized directory of systems, security hardware, and protocols deployed in enterprise environments.
            </p>
          </Reveal>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((cat, catIdx) => {
            const IconComponent = iconMap[cat.icon] || Settings;

            return (
              <Reveal key={cat.id} delay={0.06 * catIdx}>
                <div className="group h-full flex flex-col p-6 rounded-2xl glass-card glass-card-hover transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-800/80 pb-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2 mt-1 flex-grow align-top">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/70 border border-slate-800/80 text-slate-300 group-hover:border-cyan-500/25 hover:border-cyan-400! hover:text-cyan-300! transition-all duration-200"
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
