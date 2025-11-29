"use client";

import { useLanguage } from "../../LanguageContext";
import headerAr from "../../../src/locales/ar/header.json";
import headerEn from "../../../src/locales/en/header.json";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import ThemeToggle from "../../../components/ThemeToggle";
import SignUp from "../../../components/SignUp";
import { useEffect, useRef } from "react";

export default function Header() {
  const { language } = useLanguage();
  const headerText = language === "ar" ? headerAr : headerEn;

  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // إنشاء الجسيمات
    const particleCount = 40;
    const tempParticles = [];
    for (let i = 0; i < particleCount; i++) {
      tempParticles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 4 + 2,
        color: Math.random() > 0.5 ? "#ffff66" : "#00f2fe",
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 1.5 + 0.5,
      });
    }
    particlesRef.current = tempParticles;

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(p => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.radius *= 0.98;

        if (p.radius < 0.5) {
          p.x = canvas.width / 2;
          p.y = canvas.height / 2;
          p.radius = Math.random() * 4 + 2;
          p.angle = Math.random() * 2 * Math.PI;
          p.speed = Math.random() * 1.5 + 0.5;
          p.color = Math.random() > 0.5 ? "#ffff66" : "#00f2fe";
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <div className="relative bg-purple-300/80 backdrop-blur-md">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        <div className="relative p-4 flex justify-between items-center">
          <nav className="flex space-x-6">
            <a href="/home" className="text-white font-semibold hover:text-yellow-300 transition">{headerText.home}</a>
            <a href="/patients" className="text-white font-semibold hover:text-yellow-300 transition">{headerText.patients}</a>
            <a href="/doctors" className="text-white font-semibold hover:text-yellow-300 transition">{headerText.doctors}</a>
            <a href="/admin" className="text-white font-semibold hover:text-yellow-300 transition">{headerText.admin}</a>
          </nav>

          <div className="flex items-center space-x-3">
            <SignUp />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
