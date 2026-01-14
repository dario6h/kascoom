'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');
  const [direction, setDirection] = useState('ltr');

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Set direction based on language
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);

    // Update HTML dir attribute
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'ar' : 'en');
  };

  const value = {
    language,
    direction,
    isRTL: direction === 'rtl',
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}