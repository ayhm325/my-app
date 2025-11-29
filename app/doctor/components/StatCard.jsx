// app/doctor/components/StatCard.jsx (الكود الجديد)
import Card from '../../../components/Card';

export default function StatCard({ title, value, icon: Icon, color }) {
  return (
    <Card className="flex items-center justify-between p-6">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="text-2xl text-white" />
      </div>
    </Card>
  );
}
