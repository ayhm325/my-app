import MessagesSection from '../sections/messages/MessagesSection';
import { LanguageProvider } from '../../LanguageContext';
import DoctorLayout from '../components/DoctorLayout';

export default function MessagesPage() {
  return (
    <LanguageProvider>
      <DoctorLayout activePath="/doctor/messages">
        <MessagesSection />
      </DoctorLayout>
    </LanguageProvider>
  );
}
