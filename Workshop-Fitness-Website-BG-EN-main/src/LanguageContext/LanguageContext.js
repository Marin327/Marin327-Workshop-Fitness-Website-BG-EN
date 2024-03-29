import React, { createContext, useContext, useState } from 'react';

// Създаваме контекст за езика
const LanguageContext = createContext();

// Компонент за обвиване на приложението с контекста на езика
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bg'); // По подразбиране езикът е български

  // Функция за превключване на езика
  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  // Предаваме текущия език, функцията за промяна на езика и самият език на децата
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук за използване на контекста на езика във функционални компоненти
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;