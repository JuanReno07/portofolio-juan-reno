"use client";

import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { education } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <section className="relative py-24 bg-[#080C14]/90 border-t border-slate-800/60 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Education Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
                Academic Background
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 font-sans tracking-tight">
                Education & Credentials
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {education.map((edu) => (
                <Reveal key={edu.degree} delay={0.15}>
                  <div className="p-6 sm:p-8 rounded-2xl glass-card glass-card-hover transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                      
                      <div className="flex-1 space-y-3.5">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
                            {edu.degree}
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs text-slate-300 font-mono">
                          <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                            <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* GPA badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-slate-200 text-sm font-medium">
                          <Award className="h-4 w-4 text-cyan-400" />
                          <span>Cumulative GPA: <span className="font-mono font-bold text-cyan-300">{edu.gpa}</span> (Distinction)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Image */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.2}>
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 lg:w-84 lg:h-[420px]">
                {/* Glow accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent rounded-3xl blur-2xl -z-10" />
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-500/20 to-transparent -z-10" />
                
                <div className="w-full h-full rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/60 relative group shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/images/yosafat-juan-reno-formal.jpg"
                    alt="Yosafat Juan Reno formal graduation portrait"
                    fill
                    sizes="(max-w-768px) 256px, 336px"
                    className="object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Graduation Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/20 rounded-xl p-3 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">Alumni & Degree</p>
                      <p className="text-xs font-semibold text-slate-100">Bachelor of Computer Science</p>
                    </div>
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
