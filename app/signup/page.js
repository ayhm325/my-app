// app/signup/page.js
'use client';

import { useState } from 'react';
import { LanguageProvider } from '../LanguageContext'; // استيراد الـ Provider
import SideDecor from './components/SideDecor';
import SignUpForm from './components/SignUpForm';

export default function SignupPage() {
  const [role, setRole] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    licenseNumber: '', specialty: '', hospital: '',
    selectedDoctor: '', dateOfBirth: '', emergencyContact: '',
  });

  const handleRoleChange = (selectedRole) => setRole(selectedRole);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', { role, ...formData });
    alert('تم إرسال البيانات بنجاح! (تحقق من الكونسول)');
  };

  return (
    <LanguageProvider>
      <main className="flex min-h-screen">
        <SideDecor />
        <SignUpForm
          role={role}
          formData={formData}
          onRoleChange={handleRoleChange}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </main>
    </LanguageProvider>
  );
}