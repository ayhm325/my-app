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
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
   // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const createParticles = (event) => {
    const button = event.currentTarget.getBoundingClientRect();
    const centerX = button.left + button.width / 2;
    const centerY = button.top + button.height / 2;
    
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      angle: (i * 360) / 12,
      color: theme === "light" 
        ? `hsl(${45 + i * 10}, 100%, 60%)` // Warm colors for sun
        : `hsl(${220 + i * 15}, 80%, 60%)` // Cool colors for moon
    }));

    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000); // Clean up particles
  };

  const toggleTheme = (event) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    createParticles(event);
    
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      setTimeout(() => setIsAnimating(false), 50); // Allow icon to fade in
    }, 300); // Time for particles to explode
  };

  if (!isMounted) return null;

  return (
    <>
      <style>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(180deg) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes holographic-scan {
          0% { transform: translateY(-100%) rotate(0deg); }
          100% { transform: translateY(100%) rotate(360deg); }
        }

        @keyframes particle-explode {
          to {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes sun-rays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes moon-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(147, 197, 253, 0.8); }
          50% { box-shadow: 0 0 20px rgba(147, 197, 253, 1); }
        }

        .holographic-button {
          position: relative;
          width: 4.5rem;
          height: 4.5rem;
          cursor: pointer;
          background: linear-gradient(45deg, 
            rgba(120, 119, 198, 0.3), 
            rgba(255, 255, 255, 0.1), 
            rgba(120, 119, 198, 0.3));
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: morph 8s ease-in-out infinite, float 4s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .holographic-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(255, 0, 150, 0.2) 60deg,
            rgba(0, 255, 255, 0.2) 120deg,
            rgba(255, 255, 0, 0.2) 180deg,
            transparent 360deg
          );
          animation: holographic-scan 4s linear infinite;
          z-index: -1;
        }
        
        .holographic-button::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%);
            z-index: -1;
        }

        .holographic-button:hover {
            transform: scale(1.1);
            border-color: rgba(255, 255, 255, 0.5);
        }

        .icon-container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .icon-container.hidden {
          opacity: 0;
          transform: scale(0.5);
        }

        .sun-icon {
            color: #fbbf24;
            filter: drop-shadow(0 0 8px #fbbf24);
            animation: sun-rays 10s linear infinite;
        }

        .moon-icon {
            color: #93c5fd;
            filter: drop-shadow(0 0 8px #93c5fd);
            animation: moon-glow 2s ease-in-out infinite;
        }

        .particle {
            position: fixed;
            pointer-events: none;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            z-index: 9999;
            animation: particle-explode 0.8s ease-out forwards;
        }
      `}</style>

      <button
        ref={buttonRef}
        className="holographic-button"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {/* Sun Icon */}
        <div className={`icon-container ${theme === 'dark' || isAnimating ? 'hidden' : ''}`}>
          <Sun className="sun-icon" size={32} />
        </div>

        {/* Moon Icon */}
        <div className={`icon-container ${theme === 'light' || isAnimating ? 'hidden' : ''}`}>
          <Moon className="moon-icon" size={32} />
        </div>
      </button>

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            '--tx': `${Math.cos(p.angle * Math.PI / 180) * 100}px`,
            '--ty': `${Math.sin(p.angle * Math.PI / 180) * 100}px`,
            left: `${p.x}px`,
            top: `${p.y}px`,
            backgroundColor: p.color,
          }}
        />
      ))}
    </>
  );
}