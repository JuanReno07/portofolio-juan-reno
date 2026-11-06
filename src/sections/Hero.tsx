"use client";

import Image from "next/image";
import { MapPin, Briefcase, ArrowDown } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import DownloadCVButton from "@/components/ui/DownloadCVButton";
import Reveal from "@/components/ui/Reveal";

export default function Hero({ hasCV = false }: { hasCV?: boolean }) {
  const handleScrollToExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#experience");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#experience");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column (Info) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            
            {/* Availability Indicator */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 w-fit font-mono shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                Active Operational Duty — Cikarang, ID
              </div>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.3}>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-cyan-400 font-sans flex items-center gap-2">
                <span>{personalInfo.title}</span>
              </h2>
            </Reveal>

            {/* Supporting Statement */}
            <Reveal delay={0.4}>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl border-l-2 border-cyan-500/60 pl-4 bg-cyan-500/[0.02] py-1 rounded-r-lg">
                &ldquo;{personalInfo.supportingStatement}&rdquo;
              </p>
            </Reveal>

            {/* Introduction */}
            <Reveal delay={0.5}>
              <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                {personalInfo.introduction}
              </p>
            </Reveal>

            {/* Location & Status Info */}
            <Reveal delay={0.55}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-400 font-medium font-mono">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
                  <Briefcase className="h-4 w-4 text-cyan-400" />
                  <span>PT Prokemas Adhikari Kreasi</span>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.6}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToExperience}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base cursor-pointer"
                >
                  <span>Explore Infrastructure</span>
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </button>
                
                {hasCV && <DownloadCVButton variant="primary" />}

                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}

                {personalInfo.instagram && (
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Hero Right Column (Integrated Image) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <Reveal delay={0.3}>
              <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] lg:w-96 lg:h-[480px]">
                {/* Glow Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-teal-500/15 rounded-3xl blur-2xl -z-10 animate-pulse duration-4000" />
                
                {/* Modern Tech Frames */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-transparent to-blue-500/20 -z-10 opacity-70 blur-xs" />
                
                {/* Primary Image Container with Glass Treatment */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-900/60 relative group shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-md">
                  <Image
                    src="/images/yosafat-juan-reno-portrait.jpg"
                    alt="Yosafat Juan Reno Portrait"
                    fill
                    sizes="(max-w-768px) 288px, (max-w-1024px) 320px, 384px"
                    priority
                    className="object-cover object-[center_20%] scale-100 transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
                  />
                  {/* Subtle Dark Overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/20 to-transparent opacity-80" />
                  
                  {/* Tech Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-cyan-500/20 rounded-xl p-3 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">Infrastructure Core</p>
                      <p className="text-xs font-semibold text-slate-100">7+ Yrs Enterprise Systems</p>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
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
