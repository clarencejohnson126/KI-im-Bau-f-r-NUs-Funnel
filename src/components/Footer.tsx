"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { copy } from "../../content/copy";

export function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        {/* Rebelz AI Products Section */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="font-heading text-lg text-orange-400 mb-2">
              {footer.rebelzAI.headline}
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              {footer.rebelzAI.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {footer.rebelzAI.products.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-orange-500/50 rounded-lg px-4 py-3 transition-all"
              >
                <div>
                  <p className="font-medium text-white group-hover:text-orange-400 transition-colors">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500">{product.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">{footer.copyright}</p>

          {/* Links */}
          <nav className="flex gap-6">
            {footer.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
