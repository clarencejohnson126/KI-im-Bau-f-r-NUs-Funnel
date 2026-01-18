"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "brutal";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-heading font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

  const variants = {
    primary: `
      text-white bg-gradient-to-r from-orange-500 to-orange-600
      hover:from-orange-600 hover:to-orange-700
      hover:shadow-glow-orange hover:-translate-y-0.5
      active:translate-y-0 active:shadow-none
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
      before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
    `,
    secondary: `
      text-concrete-700 bg-white border-2 border-concrete-300
      hover:border-orange-500 hover:text-orange-600
      hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0
    `,
    ghost: `
      text-concrete-600
      hover:text-concrete-900 hover:bg-concrete-100
    `,
    brutal: `
      text-white bg-orange-500
      border-2 border-concrete-900 shadow-brutal
      hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1
      active:shadow-none active:translate-x-0 active:translate-y-0
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
