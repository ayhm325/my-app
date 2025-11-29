"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../home/context/LanguageContext";
import signupAr from "./locales/ar/signup.json";
import signupEn from "./locales/en/signup.json";
import { 
  User, Stethoscope, Eye, EyeOff, Shield, AlertCircle, Lock, Key 
} from "lucide-react";

export default function SignUpForm() {
  const { language } = useLanguage();
  const text = language === "ar" ? signupAr : signupEn;

  const [userType, setUserType] = useState("patient"); // 'patient' or 'doctor'
  const [showPassword, setShowPassword] = useState(false);
  // Remove passwordStrength and passwordCriteria state, compute them directly
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctors] = useState([
    { id: 1, name: "د. أحمد محمد" },
    { id: 2, name: "د. فاطمة علي" },
    { id: 3, name: "د. محمد خالد" },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    licenseNumber: "",
  });

  // حساب معايير كلمة المرور وقوتها مباشرة
  const passwordCriteria = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };
  const met = Object.values(passwordCriteria).filter(Boolean).length;
  const passwordStrength = (met / 4) * 100;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert(language === "ar" ? "يجب الموافقة على الشروط" : "You must agree to the terms");
      return;
    }
    console.log("Form Data:", { ...formData, userType, selectedDoctor });
    // هنا يمكنك إرسال البيانات للباك-إند
  };

  const getPasswordStrengthInfo = () => {
    if (passwordStrength < 25) return { emoji: "😟", color: "text-red-500", bgColor: "bg-red-500" };
    if (passwordStrength < 50) return { emoji: "😐", color: "text-orange-500", bgColor: "bg-orange-500" };
    if (passwordStrength < 75) return { emoji: "🙂", color: "text-yellow-500", bgColor: "bg-yellow-500" };
    return { emoji: "😄", color: "text-green-500", bgColor: "bg-green-500" };
  };

  const passwordStrengthInfo = getPasswordStrengthInfo();

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-6 rounded-2xl w-full max-w-xl space-y-6 backdrop-blur-xl bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.5)]"
    >
      <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg">{text.title}</h2>

      {/* اختيار نوع المستخدم */}
      <div className="flex justify-center space-x-4 space-x-reverse">
        {["patient", "doctor"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setUserType(type)}
            className={`flex items-center px-6 py-3 rounded-xl transition-all ${
              userType === type
                ? "bg-cyan-500/30 text-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/30"
                : "bg-slate-800/50 text-gray-300 border-2 border-slate-700"
            }`}
          >
            {type === "patient" ? <User className="ml-2 h-8 w-8" /> : <Stethoscope className="ml-2 h-8 w-8" />}
            <span className="font-semibold text-lg">{text[`role ${type}`]}</span>
          </button>
        ))}
      </div>

      {/* أيقونة المستخدم */}
      <div className="flex justify-center">
        <div className="p-4 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30">
          {userType === "patient" ? <User className="h-12 w-12 text-cyan-400" /> : <Stethoscope className="h-12 w-12 text-cyan-400" />}
        </div>
      </div>

      {/* الاسم والبريد وكلمة المرور */}
      {[
        { label: text.name, name: "name", type: "text", icon: <User className="ml-2 h-4 w-4 text-cyan-400" /> },
        { label: text.email, name: "email", type: "email", icon: <AlertCircle className="ml-2 h-4 w-4 text-cyan-400" /> },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-2 font-semibold text-white flex items-center">{field.icon}{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            autoComplete={field.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800/50 text-white border border-cyan-400/30 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-md transition-all"
            required
          />
        </div>
      ))}

      {/* كلمة المرور */}
      <div>
        <label htmlFor="password" className="mb-2 font-semibold text-white flex items-center">
          <Lock className="ml-2 h-4 w-4 text-cyan-400" />
          {text.password}
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            autoComplete="new-password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800/50 text-white border border-cyan-400/30 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-md transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* قوة كلمة المرور */}
        <div className="mt-3 flex items-center">
          <div className="flex-1 h-3 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-300 ${passwordStrengthInfo.bgColor}`} style={{ width: `${passwordStrength}%` }}></div>
          </div>
          <div className="ml-3 text-2xl">{passwordStrengthInfo.emoji}</div>
        </div>
        <p className="text-sm text-gray-300 mt-1">
          {language === "ar" ? "قوة كلمة المرور:" : "Password Strength:"}{" "}
          <span className={`font-bold ${passwordStrengthInfo.color}`}>
            {passwordStrength < 25 ? (language === "ar" ? "ضعيفة جداً" : "Very Weak") :
             passwordStrength < 50 ? (language === "ar" ? "ضعيفة" : "Weak") :
             passwordStrength < 75 ? (language === "ar" ? "متوسطة" : "Medium") :
             (language === "ar" ? "قوية" : "Strong")}
          </span>
        </p>
      </div>

      {/* حقول حسب نوع المستخدم */}
      {userType === "patient" ? (
        <div>
          <label htmlFor="doctor" className="mb-2 font-semibold text-white flex items-center">
            <Stethoscope className="ml-2 h-4 w-4 text-cyan-400" />
            {language === "ar" ? "اختر طبيبك" : "Select Your Doctor"}
          </label>
          <select
            id="doctor"
            name="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800/50 text-white border border-cyan-400/30 focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-md transition-all"
            required
          >
            <option value="" className="bg-slate-800">{text.selectDoctor}</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id} className="bg-slate-800">{doctor.name}</option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor="licenseNumber" className="mb-2 font-semibold text-white flex items-center">
            <Key className="ml-2 h-4 w-4 text-cyan-400" />
            {text.medLicense}
          </label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            autoComplete="license-number"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800/50 text-white border border-cyan-400/30 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-md transition-all"
            required
          />
        </div>
      )}

      {/* الشروط */}
      <div className="flex items-start bg-slate-800/30 p-3 rounded-lg">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={agreedToTerms}
          onChange={() => setAgreedToTerms(!agreedToTerms)}
          className="mt-1 ml-3 w-6 h-6 rounded-md border-2 transition-all text-cyan-500"
        />
        <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer flex-1">{text.agreeTerms}</label>
        {agreedToTerms && (
          <div className="ml-2 p-1 bg-green-500/20 rounded-full">
            <Shield size={16} className="text-green-400" />
          </div>
        )}
      </div>

      {/* زر التسجيل */}
      <button
        type="submit"
        className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors shadow-md"
      >
        {language === "ar" ? "تسجيل" : "Sign Up"}
      </button>
    </form>
  );
}
