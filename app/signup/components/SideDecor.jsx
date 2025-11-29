// app/signup/components/SideDecor.jsx
import { FaHospitalAlt, FaShieldAlt, FaLock } from 'react-icons/fa';
import { useTranslation } from '../../useTranslation';
import '../styles/animations.css';

export default function SideDecor() {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-1/2 relative hologram-bg text-white p-12 flex flex-col justify-center overflow-hidden">
      <div className="hologram-anim">
        <div className="hologram-wave" />
        <div className="hologram-glow" />
        {/* خطوط وأشكال هولوغرامية متحركة */}
        <svg className="hologram-lines" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline className="hologram-line" points="0,100 150,120 300,80 450,140 600,100" />
          <polyline className="hologram-line2" points="0,300 100,320 200,280 300,340 400,300 500,320 600,280" />
          <polyline className="hologram-line" points="0,500 200,520 400,480 600,500" />
          <circle cx="500" cy="180" r="18" stroke="#00fff7" strokeWidth="2" fill="none" opacity="0.18" />
          <circle cx="120" cy="420" r="12" stroke="#ff00ff" strokeWidth="2" fill="none" opacity="0.13" />
        </svg>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight leading-tight">
          &ldquo;{t('title')}&rdquo;
        </h1>
        <p className="text-2xl mb-12 text-gray-200 font-medium drop-shadow">
          &ldquo;{t('subtitle')}&rdquo;
        </p>
        <div className="space-y-10">
          <div className="flex flex-col items-center space-y-2 mb-6">
            <FaHospitalAlt className="text-5xl text-amber-400 drop-shadow-lg mb-2" />
            <h3 className="text-2xl font-bold mb-1 text-white drop-shadow">&ldquo;{t('features.diagnosis.title')}&rdquo;</h3>
            <p className="text-lg text-blue-100 leading-relaxed">&ldquo;{t('features.diagnosis.description')}&rdquo;</p>
          </div>
          <div className="flex flex-col items-center space-y-2 mb-6">
            <FaShieldAlt className="text-5xl text-amber-400 drop-shadow-lg mb-2" />
            <h3 className="text-2xl font-bold mb-1 text-white drop-shadow">&ldquo;{t('features.privacy.title')}&rdquo;</h3>
            <p className="text-lg text-blue-100 leading-relaxed">&ldquo;{t('features.privacy.description')}&rdquo;</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaLock className="text-5xl text-amber-400 drop-shadow-lg mb-2" />
            <h3 className="text-2xl font-bold mb-1 text-white drop-shadow">&ldquo;{t('features.connected.title')}&rdquo;</h3>
            <p className="text-lg text-blue-100 leading-relaxed">&ldquo;{t('features.connected.description')}&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
}