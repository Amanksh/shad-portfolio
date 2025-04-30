"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const BeamEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b0764,transparent)]" />
    </div>
  );
};
