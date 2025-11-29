"use client";
import PatientCard from '../components/PatientCard';
import { useDoctorTranslation } from '../useDoctorTranslation';

const mockAllPatients = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `مريض ${i + 1}`,
  lastAnalysis: `منذ ${i + 1} أيام`,
}));

export default function PatientsListSection() {
  const { t } = useDoctorTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav', 'patients')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAllPatients.map(p => <PatientCard key={p.id} patient={p} />)}
      </div>
    </div>
  );
}
