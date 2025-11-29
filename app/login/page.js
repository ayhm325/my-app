// app/login/page.js
'use client';

import { useState } from 'react';
import { LanguageProvider } from '../LanguageContext'; // نفس الـ Provider
import SideDecor from './components/SideDecor';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    alert('جاري تسجيل الدخول! (تحقق من الكونسول)');
    // هنا يمكنك إضافة منطق إرسال البيانات إلى الـ API
  };

  return (
    <LanguageProvider>
      <main className="flex min-h-screen">
        <SideDecor />
        <LoginForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </main>
    </LanguageProvider>
  );
}
