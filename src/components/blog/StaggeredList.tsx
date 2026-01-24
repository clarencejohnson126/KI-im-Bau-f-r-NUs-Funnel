"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface StaggeredListProps {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

export function StaggeredList({
  items,
  className = "",
  itemClassName = "",
  staggerDelay = 0.1,
}: StaggeredListProps) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.ul
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants} className={itemClassName}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
