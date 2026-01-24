"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap } from "lucide-react";

interface TLDRBoxProps {
  children: React.ReactNode;
}

export function TLDRBox({ children }: TLDRBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="my-10 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-full">
          <Zap className="w-5 h-5 text-orange-400" />
        </div>
        <h2 className="text-orange-400 font-bold text-sm uppercase tracking-wider">
          TL;DR – Die Kurzfassung
        </h2>
      </div>
      <div className="text-white leading-relaxed text-lg">{children}</div>
    </motion.div>
  );
}
