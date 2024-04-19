import React, { createContext, useContext, useState } from 'react';


const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bg'); 


  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

 
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
