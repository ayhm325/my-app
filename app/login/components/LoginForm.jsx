// app/login/components/LoginForm.jsx
'use client';
import { useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { useLoginTranslation } from '../useLoginTranslation';
import { useLanguage } from '../../LanguageContext';


export default function LoginForm({ formData, onInputChange, onSubmit }) {
  const { t } = useLoginTranslation();
  const { toggleLanguage } = useLanguage();

  return (
    <>
      <div className="w-full lg:w-1/2 relative login-holo-bg p-8 lg:p-12 flex flex-col justify-center shadow-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, #181c2f 60%, #232946 100%)', boxShadow: '0 0 60px 0 #00fff7, 0 0 120px 0 #00ffb3'}}>
        {/* خلفية هولوغرامية شفافة خاصة بالفورم */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="opacity-30" width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="80" stroke="#ff00ff" strokeWidth="2" fill="none">
              <animate attributeName="r" values="80;100;80" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="480" cy="480" r="60" stroke="#00fff7" strokeWidth="2" fill="none" opacity="0.7">
              <animate attributeName="r" values="60;90;60" dur="9s" repeatCount="indefinite" />
            </circle>
            <rect x="300" y="100" width="60" height="60" rx="16" fill="#00fff7" opacity="0.08">
              <animate attributeName="x" values="300;400;300" dur="10s" repeatCount="indefinite" />
            </rect>
            <rect x="100" y="400" width="40" height="40" rx="10" fill="#ff00ff" opacity="0.10">
              <animate attributeName="y" values="400;200;400" dur="8s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
        <div className="max-w-md w-full mx-auto relative z-10">
          <div className="flex justify-center space-x-reverse space-x-3 mb-6">
            <button className="flex items-center justify-center w-12 h-12 border border-blue-400 bg-black rounded-full hover:bg-blue-900 transition shadow-lg">
              <FaGoogle className="text-red-500 text-2xl neon-glow" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 border border-blue-400 bg-black rounded-full hover:bg-blue-900 transition shadow-lg">
              <FaGithub className="text-blue-200 text-2xl neon-glow" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 border border-blue-400 bg-black rounded-full hover:bg-blue-900 transition shadow-lg">
              <FaFacebook className="text-blue-400 text-2xl neon-glow" />
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <button onClick={toggleLanguage} className="text-sm text-blue-200 hover:text-blue-300 neon-glow">
              English / العربية
            </button>
          </div>
          
          <div className="relative my-6 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <span className="mx-4 px-4 py-1 rounded-full border border-blue-400 bg-black/30 text-blue-200 neon-glow text-sm font-bold shadow-md backdrop-blur-sm" style={{letterSpacing:'0.5px'}}>
              {t('form.orLoginWith')}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4 mt-6">
            <input
              type="email"
              name="email"
              placeholder={t('form.fields.email')}
              value={formData.email}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-blue-400 bg-black text-blue-100 placeholder-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent neon-glow"
              required
            />
            <input
              type="password"
              name="password"
              placeholder={t('form.fields.password')}
              value={formData.password}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-blue-400 bg-black text-blue-100 placeholder-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent neon-glow"
              required
            />

            <div className="text-left">
              <a href="#" className="text-sm text-blue-300 hover:text-blue-400">
                {t('form.forgotPassword')}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-300 text-black font-bold py-3 px-4 rounded-lg transition duration-300 neon-glow shadow-xl"
            >
              {t('form.loginButton')}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-blue-200 neon-glow">
            <a href="/signup" className="underline hover:text-blue-300 transition">{t('form.noAccountLink')}</a>
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
