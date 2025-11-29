import AnalysisSection from '../sections/AnalysisSection';
import { LanguageProvider } from '../../LanguageContext';
import DoctorLayout from '../components/DoctorLayout';

export default function AnalysisPage() {
  return (
    <LanguageProvider>
      <DoctorLayout activePath="/doctor/analysis">
        <AnalysisSection />
      </DoctorLayout>
    </LanguageProvider>
  );
}
