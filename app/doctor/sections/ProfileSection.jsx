'use client';
'use client';
import { useState } from 'react';
import { useDoctorTranslation } from '../useDoctorTranslation';

export default function ProfileSection() {
  const { t } = useDoctorTranslation();
  const [profile, setProfile] = useState({ name: 'د. أحمد علي', specialty: 'أمراض صدرية', license: '12345' });

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('تم تحديث الملف الشخصي!'); };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav', 'profile')}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">الاسم</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">التخصص</label>
          <input type="text" name="specialty" value={profile.specialty} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">رقم الترخيص</label>
          <input type="text" name="license" value={profile.license} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 border" />
        </div>
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
          حفظ التغييرات
        </button>
      </form>
    </div>
  );
}
