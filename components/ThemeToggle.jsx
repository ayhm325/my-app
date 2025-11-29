"use client";

import { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);
  const buttonRef = useRef(null);

  // تفعيل الثيم عند التركيب
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const createParticles = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      angle: (i * 360) / 12,
      color:
        theme === "light"
          ? `hsl(${45 + i * 10}, 100%, 60%)`
          : `hsl(${220 + i * 15}, 80%, 60%)`,
    }));

    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  const toggleTheme = (event) => {
    createParticles(event);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!isMounted) return null;

  return (
    <>
      <button
        ref={buttonRef}
        className="relative w-14 h-14 rounded-full cursor-pointer bg-gradient-to-br from-purple-400/20 via-pink-300/10 to-blue-400/20 border-2 border-white/30 backdrop-blur-lg flex items-center justify-center transition-transform hover:scale-110"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        <Sun
          className={`absolute text-yellow-400 filter drop-shadow-lg transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
          size={28}
        />
        <Moon
          className={`absolute text-blue-300 filter drop-shadow-lg transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-100"
          }`}
          size={28}
        />
      </button>

      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="fixed w-2 h-2 rounded-full z-50 animate-particle"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            transform: `translate(${Math.cos((p.angle * Math.PI) / 180) * 100}px, ${Math.sin(
              (p.angle * Math.PI) / 180
            ) * 100}px)`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes particle {
          to {
            transform: scale(0);
            opacity: 0;
          }
        }
        .animate-particle {
          animation: particle 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
