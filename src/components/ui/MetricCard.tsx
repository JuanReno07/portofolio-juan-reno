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
      setCount(value);
      return;
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
      className="flex flex-col p-6 bg-slate-900/60 border border-slate-800/80 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-teal-500/30 hover:bg-slate-800/60 hover:-translate-y-1 shadow-md hover:shadow-teal-950/20"
    >
      <span className="text-4xl lg:text-5xl font-bold tracking-tight text-teal-400 font-mono">
        {count}
        <span className="text-2xl lg:text-3xl text-slate-400 font-sans ml-0.5">{suffix}</span>
      </span>
      <h3 className="mt-3 text-lg font-semibold text-slate-100">{label}</h3>
      <p className="mt-1 text-sm text-slate-400 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
