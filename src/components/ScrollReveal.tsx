"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const variants = {
  up: { y: 60, opacity: 0 },
  down: { y: -60, opacity: 0 },
  left: { x: -60, opacity: 0 },
  right: { x: 60, opacity: 0 },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { y: 0, x: 0, opacity: 1 } : variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
