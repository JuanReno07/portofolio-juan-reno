"use client";

import { caseStudies } from "@/data/portfolio";
import { FolderGit2, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-[#080C14]/80 border-t border-slate-800/60 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Field Deployments
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Selected Infrastructure Responsibilities
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Technical case studies across core network segmentation, NGFW perimeter security, and high-availability CCTV archiving.
            </p>
          </Reveal>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((project, idx) => (
            <Reveal key={project.id} delay={0.08 * (idx % 2)}>
              <div className="group h-full flex flex-col p-6 sm:p-8 rounded-2xl glass-card glass-card-hover transition-all duration-300">
                
                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400">Case Study 0{idx + 1}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                </div>

                <div className="h-px bg-slate-800/80 w-full my-5" />

                {/* Grid details */}
                <div className="space-y-4 flex-grow">
                  
                  {/* Context */}
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                      Context / Operational Challenge
                    </span>
                    <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  {/* Responsibility */}
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                      Responsibility & Implementation
                    </span>
                    <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                      {project.responsibility}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/20 rounded-xl">
                    <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      Demonstrated Impact
                    </span>
                    <p className="text-sm text-slate-200 mt-1 leading-relaxed font-sans font-medium">
                      {project.impact}
                    </p>
                  </div>

                </div>

                {/* Technologies pills */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
