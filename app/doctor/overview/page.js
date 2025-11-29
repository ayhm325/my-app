import OverviewSection from '../sections/OverviewSection';
import { LanguageProvider } from '../../LanguageContext';
import DoctorLayout from '../components/DoctorLayout';

export default function OverviewPage() {
  return (
    <LanguageProvider>
      <DoctorLayout activePath="/doctor/overview">
        <OverviewSection />
      </DoctorLayout>
    </LanguageProvider>
  );
}
