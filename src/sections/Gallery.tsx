"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Server, Users, Network } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      id: "networking-hardware",
      src: "/images/network-rack-mikrotik-fortigate.jpg",
      alt: "Enterprise network rack with Cisco, Mikrotik and Fortigate devices",
      title: "Core Routing & Firewall Rack",
      category: "Network Engineering",
      icon: Network,
      description: "Close-up of the configured edge infrastructure featuring a Fortigate firewall, Mikrotik router, Ruckus ZoneDirector, and stacked Cisco Catalyst switches.",
    },
    {
      id: "server-hardware",
      src: "/images/server-rack-nutanix-hp.jpg",
      alt: "Server rack displaying virtualization servers and storage devices",
      title: "Enterprise Server Rack",
      category: "Systems Administration",
      icon: Server,
      description: "Enterprise storage and virtualization stack consisting of local rack servers, storage enclosures, and network storage backup hardware.",
    },
    {
      id: "it-team",
      src: "/images/it-team-coordination.jpg",
      alt: "IT Support Team coordination event",
      title: "5-Person Support Team",
      category: "Operations Coordination",
      icon: Users,
      description: "Daily team coordination and support operations are led on-site to maintain operational continuity and assist end-users across the site.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#080C14]/80 border-t border-slate-800/60 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Field Documentation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Operational Facilities & Hardware
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Photographic documentation of configured physical rack nodes, power units, and team coordination.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Reveal key={item.id} delay={0.1 * idx}>
                <div className="group flex flex-col h-full rounded-2xl overflow-hidden glass-card glass-card-hover transition-all duration-300">
                  
                  {/* Image wrapper with fixed aspect ratio */}
                  <div className="relative w-full h-72 overflow-hidden bg-slate-950">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 100vw, 384px"
                      className="object-cover object-center filter brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent opacity-80" />

                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-lg text-[11px] font-mono font-semibold text-cyan-300 uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <IconComponent className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
