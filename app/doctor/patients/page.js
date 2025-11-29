import PatientsListSection from '../sections/PatientsListSection';
import { LanguageProvider } from '../../LanguageContext';
import DoctorLayout from '../components/DoctorLayout';

export default function PatientsPage() {
  return (
    <LanguageProvider>
      <DoctorLayout activePath="/doctor/patients">
        <PatientsListSection />
      </DoctorLayout>
    </LanguageProvider>
  );
}
