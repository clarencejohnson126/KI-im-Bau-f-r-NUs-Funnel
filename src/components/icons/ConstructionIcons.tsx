"use client";

import React from "react";

// Bohrmaschine / Drill
export function DrillIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 32h8v12H12z" fill="#f97316" />
      <path d="M20 28h16v20H20z" fill="#ea580c" />
      <path d="M36 32h20v4H36z" fill="#64748b" />
      <path d="M56 33h6l2 1v2l-2 1h-6z" fill="#94a3b8" />
      <path d="M24 28v-4a4 4 0 014-4h4a4 4 0 014 4v4" fill="#1e293b" />
      <circle cx="30" cy="38" r="3" fill="#1e293b" />
      <path d="M12 36h4v4h-4z" fill="#ea580c" />
    </svg>
  );
}

// Bagger / Excavator
export function ExcavatorIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="40" width="32" height="16" rx="2" fill="#f97316" />
      <rect x="12" y="32" width="16" height="10" fill="#ea580c" />
      <rect x="14" y="34" width="8" height="6" fill="#7dd3fc" />
      <path d="M28 36l16-20h4l-12 20z" fill="#fbbf24" />
      <path d="M48 16l8 4-4 8-8-4z" fill="#64748b" />
      <circle cx="14" cy="54" r="6" fill="#1e293b" />
      <circle cx="34" cy="54" r="6" fill="#1e293b" />
      <circle cx="14" cy="54" r="3" fill="#64748b" />
      <circle cx="34" cy="54" r="3" fill="#64748b" />
    </svg>
  );
}

// Leiter / Ladder
export function LadderIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8l-4 52h6L26 8z" fill="#f97316" />
      <path d="M44 8l-4 52h-6L38 8z" fill="#f97316" />
      <rect x="22" y="16" width="20" height="3" fill="#ea580c" />
      <rect x="21" y="26" width="20" height="3" fill="#ea580c" />
      <rect x="20" y="36" width="20" height="3" fill="#ea580c" />
      <rect x="19" y="46" width="20" height="3" fill="#ea580c" />
    </svg>
  );
}

// Kabeltrommel / Cable Drum
export function CableDrumIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="32" rx="24" ry="8" fill="#1e293b" />
      <rect x="8" y="24" width="48" height="16" fill="#f97316" />
      <ellipse cx="32" cy="24" rx="24" ry="8" fill="#ea580c" />
      <ellipse cx="32" cy="24" rx="16" ry="5" fill="#fbbf24" />
      <ellipse cx="32" cy="24" rx="8" ry="3" fill="#1e293b" />
      <path d="M48 32c4-2 8 0 8 4s-4 6-8 4" stroke="#fbbf24" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Zollstock / Folding Ruler
export function RulerIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="28" width="24" height="8" fill="#fbbf24" />
      <rect x="28" y="28" width="24" height="8" transform="rotate(-15 28 28)" fill="#f59e0b" />
      <rect x="6" y="30" width="1" height="4" fill="#1e293b" />
      <rect x="10" y="31" width="1" height="3" fill="#1e293b" />
      <rect x="14" y="30" width="1" height="4" fill="#1e293b" />
      <rect x="18" y="31" width="1" height="3" fill="#1e293b" />
      <rect x="22" y="30" width="1" height="4" fill="#1e293b" />
      <circle cx="28" cy="32" r="2" fill="#1e293b" />
    </svg>
  );
}

// Messgerät / Measuring Device
export function MeasuringDeviceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="12" width="32" height="40" rx="4" fill="#1e293b" />
      <rect x="20" y="16" width="24" height="16" rx="2" fill="#22c55e" />
      <text x="24" y="28" fill="#1e293b" fontSize="8" fontFamily="monospace">12.45</text>
      <rect x="20" y="36" width="10" height="6" rx="1" fill="#64748b" />
      <rect x="34" y="36" width="10" height="6" rx="1" fill="#64748b" />
      <rect x="20" y="44" width="24" height="4" rx="1" fill="#f97316" />
    </svg>
  );
}

// Schweißgerät / Welding Machine
export function WeldingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="20" width="28" height="32" rx="4" fill="#dc2626" />
      <rect x="16" y="24" width="8" height="8" rx="1" fill="#1e293b" />
      <circle cx="32" cy="28" r="4" fill="#fbbf24" />
      <rect x="16" y="36" width="20" height="4" fill="#64748b" />
      <rect x="16" y="42" width="20" height="4" fill="#64748b" />
      <path d="M40 36c8-4 16 0 16 8l-4 4-8-4z" fill="#64748b" />
      <path d="M52 44l4 8" stroke="#fbbf24" strokeWidth="2" />
      <path d="M48 46l6 10" stroke="#f97316" strokeWidth="2" />
      <path d="M50 48l4 6" stroke="#fbbf24" strokeWidth="1" />
    </svg>
  );
}

// Putzgerät / Plastering Machine
export function PlasteringIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="24" width="32" height="28" rx="4" fill="#64748b" />
      <rect x="12" y="28" width="12" height="8" fill="#1e293b" />
      <circle cx="32" cy="38" r="6" fill="#f97316" />
      <rect x="40" y="32" width="16" height="8" fill="#94a3b8" />
      <path d="M56 32l4-4v16l-4-4z" fill="#a3a3a3" />
      <rect x="12" y="40" width="20" height="8" fill="#475569" />
      <circle cx="16" cy="52" r="4" fill="#1e293b" />
      <circle cx="32" cy="52" r="4" fill="#1e293b" />
    </svg>
  );
}

// Helm / Hard Hat
export function HardHatIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="40" rx="24" ry="6" fill="#ca8a04" />
      <path d="M12 40c0-16 8-24 20-24s20 8 20 24H12z" fill="#fbbf24" />
      <rect x="8" y="38" width="48" height="6" rx="2" fill="#f59e0b" />
      <path d="M20 40v-8c0-8 5-12 12-12s12 4 12 12v8" fill="none" stroke="#ca8a04" strokeWidth="2" />
    </svg>
  );
}

// Hammer
export function HammerIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="28" width="8" height="32" rx="2" fill="#92400e" transform="rotate(-45 28 28)" />
      <rect x="12" y="8" width="24" height="14" rx="2" fill="#64748b" transform="rotate(-45 12 8)" />
      <rect x="8" y="12" width="8" height="10" fill="#475569" transform="rotate(-45 8 12)" />
    </svg>
  );
}

// Säge / Saw
export function SawIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24h48l-4 4H12z" fill="#64748b" />
      <path d="M12 28l2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4 2-4 2 4" stroke="#94a3b8" strokeWidth="2" fill="none" />
      <rect x="48" y="20" width="12" height="16" rx="2" fill="#92400e" />
      <rect x="50" y="24" width="8" height="8" rx="1" fill="#78350f" />
    </svg>
  );
}

// Schraubenzieher / Screwdriver
export function ScrewdriverIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="4" width="8" height="24" rx="1" fill="#f97316" />
      <rect x="30" y="8" width="4" height="4" fill="#ea580c" />
      <rect x="30" y="14" width="4" height="4" fill="#ea580c" />
      <rect x="30" y="28" width="4" height="28" fill="#64748b" />
      <rect x="31" y="52" width="2" height="8" fill="#94a3b8" />
    </svg>
  );
}

// Animated floating tools component
export function FloatingTools() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[5%] animate-float-slow opacity-20">
        <DrillIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-[20%] right-[10%] animate-float-medium opacity-15">
        <HardHatIcon className="w-20 h-20" />
      </div>
      <div className="absolute bottom-[30%] left-[8%] animate-float-fast opacity-20">
        <RulerIcon className="w-14 h-14" />
      </div>
      <div className="absolute bottom-[20%] right-[5%] animate-float-slow opacity-15">
        <HammerIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-[40%] right-[15%] animate-float-medium opacity-10">
        <CableDrumIcon className="w-24 h-24" />
      </div>
      <div className="absolute top-[60%] left-[12%] animate-float-fast opacity-15">
        <ScrewdriverIcon className="w-12 h-12" />
      </div>
    </div>
  );
}
