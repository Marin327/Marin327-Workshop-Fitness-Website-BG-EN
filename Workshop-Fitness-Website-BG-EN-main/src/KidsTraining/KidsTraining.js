import React from 'react';
import { Link } from 'react-router-dom'; 
import { animated, useSpring } from 'react-spring';
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext'; /

const KidsTraining = () => {
  const kidsTrainingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const { language } = useLanguage(); 

  const trainingInfo = {
    bg: {
      description:
        'Предоставете на вашите деца възможността да се забавляват и учат чрез нашите KIDS тренировки, създадени специално за тях.',
      activities: [
        'Забавни физически игри',
        'Танци и ритъм',
        'Основи на спорта за деца',
        'Координация и баланс',
        'Тимбилдинг упражнения',
        'Специални събития и празници',
        'Креативни изразителни дейности',
        'Интерактивни уроци за здравословен начин на живот',
        'Развиване на социални умения',
        'Индивидуални консултации с инструктор',
      ],
    },
    en: {
      description:
        'Provide your children with the opportunity to have fun and learn through our KIDS Training, specially designed for them.',
      activities: [
        'Fun physical games',
        'Dance and rhythm',
        'Basics of sports for children',
        'Coordination and balance',
        'Team building exercises',
        'Special events and holidays',
        'Creative expressive activities',
        'Interactive lessons for a healthy lifestyle',
        'Development of social skills',
        'Individual consultations with an instructor',
      ],
    },
  };

  const { title, description, activities } = trainingInfo[language] || {};

  return (
    <animated.div style={kidsTrainingAnimation} className="services-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {activities &&
          activities.map((activity, index) => <li key={index}>{activity}</li>)}
      </ul>
      <div className="back-button-container" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <Link to="/" className="back-button">Назад</Link> {/* Използване на Link компонента с пътя към home страницата */}
      </div>
    </animated.div>
  );
};

export default KidsTraining;
