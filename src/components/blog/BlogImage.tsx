"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function BlogImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: BlogImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`my-8 ${className}`}
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-concrete-800">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          priority={priority}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-concrete-500">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
