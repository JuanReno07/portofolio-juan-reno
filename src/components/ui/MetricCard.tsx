"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface MetricCardProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export default function MetricCard({ value, suffix, label, description }: MetricCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let isReducedMotion = false;
    if (typeof window !== "undefined") {
      isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    if (isReducedMotion) {
      const id = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(id);
    }

    let animationFrameId: number;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * value);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value]);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col p-6 rounded-2xl glass-card glass-card-hover overflow-hidden transition-all duration-300"
    >
      {/* Top accent light */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner subtle glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

      <span className="text-4xl lg:text-5xl font-extrabold tracking-tight font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
        {count}
        <span className="text-2xl lg:text-3xl text-slate-400 font-sans ml-1 font-semibold">{suffix}</span>
      </span>
      <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors">{label}</h3>
      <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
