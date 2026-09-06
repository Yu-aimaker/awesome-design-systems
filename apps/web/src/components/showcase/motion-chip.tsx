"use client";

import { motion } from "motion/react";

export function MotionChip() {
  return (
    <motion.span
      className="inline-flex h-10 items-center rounded-md bg-primary px-3 text-[14px] text-primary-foreground"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
    >
      motion/react · hover
    </motion.span>
  );
}
