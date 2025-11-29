'use client';
import { useDoctorTranslation } from '../useDoctorTranslation';
import { FaSearch, FaBell } from 'react-icons/fa';

export const DoctorHeader = () => {
  const { t } = useDoctorTranslation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-1/3">
          <FaSearch className="text-gray-400 ml-2" />
          <input type="text" placeholder={t('header', 'searchPlaceholder')} className="bg-transparent w-full outline-none" />
        </div>
        <div className="flex items-center space-x-reverse space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <img src="https://i.pravatar.cc/40" alt="Doctor" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};
