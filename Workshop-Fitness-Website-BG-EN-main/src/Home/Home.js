import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import '../App.css';
import LanguageContext from '../LanguageContext/LanguageContext';

const Home = () => {
  const { language, setLanguage } = useContext(LanguageContext); 

  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: 'translateX(0%)',
    delay: 1000, 
  });

 
  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg'); 
  };

  return (
    <animated.div style={homeAnimation} className="home-container">
      <h1>ПРИ НАС Е ИНОВАТИВНО!
        <p>★ DELUXE ★</p>
      </h1>
      <button onClick={toggleLanguage}>{language === 'bg' ? 'EN' : 'BG'}</button> 
    </animated.div>
  );
};

export default Home;
