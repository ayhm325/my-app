// app/doctor/components/PatientCard.jsx (الكود الجديد)
import Link from 'next/link';
import { FaComments } from 'react-icons/fa';
import Card from '../../../components/Card';

export default function PatientCard({ patient }) {
  return (
    <Card className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={`https://i.pravatar.cc/50?u=${patient.id}`} alt={patient.name} className="w-12 h-12 rounded-full ml-4" />
        <div>
          <h3 className="font-semibold text-gray-900">{patient.name}</h3>
          <p className="text-sm text-gray-500">آخر تحليل: {patient.lastAnalysis}</p>
        </div>
      </div>
      <Link href={`/doctor/messages?patient=${patient.id}`} className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition">
        <FaComments />
      </Link>
    </Card>
  );
}
