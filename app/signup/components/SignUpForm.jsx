// app/signup/components/SignUpForm.jsx
'use client';
import { useState } from 'react';
import { FaUserMd, FaUserInjured, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { useTranslation } from '../../useTranslation'; // هوك الترجمة
import { useLanguage } from '../../LanguageContext'; // هوك اللغة الخاص بك

export default function SignUpForm({ role, formData, onRoleChange, onInputChange, onSubmit }) {
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();

  return (
    <>
      <div className="w-full lg:w-1/2 hologram-bg p-8 lg:p-12 flex flex-col justify-center shadow-2xl relative overflow-hidden" style={{boxShadow:'0 0 60px 0 #00fff7, 0 0 120px 0 #00ffb3'}}>
        {/* خلفية هولوغرام هادئة */}
        <div className="hologram-anim" style={{zIndex:1}}>
          {/* دوائر متداخلة متحركة */}
          <svg className="hologram-lines" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.18}}>
            <circle cx="180" cy="180" r="80" stroke="#00fff7" strokeWidth="2" fill="none">
              <animate attributeName="r" values="80;100;80" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="420" cy="420" r="60" stroke="#ff00ff" strokeWidth="2" fill="none" opacity="0.7">
              <animate attributeName="r" values="60;90;60" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="300" r="120" stroke="#00ffb3" strokeWidth="1.5" fill="none" opacity="0.5">
              <animate attributeName="r" values="120;140;120" dur="10s" repeatCount="indefinite" />
            </circle>
            {/* خطوط متقاطعة */}
            <line x1="0" y1="0" x2="600" y2="600" stroke="#00fff7" strokeWidth="1" opacity="0.12">
              <animate attributeName="x2" values="600;500;600" dur="7s" repeatCount="indefinite" />
            </line>
            <line x1="600" y1="0" x2="0" y2="600" stroke="#ff00ff" strokeWidth="1" opacity="0.12">
              <animate attributeName="x2" values="0;100;0" dur="7s" repeatCount="indefinite" />
            </line>
            {/* مربعات شفافة متحركة */}
            <rect x="100" y="400" width="60" height="60" rx="12" fill="#00fff7" opacity="0.08">
              <animate attributeName="x" values="100;400;100" dur="9s" repeatCount="indefinite" />
            </rect>
            <rect x="400" y="100" width="40" height="40" rx="10" fill="#ff00ff" opacity="0.10">
              <animate attributeName="y" values="100;300;100" dur="8s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="flex justify-center space-x-reverse space-x-3 mb-6">
            <button className="flex items-center justify-center w-12 h-12 border border-yellow-300 bg-black rounded-full hover:bg-yellow-900 transition shadow-lg">
              <FaGoogle className="text-yellow-300 text-2xl neon-glow" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 border border-yellow-300 bg-black rounded-full hover:bg-yellow-900 transition shadow-lg">
              <FaGithub className="text-yellow-300 text-2xl neon-glow" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 border border-yellow-300 bg-black rounded-full hover:bg-yellow-900 transition shadow-lg">
              <FaFacebook className="text-yellow-300 text-2xl neon-glow" />
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <button onClick={toggleLanguage} className="text-sm text-yellow-200 hover:text-yellow-300 neon-glow">
              English / العربية
            </button>
          </div>
          
          <div className="relative my-6 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <span className="mx-4 px-4 py-1 rounded-full border border-yellow-400 bg-black/30 text-yellow-200 neon-glow text-sm font-bold shadow-md backdrop-blur-sm" style={{letterSpacing:'0.5px'}}>
              {t('form.orSignupWith')}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-400 to-transparent" />
          </div>

          <div className="flex justify-center space-x-reverse space-x-4 mb-6">
            <button onClick={() => onRoleChange('doctor')} className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all shadow-lg ${role === 'doctor' ? 'border-yellow-300 bg-yellow-900 text-yellow-200 neon-glow' : 'border-yellow-700 text-yellow-200 hover:border-yellow-300'}`}>
              <FaUserMd className="text-4xl mb-2 neon-glow" /><span className="font-semibold">{t('form.role.doctor')}</span>
            </button>
            <button onClick={() => onRoleChange('patient')} className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all shadow-lg ${role === 'patient' ? 'border-yellow-300 bg-yellow-900 text-yellow-200 neon-glow' : 'border-yellow-700 text-yellow-200 hover:border-yellow-300'}`}>
              <FaUserInjured className="text-4xl mb-2 neon-glow" /><span className="font-semibold">{t('form.role.patient')}</span>
            </button>
          </div>

          {role && (
            <form onSubmit={onSubmit} className="space-y-4 mt-6">
              <div className="flex space-x-reverse space-x-4">
                <input type="text" name="firstName" placeholder={t('form.fields.firstName')} value={formData.firstName} onChange={onInputChange} className="w-1/2 px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
                <input type="text" name="lastName" placeholder={t('form.fields.lastName')} value={formData.lastName} onChange={onInputChange} className="w-1/2 px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
              </div>
              <input type="email" name="email" placeholder={t('form.fields.email')} value={formData.email} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
              <input type="password" name="password" placeholder={t('form.fields.password')} value={formData.password} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />

              {role === 'doctor' && (
                <>
                  <input type="text" name="licenseNumber" placeholder={t('form.fields.licenseNumber')} value={formData.licenseNumber} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
                  <input type="text" name="specialty" placeholder={t('form.fields.specialty')} value={formData.specialty} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
                  <input type="text" name="hospital" placeholder={t('form.fields.hospital')} value={formData.hospital} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" />
                </>
              )}

              {role === 'patient' && (
                <>
                  <select name="selectedDoctor" value={formData.selectedDoctor} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required>
                    <option value="" disabled>{t('form.fields.selectDoctor')}</option>
                    <option value="dr-ahmed">د. أحمد علي (أمراض صدرية)</option>
                    <option value="dr-sara">د. سارة محمد (طب عام)</option>
                  </select>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" required />
                  <input type="text" name="emergencyContact" placeholder={t('form.fields.emergencyContact')} value={formData.emergencyContact} onChange={onInputChange} className="w-full px-4 py-2 border border-yellow-300 bg-black text-yellow-100 placeholder-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent neon-glow" />
                </>
              )}

              <button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-200 text-black font-bold py-3 px-4 rounded-lg transition duration-300 neon-glow shadow-xl">
                {t('form.signupButton')}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-xs text-yellow-300 neon-glow">{t('form.termsText')}</p>
          <p className="mt-4 text-center text-sm text-yellow-200 neon-glow">
            <a href="/login" className="underline hover:text-yellow-300 transition">{t('form.loginLink')}</a>
          </p>
        </div>
      </div>
      {/* زر الرئيسية دائري عائم */}
      <div className="pointer-events-none">
        <div className="pointer-events-auto">
          {require('../../../components/HomeButton').default()}
        </div>
      </div>
    </>
  );
}