/**
 * Language Context - ConsultMetal
 * 
 * Provides bilingual support (English/French)
 * Stores language preference in localStorage
 * Default: English
 */

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('consultmetal-language');
    return savedLanguage || 'en';
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('consultmetal-language', language);
  }, [language]);

  // Toggle between English and French
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  // Set language explicitly
  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'fr') {
      setLanguage(lang);
    }
  };

  // Helper function to get text based on current language
  const getText = (textObject) => {
    if (!textObject) return '';
    return textObject[language] || textObject.en || '';
  };

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
    getText,
    isEnglish: language === 'en',
    isFrench: language === 'fr',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
