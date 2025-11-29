import ProfileSection from '../sections/ProfileSection';
import { LanguageProvider } from '../../LanguageContext';
import DoctorLayout from '../components/DoctorLayout';

export default function ProfilePage() {
  return (
    <LanguageProvider>
      <DoctorLayout activePath="/doctor/profile">
        <ProfileSection />
      </DoctorLayout>
    </LanguageProvider>
  );
}
