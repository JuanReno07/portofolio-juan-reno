"use client";

import { metrics } from "@/data/portfolio";
import MetricCard from "@/components/ui/MetricCard";
import Reveal from "@/components/ui/Reveal";

export default function Impact() {
  return (
    <section className="relative py-16 bg-slate-950/40 border-y border-slate-900 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Operational Statistics
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-100 font-sans">
              Professional Impact & Infrastructure Scale
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              A snapshot of the scale of technical operations and support managed day-to-day at the Cikarang site.
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
