"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function Reveal({ children, width = "100%", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
