"use client";

import { caseStudies } from "@/data/portfolio";
import { FolderGit2, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section id="work" className="relative py-20 bg-slate-950/20 border-t border-slate-900 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Infrastructure Operations
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
              Selected Infrastructure Responsibilities
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Key systems and configurations maintained as part of site operational duties.
            </p>
          </Reveal>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 * (idx % 2)}>
              <div className="group h-full flex flex-col p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/30 rounded-xl backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-slate-900 flex-grow">
                
                {/* Title */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-slate-950/70 border border-slate-800 text-teal-400 rounded-lg group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-all">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                </div>

                <div className="h-px bg-slate-800/60 w-full my-4" />

                {/* Grid details */}
                <div className="space-y-4 flex-grow">
                  
                  {/* Context */}
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Context / Challenge
                    </span>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  {/* Responsibility */}
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Responsibility & Execution
                    </span>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {project.responsibility}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="p-3 bg-teal-950/15 border border-teal-500/10 rounded-lg">
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Operational Impact
                    </span>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed font-sans font-medium">
                      {project.impact}
                    </p>
                  </div>
                  
                </div>

                {/* Technologies used */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold font-mono bg-slate-950/80 text-teal-400 border border-slate-800/50"
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
