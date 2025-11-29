"use client";

import { Home } from "lucide-react";

export default function HomeButton() {
  return (
    <a
      href="/home"
      className="
        fixed left-1/2 bottom-8 -translate-x-1/2 z-50
        flex items-center justify-center w-16 h-16 rounded-full
        bg-black/80 border-2 border-yellow-300 shadow-2xl neon-glow
        hover:bg-yellow-900/40 hover:border-yellow-200 transition-all duration-300
        active:scale-95
      "
      style={{boxShadow:'0 0 32px 0 #ffe06699'}}
      aria-label="Home"
    >
      <Home size={32} className="text-yellow-300 neon-glow" />
    </a>
  );
}
