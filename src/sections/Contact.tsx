"use client";

import { MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const contactDetails = [
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn Professional",
      value: "linkedin.com/in/yosafat-juan-reno",
      href: personalInfo.linkedin,
      actionLabel: "Connect & Message",
    },
    {
      id: "instagram",
      icon: Instagram,
      label: "Instagram Network",
      value: "@juan_reno07",
      href: personalInfo.instagram,
      actionLabel: "Direct Connect",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Primary Operations Base",
      value: personalInfo.location,
      href: null,
      actionLabel: "On-Site & Remote",
    },
  ].filter((item) => {
    if (item.id === "linkedin") return personalInfo.linkedin;
    if (item.id === "instagram") return personalInfo.instagram;
    return true;
  });

  return (
    <section id="contact" className="relative py-24 bg-[#080C14]/90 border-t border-slate-800/60 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Communication Channels
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Contact & Professional Inquiries
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Open to enterprise infrastructure consultations, site audits, team leadership inquiries, and networking engineering opportunities.
            </p>
          </Reveal>
        </div>

        {/* Contact Dashboard */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {contactDetails.map((item, idx) => {
              const IconComponent = item.icon;
              const isLink = item.href !== null;

              return (
                <Reveal key={item.id} delay={0.08 * idx}>
                  <div className="group p-6 rounded-2xl glass-card glass-card-hover flex flex-col justify-between h-full transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl group-hover:scale-110 transition-transform">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        {isLink && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                            Online
                          </span>
                        )}
                      </div>

                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-100 block mt-1 font-mono break-all">
                        {item.value}
                      </span>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        {item.actionLabel}
                      </span>
                      
                      {isLink ? (
                        <a
                          href={item.href!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                        >
                          <span>Connect</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-cyan-400/80 font-mono font-semibold">
                          Active Base
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
            
            {/* Direct Connect Info Card */}
            <div className="md:col-span-3">
              <Reveal delay={0.25}>
                <div className="p-6 sm:p-8 rounded-2xl glass-card text-center max-w-2xl mx-auto border-cyan-500/20">
                  <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/20 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">
                    High Operational Availability & Quick Dispatch
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    I monitor network communication and system monitoring tools regularly. For professional opportunities, technical auditing, or enterprise infrastructure consulting, feel free to connect via LinkedIn.
                  </p>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
