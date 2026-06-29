"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-slate-950/20 border-t border-slate-900 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Career Timeline
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
              Professional Experience
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Detailed tracking of leadership roles, system administrations, and network deployments.
            </p>
          </Reveal>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 sm:before:left-4 before:w-0.5 before:bg-slate-800">
          
          {experience.map((job) => (
            <div key={job.id} className="relative mb-12 last:mb-0">
              
              {/* Timeline dot */}
              <div className="absolute -left-[30px] sm:-left-[20px] top-1.5 p-1 bg-slate-950 rounded-full border-2 border-teal-500 z-10 text-teal-400">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Experience Card */}
              <Reveal delay={0.15}>
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-md hover:border-teal-500/20 transition-all duration-300">
                  
                  {/* Job Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-teal-400 mt-1">
                        {job.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="h-3.5 w-3.5 text-teal-500/85" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                        <MapPin className="h-3.5 w-3.5 text-teal-500/85" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Achievements Title */}
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                    Key Achievements & Responsibilities
                  </h4>

                  {/* Achievements List */}
                  <ul className="grid grid-cols-1 gap-3.5 text-sm sm:text-base text-slate-400">
                    {job.achievements.map((achievement, actIdx) => (
                      <li key={actIdx} className="flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-teal-500/80 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
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
