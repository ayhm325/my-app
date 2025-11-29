"use client";
import StatCard from '../components/StatCard';
import PatientCard from '../components/PatientCard';
import { useDoctorTranslation } from '../useDoctorTranslation';
import { FaUsers, FaClock, FaExclamationTriangle } from 'react-icons/fa';

// بيانات وهمية
const mockPatients = [
  { id: 1, name: 'أحمد علي', lastAnalysis: 'منذ يومين' },
  { id: 2, name: 'فاطمة حسن', lastAnalysis: 'منذ أسبوع' },
];

export default function OverviewSection() {
  const { t } = useDoctorTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav', 'overview')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title={t('stats', 'totalPatients')} value="150" icon={FaUsers} color="bg-blue-500" />
        <StatCard title={t('stats', 'pendingAnalysis')} value="8" icon={FaClock} color="bg-yellow-500" />
        <StatCard title={t('stats', 'criticalCases')} value="2" icon={FaExclamationTriangle} color="bg-red-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">المرضى المؤخرين</h2>
      <div className="space-y-4">
        {mockPatients.map(p => <PatientCard key={p.id} patient={p} />)}
      </div>
    </div>
  );
}
