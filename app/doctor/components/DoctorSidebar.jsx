'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDoctorTranslation } from '../useDoctorTranslation';
import { FaUserMd, FaUsers, FaChartLine, FaComments, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

export const DoctorSidebar = ({ activePath }) => {
  const { t } = useDoctorTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/doctor/overview', label: t('nav', 'overview'), icon: FaChartLine },
    { href: '/doctor/patients', label: t('nav', 'patients'), icon: FaUsers },
    { href: '/doctor/analysis', label: t('nav', 'analysis'), icon: FaUserMd },
    { href: '/doctor/messages', label: t('nav', 'messages'), icon: FaComments },
    { href: '/doctor/profile', label: t('nav', 'profile'), icon: FaUserCog },
  ];

  const handleLogout = () => {
    // منطق تسجيل الخروج (يمكنك إضافة منطق المصادقة هنا)
    router.push('/');
  };

  return (
    <aside className="w-64 bg-slate-800 text-white flex-shrink-0">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">PneumoDetect</div>
      <nav className="mt-6">
        {navItems.map((item) => {
          const isActive = activePath.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={`flex items-center px-6 py-3 hover:bg-slate-700 transition-colors ${isActive ? 'bg-slate-700 border-r-4 border-amber-400' : ''}`}>
              <item.icon className="ml-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 w-full p-6 border-t border-slate-700">
        <button
          className="flex items-center w-full px-6 py-3 bg-transparent cursor-pointer"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="ml-3" />
          {t('nav', 'logout')}
        </button>
      </div>
    </aside>
  );
};
