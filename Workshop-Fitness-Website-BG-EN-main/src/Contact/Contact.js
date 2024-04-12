import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return ( 
    <div className="contact-container">
      <h2>{language === 'bg' ? 'Свържете се с нас:' : 'Contact Us:'}</h2>
      <h3>{language === 'bg' ? 'За всички запитвания, предложения или нужда от помощ.' : 'For all inquiries, suggestions, or assistance.'}</h3>
      <p>
        {language === 'bg' ? 'Имейл:' : 'Email:'} <a href="mailto:info@fitnesdeluxe&spa.com">info @fitnesdeluxe&spa.com</a><br />
        {language === 'bg' ? 'Телефон:' : 'Phone:'} +359 89 708 2919<br />
        {language === 'bg' ? 'Адрес:' : 'Address:'} {language === 'bg' ? 'ул. Главна 123, София, България' : '123 Main St, Sofia, Bulgaria'}
      </p>
      <div className="social-links">
        <a href="https://www.facebook.com/fitnesdeluxe&spa" target="_blank" rel="noopener noreferrer">Facebook</a> 
        <a href="https://www.instagram.com/fitnedeluxe&spa" target="_blank" rel="noopener noreferrer">Instagram</a> 
        <a href="https://twitter.com/fitnesdeluxe&spa" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="back-button-container" style={{ position: 'fixed', bottom: '330px', right: '1060px' }}>
        <Link to="/" className="back-button">{language === 'bg' ? 'Назад' : 'Back'}</Link> 
      </div>
    </div>
  );
}

export default Contact;
