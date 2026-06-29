"use client";

import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const contactDetails = [
    {
      id: "email",
      icon: Mail,
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionLabel: "Send Email",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone Number",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      actionLabel: "Call Direct",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/yosafat-juan-reno-8886371b4",
      href: personalInfo.linkedin,
      actionLabel: "View Profile",
    },
    {
      id: "instagram",
      icon: Instagram,
      label: "Instagram Profile",
      value: "@juan_reno07",
      href: personalInfo.instagram,
      actionLabel: "View Profile",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Work Location",
      value: personalInfo.location,
      href: null,
      actionLabel: "Primary Base",
    },
  ].filter(item => {
    if (item.id === "linkedin") return personalInfo.linkedin;
    if (item.id === "instagram") return personalInfo.instagram;
    return true;
  });

  return (
    <section id="contact" className="relative py-20 bg-slate-950/20 border-t border-slate-900 z-10 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Get In Touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
              Contact & Connections
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Reach out directly for professional inquiries, system audits, or contract opportunities.
            </p>
          </Reveal>
        </div>

        {/* Contact Dashboard */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact Details Cards */}
            <div className="space-y-4 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item, idx) => {
                const IconComponent = item.icon;
                const isLink = item.href !== null;

                return (
                  <Reveal key={item.id} delay={0.08 * idx}>
                    <div className="group p-6 bg-slate-900/60 border border-slate-800/80 rounded-xl backdrop-blur-sm shadow-md transition-all duration-300 hover:border-teal-500/20 flex flex-col justify-between h-full">
                      <div className="flex gap-4">
                        <div className="p-3 bg-slate-950 border border-slate-800 text-teal-400 rounded-lg group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-all">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                            {item.label}
                          </span>
                          <span className="text-sm sm:text-base font-medium text-slate-200 block mt-1 font-mono break-all">
                            {item.value}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                        <span className="text-xs text-slate-400 font-medium">
                          {item.actionLabel}
                        </span>
                        
                        {isLink ? (
                          <a
                            href={item.href!}
                            target={item.id === "linkedin" ? "_blank" : undefined}
                            rel={item.id === "linkedin" ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                          >
                            <span>Connect</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-xs text-teal-500/60 font-semibold font-mono">
                            Active Operations
                          </span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            
            {/* Direct Connect Info Card */}
            <div className="md:col-span-2">
              <Reveal delay={0.35}>
                <div className="p-6 sm:p-8 bg-slate-900/40 border border-slate-800/80 rounded-xl backdrop-blur-sm shadow-md text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center p-2.5 bg-teal-500/5 text-teal-400 rounded-full border border-teal-500/10 mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-200">
                    Response Availability
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    I monitor operational and communication channels on a daily basis. You can expect a professional response to email inquiries within a business day. For urgent server, endpoint, or network infrastructure incidents, please contact directly via phone.
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
