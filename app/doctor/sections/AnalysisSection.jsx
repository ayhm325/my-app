'use client';
'use client';
import { useState } from 'react';
import { useDoctorTranslation } from '../useDoctorTranslation';

export default function AnalysisSection() {
  const { t } = useDoctorTranslation();
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setResult(null);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({ pneumonia: 85.4, normal: 14.6 });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('nav', 'analysis')}</h1>
      <div className="bg-white p-8 rounded-lg shadow">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          {image ? (
            <img src={image} alt="Uploaded X-ray" className="max-h-64 mx-auto mb-4" />
          ) : (
            <p className="text-gray-500 mb-4">اسحب وأفلت صورة الأشعة السينية هنا أو انقر للاختيار</p>
          )}
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
          <label htmlFor="image-upload" className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
            اختر ملف
          </label>
        </div>
        {image && (
          <div className="mt-6 text-center">
            <button onClick={handleAnalyze} disabled={isAnalyzing} className="bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-500 disabled:bg-gray-400">
              {isAnalyzing ? '...جاري التحليل' : 'بدء التحليل'}
            </button>
          </div>
        )}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-bold text-green-800">نتيجة التحليل:</h3>
            <p className="text-green-700">احتمالية وجود التهاب رئوي: <span className="font-bold">{result.pneumonia}%</span></p>
          </div>
        )}
      </div>
    </div>
  );
}
