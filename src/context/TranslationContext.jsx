import React, { createContext, useContext, useState } from 'react';
import { translations } from '../utils/translations.js';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('punjabi');
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'punjabi' ? 'english' : 'punjabi');
  };
  
  const value = {
    language,
    t,
    toggleLanguage,
    isPunjabi: language === 'punjabi'
  };
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};






