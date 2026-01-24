"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface PromptBlockProps {
  children: string;
  title?: string;
}

export function PromptBlock({ children, title = "Prompt zum Kopieren" }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="my-8 group"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-concrete-800 px-4 py-2 rounded-t-xl border-b border-concrete-700">
        <span className="text-sm text-concrete-400 font-medium">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-concrete-400 hover:text-orange-400 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Kopiert!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Kopieren</span>
            </>
          )}
        </button>
      </div>

      {/* Code Block */}
      <motion.div
        whileHover={{ boxShadow: "0 0 30px rgba(249, 115, 22, 0.1)" }}
        className="relative bg-concrete-900 rounded-b-xl overflow-hidden"
      >
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-concrete-300 whitespace-pre-wrap">{children}</code>
        </pre>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
