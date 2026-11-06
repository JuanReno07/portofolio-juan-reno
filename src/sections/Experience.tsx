"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#080C14]/90 border-t border-slate-800/60 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Track Record
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Professional Experience
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Operational track record in team leadership, firewall policy, and mission-critical enterprise systems.
            </p>
          </Reveal>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-slate-800 before:to-transparent">
          
          {experience.map((job) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              
              {/* Timeline dot with glowing effect */}
              <div className="absolute -left-[30px] sm:-left-[20px] top-1.5 p-1.5 bg-[#080C14] rounded-full border-2 border-cyan-400 z-10 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Experience Card */}
              <Reveal delay={0.15}>
                <div className="rounded-2xl p-6 sm:p-8 glass-card glass-card-hover transition-all duration-300">
                  
                  {/* Job Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 mt-1 flex items-center gap-1.5">
                        <span>{job.company}</span>
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                      <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-md border border-cyan-500/20 text-cyan-300">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800 text-slate-400">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Achievements Title */}
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Key Core Responsibilities & Impact
                  </h4>

                  {/* Achievements List */}
                  <ul className="grid grid-cols-1 gap-3.5 text-sm sm:text-base text-slate-300">
                    {job.achievements.map((achievement, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </Reveal>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
