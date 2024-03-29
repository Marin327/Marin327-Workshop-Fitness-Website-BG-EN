import React, { useState } from 'react';
import { FaChild, FaDesktop, FaEnvelope, FaHome, FaNewspaper, FaStar, FaUser } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import Contact from '../Contact/Contact';
import DietList from '../DietList/DietList';
import ExpertServices from '../ExpertServices/ExpertServices';
import ExtraServices from '../ExtraServices/ExtraServices';
import Food from '../Food/Food';
import KidsTraining from '../KidsTraining/KidsTraining';
import { useLanguage } from '../LanguageContext/LanguageContext';
import News from '../News/News';
import OnlineTraining from '../OnlineTraining/OnlineTraining';

import '../App.css';

const Header = () => {
  const [currentContent, setCurrentContent] = useState('home');
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const { language, toggleLanguage } = useLanguage();

  const handleMenuClick = (content) => {
    setCurrentContent(content);
  };

  return (
    <div>
      <animated.header style={headerAnimation} className="header">
        <nav className="navigation">
          <a href="/" onClick={() => handleMenuClick('home')}><FaHome /> {language === 'bg' ? 'Начало' : 'Home'}</a>
          <a href="/contact" onClick={() => handleMenuClick('contact')}><FaEnvelope /> {language === 'bg' ? 'Контакти' : 'Contactя'}</a>
          <a href="/news" onClick={() => handleMenuClick('news')}><FaNewspaper /> {language === 'bg' ? 'Актуално' : 'News'}</a>
          <a href="/expert-services" onClick={() => handleMenuClick('expert-services')}><FaUser /> {language === 'bg' ? 'Експертни услуги' : 'Expert Services'}</a>
          <a href="/online-training" onClick={() => handleMenuClick('online-training')}><FaDesktop /> {language === 'bg' ? 'Онлайн тренировки' : 'Online Training'}</a>
          <a href="/extra-services" onClick={() => handleMenuClick('extra-services')}><FaStar /> {language === 'bg' ? 'Екстри' : 'Extra Services'}</a>
          <a href="/kids-training" onClick={() => handleMenuClick('kids-training')}><FaChild /> {language === 'bg' ? 'KIDS DELUXE' : 'KIDS DELUXE'}</a>
          <a href="/food" onClick={() => handleMenuClick('food')}><FaChild /> {language === 'bg' ? 'Food' : 'Food'}</a>
          <a href="/diet-list" onClick={() => handleMenuClick('diet-list')}><FaChild /> {language === 'bg' ? 'Диети и храни' : 'Diet and Food'}</a>
        <button onClick={toggleLanguage} className="toggle-language-btn">
          {language === 'bg' ? 'EN' : 'BG'}
        </button>
        </nav>
      </animated.header>
      
      {currentContent === 'contact' && <Contact />}
      {currentContent === 'news' && <News />}
      {currentContent === 'expert-services' && <ExpertServices />}
      {currentContent === 'online-training' && <OnlineTraining />}
      {currentContent === 'extra-services' && <ExtraServices />}
      {currentContent === 'kids-training' && <KidsTraining />}
      {currentContent === 'food' && <Food />}
      {currentContent === 'diet-list' && <DietList />}
    </div>
  );
}

export default Header;