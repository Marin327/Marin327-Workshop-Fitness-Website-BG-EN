import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom'; 
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const ExpertServices = () => {
  const { language } = useLanguage();

  const servicesAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const expertServicesList = [
    { 
      bg: 'Персонални тренировки', 
      en: 'Personal Training', 
      description_bg: 'Персонални тренировки с инструктор, персонализирани спрямо вашите цели и нужди. Тренировките включват комбинация от кардио упражнения, силови тренировки и гъвкавост.',
      description_en: 'Personalized training sessions with an instructor tailored to your goals and needs. Sessions include a mix of cardio, strength, and flexibility exercises.' 
    },
    { 
      bg: 'Групови тренировки', 
      en: 'Group Training', 
      description_bg: 'Групови тренировки, които комбинират различни упражнения за ефективни резултати. Подходящи за хора с различни фитнес нива.',
      description_en: 'Group workouts combining various exercises for effective results. Suitable for individuals of all fitness levels.' 
    },
    { 
      bg: 'Функционален тренинг', 
      en: 'Functional Training', 
      description_bg: 'Функционални тренировки, подходящи за подобряване на мобилността и сила на тялото. Включват упражнения, които имитират ежедневни движения.',
      description_en: 'Functional workouts suitable for improving body mobility and strength. Include exercises that mimic everyday movements.' 
    },
    { 
      bg: 'Кардио програми', 
      en: 'Cardio Programs', 
      description_bg: 'Кардио програми, които включват разнообразни упражнения за подобряване на сърдечната дейност. Включват се кардио машини, като бягане, каране на велосипед и скачане на въже.',
      description_en: 'Cardio programs including various exercises to improve cardiovascular health. Incorporate cardio machines such as running, cycling, and jump rope.' 
    },
    { 
      bg: 'Yoga и пилатес', 
      en: 'Yoga and Pilates', 
      description_bg: 'Yoga и пилатес тренировки за подобряване на гъвкавостта, баланса и мускулната сила. Подходящи за релаксация и укрепване на тялото.',
      description_en: 'Yoga and Pilates workouts to enhance flexibility, balance, and muscle strength. Suitable for relaxation and body strengthening.' 
    },
    { 
      bg: 'Специализирани диети', 
      en: 'Specialized Diets', 
      description_bg: 'Индивидуално изготвени диети, съобразени със специфичните ви цели и здравословни нужди. Подходящи за отслабване, натрупване на мускулна маса или поддържане на здравословно тегло.',
      description_en: 'Individually tailored diets designed to meet your specific goals and nutritional needs. Suitable for weight loss, muscle gain, or maintaining a healthy weight.' 
    },
    { 
      bg: 'Фитнес асесменти', 
      en: 'Fitness Assessments', 
      description_bg: 'Оценка на фитнес нивото и изготвяне на персонализиран план за тренировки. Включва анализ на телесната композиция, фитнес тестове и консултации с инструктор.',
      description_en: 'Assessment of fitness levels and creation of personalized workout plans. Includes analysis of body composition, fitness tests, and consultations with an instructor.' 
    },
    { 
      bg: 'Тренировки за бременни', 
      en: 'Prenatal Workouts', 
      description_bg: 'Безопасни и ефективни тренировки, подходящи за бременни жени за поддръжка на здравето и формата. Включват леки упражнения за силова тонизация и стабилизация.',
      description_en: 'Safe and effective workouts suitable for pregnant women to maintain health and fitness. Include gentle exercises for strength toning and stabilization.' 
    },
    { 
      bg: 'Тренировки за възрастни', 
      en: 'Senior Fitness Programs', 
      description_bg: 'Програми за фитнес, насочени към подобряване на здравето и мобилността на възрастните. Включват се упражнения за силова тренировка, баланс и гъвкавост.',
      description_en: 'Fitness programs aimed at improving health and mobility for seniors. Include strength training, balance, and flexibility exercises.' 
    },
    { 
      bg: 'Рехабилитация и физиотерапия', 
      en: 'Rehabilitation and Physiotherapy', 
      description_bg: 'Индивидуални програми за рехабилитация и физиотерапия за възстановяване след наранявания и операции. Включват се специализирани упражнения и масажи.',
      description_en: 'Individual rehabilitation and physiotherapy programs for recovery after injuries and surgeries. Include specialized exercises and massages.' 
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (index) => {
    setSelectedService(expertServicesList[index]);
  };

  const closeDescription = () => {
    setSelectedService(null);
  };

  const closeButtonLabel = language === 'bg' ? 'Затвори' : 'Close';

  return (
    <animated.div style={servicesAnimation} className="services-container">
      {selectedService && (
        <div className="service-details">
          <h3>{language === 'bg' ? selectedService.bg : selectedService.en}</h3>
          <p>{language === 'bg' ? selectedService.description_bg : selectedService.description_en}</p>
          <button onClick={closeDescription}>{closeButtonLabel}</button>
        </div>
      )}
      <ul>
        {expertServicesList.map((service, index) => (
          <li key={index} onClick={() => handleServiceClick(index)}>
            {language === 'bg' ? service.bg : service.en}
          </li>
        ))}
      </ul>
      <div className="back-button-container"> 
        <Link to="/" className="back-button">Назад</Link> {/* Използване на Link компонента с пътя към home страницата */}
      </div>
    </animated.div>
  );
}

export default ExpertServices;
