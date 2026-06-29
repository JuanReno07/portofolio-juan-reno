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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Currently Active — Cikarang, ID
              </div>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 font-sans">
                {personalInfo.name}
              </h1>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.3}>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-teal-400 font-sans">
                {personalInfo.title}
              </h2>
            </Reveal>

            {/* Supporting Statement */}
            <Reveal delay={0.4}>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl border-l-2 border-teal-500/50 pl-4">
                &ldquo;{personalInfo.supportingStatement}&rdquo;
              </p>
            </Reveal>

            {/* Introduction */}
            <Reveal delay={0.5}>
              <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                {personalInfo.introduction}
              </p>
            </Reveal>

            {/* Location & Status Info */}
            <Reveal delay={0.55}>
              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-teal-500/80" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-teal-500/80" />
                  <span>PT Prokemas Adhikari Kreasi</span>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.6}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToExperience}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-100 hover:text-teal-400 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm md:text-base cursor-pointer"
                >
                  <span>View Experience</span>
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </button>
                
                {hasCV && <DownloadCVButton variant="primary" />}

                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-amber-500/10 rounded-2xl blur-xl -z-10 animate-pulse duration-4000" />
                
                {/* Offset Border Styling */}
                <div className="absolute inset-0 border-2 border-slate-800 translate-x-3 translate-y-3 rounded-2xl -z-10 transition-transform duration-500 hover:translate-x-1.5 hover:translate-y-1.5" />
                <div className="absolute inset-0 border-2 border-teal-500/30 -translate-x-3 -translate-y-3 rounded-2xl -z-10 transition-transform duration-500 hover:-translate-x-1.5 hover:-translate-y-1.5" />

                {/* Primary Image Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 relative group">
                  <Image
                    src="/images/yosafat-juan-reno-portrait.jpg"
                    alt="Yosafat Juan Reno Portrait"
                    fill
                    sizes="(max-w-768px) 288px, (max-w-1024px) 320px, 384px"
                    priority
                    className="object-cover object-[center_20%] scale-100 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-teal-500/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
