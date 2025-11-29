"use client";

import { 
  Sparkles, 
  Zap, 
  Shield, 
  Rocket, 
  Target, 
  TrendingUp,
  Code,
  Palette,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";

export default function SideDecor() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { icon: Rocket, text: "انطلاقة نحو المستقبل", color: "text-blue-400" },
    { icon: Shield, text: "أمان وحماية متكاملة", color: "text-green-400" },
    { icon: Zap, text: "سرعة وكفاءة فائقة", color: "text-yellow-400" },
    { icon: Target, text: "أهداف دقيقة ومحققة", color: "text-purple-400" },
    { icon: TrendingUp, text: "نمو وتطور مستمر", color: "text-pink-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-between w-full h-full p-6 lg:p-8 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* شبكة خلفية زخرفية */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* العنوان الرئيسي */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg mt-15">
          مرحباً بك في
        </h2>
        <div className="relative">
          <span className="text-2xl lg:text-3xl font-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
            منصتنا المتميزة
          </span>
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 animate-spin" />
        </div>
      </div>

      {/* الميزات المتحركة - تستغل المساحة المتاحة */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
        <div className="space-y-4 lg:space-y-6 w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 lg:p-5 rounded-xl transition-all duration-500 ${
                  isActive 
                    ? 'bg-white/20 scale-105 shadow-lg shadow-cyan-500/20 border border-cyan-400/30' 
                    : 'bg-white/5 scale-95 border border-transparent'
                }`}
              >
                <div className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br from-white/20 to-white/5 ${
                  isActive ? 'animate-pulse shadow-lg' : ''
                }`}>
                  <Icon className={`w-6 h-6 lg:w-7 lg:h-7 ${feature.color}`} />
                </div>
                <p className={`text-base lg:text-lg font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}>
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* أيقونات عائمة أكبر حجماً */}
      <div className="absolute top-10 right-10 p-3 rounded-full bg-white/10 backdrop-blur-sm">
        <Code className="w-8 h-8 text-cyan-400 animate-bounce" />
      </div>
      <div className="absolute bottom-32 left-10 p-3 rounded-full bg-white/10 backdrop-blur-sm">
        <Palette className="w-8 h-8 text-pink-400 animate-bounce delay-500" />
      </div>
      <div className="absolute top-1/2 left-5 p-3 rounded-full bg-white/10 backdrop-blur-sm">
        <Globe className="w-8 h-8 text-green-400 animate-bounce delay-1000" />
      </div>

      {/* خطوط زخرفية */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-70"></div>
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70"></div>

      {/* نص تحفيزي */}
      <div className="relative z-10 text-center">
        <p className="text-sm lg:text-base text-gray-300 animate-pulse drop-shadow-md">
          انضم إلينا وابدأ رحلتك نحو النجاح
        </p>
      </div>

      {/* تأثير التدرج المتحرك */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}