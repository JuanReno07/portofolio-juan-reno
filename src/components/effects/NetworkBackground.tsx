"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    const connectionDistance = 120;
    let isReducedMotion = false;
    let active = true;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      
      // Scale down particle density for smaller devices
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 35 : 90;
      
      initNodes(count);
    };

    const initNodes = (count: number) => {
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.35, // Drift speed
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1, // Node size
        });
      }
    };

    const draw = () => {
      if (!canvas || !ctx || !active) return;
      
      // Clear canvas logical area
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Mouse Spotlight Layer (subtle radial glow)
      if (mouseRef.current.isActive) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          350
        );
        gradient.addColorStop(0, "rgba(20, 184, 166, 0.04)");
        gradient.addColorStop(0.5, "rgba(20, 184, 166, 0.015)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      // Draw and connect nodes
      const length = nodes.length;
      for (let i = 0; i < length; i++) {
        const node = nodes[i];

        // Only update positions if reduced motion is disabled
        if (!isReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off boundaries (using logical dimensions)
          if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
          if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;

          // Influence of mouse (subtle push away)
          if (mouseRef.current.isActive) {
            const dx = node.x - mouseRef.current.x;
            const dy = node.y - mouseRef.current.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 120) {
              const force = (120 - distance) / 120;
              // Guard division by zero & NaN coordinates
              if (distance > 0) {
                node.x += (dx / distance) * force * 0.5;
                node.y += (dy / distance) * force * 0.5;
              }
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20, 184, 166, 0.3)";
        ctx.fill();

        // Draw connecting lines
        for (let j = i + 1; j < length; j++) {
          const target = nodes[j];
          const dx = node.x - target.x;
          const dy = node.y - target.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleVisibilityChange = () => {
      cancelAnimationFrame(animationFrameId);
      if (document.hidden) {
        active = false;
      } else {
        active = true;
        if (!isReducedMotion) {
          animationFrameId = requestAnimationFrame(draw);
        }
      }
    };

    // Initialize
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resizeCanvas();
    draw();

    return () => {
      active = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}
