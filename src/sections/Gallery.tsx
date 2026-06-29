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
    <section className="relative py-20 bg-slate-950/20 border-t border-slate-900 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Technical Documentation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100 font-sans">
              Operational Facilities & Systems
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Visual records of active physical hardware configurations and team deployments maintained at the facility.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Reveal key={item.id} delay={0.1 * idx}>
                <div className="group flex flex-col h-full bg-slate-900/40 border border-slate-800/80 rounded-xl overflow-hidden shadow-md hover:border-teal-500/20 transition-all duration-300">
                  
                  {/* Image wrapper with fixed aspect ratio */}
                  <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 100vw, 384px"
                      className="object-cover object-center filter brightness-90 group-hover:brightness-100 group-hover:scale-103 transition-all duration-500"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-[10px] font-semibold text-teal-400 uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  {/* Info contents */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-slate-950 rounded text-teal-400 border border-slate-800">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-100 font-sans">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-grow">
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
