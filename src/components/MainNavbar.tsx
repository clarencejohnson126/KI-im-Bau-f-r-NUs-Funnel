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
          <Link href="/blog">
            <motion.div
              className={`relative font-bold text-lg px-5 py-2.5 rounded-xl border-2 transition-colors duration-300 ${
                isScrolled
                  ? "bg-orange-500 border-orange-500 text-white hover:bg-orange-600"
                  : "bg-orange-500/90 border-orange-400 text-white hover:bg-orange-500"
              }`}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(249, 115, 22, 0)",
                  "0 0 20px 4px rgba(249, 115, 22, 0.4)",
                  "0 0 0 0 rgba(249, 115, 22, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Blog
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
