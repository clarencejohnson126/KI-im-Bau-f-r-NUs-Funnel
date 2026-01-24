"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-concrete-950/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end">
          <Link
            href="/blog"
            className={`font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
              isScrolled
                ? "text-white hover:text-orange-400"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
