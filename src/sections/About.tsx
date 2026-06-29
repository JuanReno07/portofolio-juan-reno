"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import { ShieldCheck, Server, Settings, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Coordinating a 5-person IT support division keeping core systems online.",
    },
    {
      icon: Server,
      title: "Infrastructure Scaling",
      description: "Maintaining 163 endpoints, 10 servers, and 27 network nodes.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Auditing",
      description: "Managing edge Fortigate/Mikrotik firewalls and CCTV surveillance networks.",
    },
    {
      icon: Settings,
      title: "Operations Stability",
      description: "Providing high-availability technical support to over 300 site staff.",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Professional Photograph */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <Reveal>
              <div className="relative w-full max-w-md h-[420px] sm:h-[480px]">
                {/* Visual Accent Box */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/5 rounded-2xl blur-xl -z-10" />
                
                {/* Image Wrap */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-lg relative group">
                  <Image
                    src="/images/infrastructure-work-yosafat.jpg"
                    alt="Yosafat Juan Reno configuring a server rack patch panel"
                    fill
                    sizes="(max-w-768px) 100vw, 400px"
                    className="object-cover object-[center_35%] filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                  />
                  {/* Floating Caption Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg p-3">
                    <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Field Operations</p>
                    <p className="text-xs text-slate-300 mt-0.5">Configuring hardware patch panels at the Cikarang site rack.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Copy text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Professional Profile
              </span>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
                About Yosafat Juan Reno
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-1 w-12 bg-teal-500 rounded-full mt-4" />
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 text-base text-slate-300 leading-relaxed">
                {personalInfo.detailedAbout}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                Over the past 7 years, my focus has been on designing and maintaining resilient infrastructure that minimizes downtime. I specialize in routing, switching, secure remote-access VPN deployment, and site security operations. My approach combines systematic asset logging and proactive Zabbix-based alerting with hands-on hardware expertise.
              </p>
            </Reveal>

            {/* Micro Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((hl, idx) => {
                const IconComponent = hl.icon;
                return (
                  <Reveal key={hl.title} delay={0.1 * idx + 0.3}>
                    <div className="flex gap-3.5 items-start">
                      <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-teal-400 mt-0.5">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-200">
                          {hl.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {hl.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
