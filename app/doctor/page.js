import { redirect } from 'next/navigation';

export default function DoctorPage() {
  // Redirect to overview as the default section
  redirect('/doctor/overview');
  return null;
}
