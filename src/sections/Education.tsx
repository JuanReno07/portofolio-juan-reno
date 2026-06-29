"use client";

import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <section className="relative py-20 bg-slate-950/40 border-t border-slate-900 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Education Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Academic Background
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
                Education Credentials
              </h2>
            </Reveal>
            <div className="h-1 w-12 bg-teal-500 rounded-full mt-4 mb-8" />

            <div className="space-y-8">
              {education.map((edu) => (
                <Reveal key={edu.degree} delay={0.15}>
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-md hover:border-teal-500/20 transition-all duration-300">
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-teal-400">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 font-sans">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-semibold text-teal-400 mt-1">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                          <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                            <Calendar className="h-3.5 w-3.5 text-teal-500/80" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                            <MapPin className="h-3.5 w-3.5 text-teal-500/80" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* GPA badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/5 border border-teal-500/10 text-slate-200 text-sm font-medium">
                          <Award className="h-4 w-4 text-teal-400" />
                          <span>Cumulative GPA: <span className="font-mono font-bold text-teal-400">{edu.gpa}</span></span>
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
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-2xl -z-10" />
                <div className="absolute inset-0 border-2 border-slate-800 -translate-x-3 translate-y-3 rounded-2xl -z-10" />
                <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 relative group shadow-lg">
                  <Image
                    src="/images/yosafat-juan-reno-formal.jpg"
                    alt="Yosafat Juan Reno formal graduation portrait"
                    fill
                    sizes="(max-w-768px) 100vw, 320px"
                    className="object-cover object-[center_20%] filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
