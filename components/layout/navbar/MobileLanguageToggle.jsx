'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function MobileLanguageToggle({ onClick }) {
  const { language } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="relative px-3 py-2 font-medium text-white transition-all group"
      aria-label="Toggle language"
    >
      {language === 'ar' ? 'EN' : 'ع'}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: '#f5a623' }}
      />
    </button>
  );
}
