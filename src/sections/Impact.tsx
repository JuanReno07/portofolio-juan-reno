"use client";

import { metrics } from "@/data/portfolio";
import MetricCard from "@/components/ui/MetricCard";
import Reveal from "@/components/ui/Reveal";

export default function Impact() {
  return (
    <section className="relative py-20 bg-[#080C14]/80 border-y border-slate-800/60 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
              Telemetry & Scale
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              Operational Impact & Scale
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              High-availability metrics reflecting site enterprise infrastructure and user support reach.
            </p>
          </Reveal>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <Reveal key={metric.id} delay={0.05 * (index % 4)}>
              <MetricCard
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                description={metric.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
