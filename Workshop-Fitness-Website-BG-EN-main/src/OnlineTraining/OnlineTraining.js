import React from 'react';
import { Link } from 'react-router-dom'; // Импортиране на Link компонента от react-router-dom
import { animated, useSpring } from 'react-spring';
import { useLanguage } from '../LanguageContext/LanguageContext';

const OnlineTraining = () => {
  const { language } = useLanguage();
  const onlineTrainingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });
 
  const onlineTrainingData = [
    {
      id: 1,
      title: language === 'bg' ? 'Кардио тренировка за начинаещи' : 'Cardio Training for Beginners',
      instructor: language === 'bg' ? 'Иван Иванов' : 'Ivan Ivanov',
      videoUrl: 'https://www.youtube.com/embed/example1',
    },
    {
      id: 2,
      title: language === 'bg' ? 'Силова тренировка със собствено тегло' : 'Strength Training with Bodyweight',
      instructor: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      videoUrl: 'https://www.youtube.com/embed/example2',
    },
    {
      id: 3,
      title: language === 'bg' ? 'Функционална тренировка за цялото тяло' : 'Full Body Functional Training',
      instructor: language === 'bg' ? 'Георги Георгиев' : 'Georgi Georgiev',
      videoUrl: 'https://www.youtube.com/embed/example3',
    },
    {
      id: 4,
      title: language === 'bg' ? 'Йога сутринен поток' : 'Morning Yoga Flow',
      instructor: language === 'bg' ? 'Елена Иванова' : 'Elena Ivanova',
      videoUrl: 'https://www.youtube.com/embed/example4',
    },
    {
      id: 5,
      title: language === 'bg' ? 'HIIT тренировка за изгаряне на мазнини' : 'HIIT Fat Burning Workout',
      instructor: language === 'bg' ? 'Петър Петров' : 'Peter Petrov',
      videoUrl: 'https://www.youtube.com/embed/example5',
    },
  ];

  return (
    <animated.div style={onlineTrainingAnimation} className="services-container">
      <div className="online-training-list">
        {onlineTrainingData.map((training) => (
          <div key={training.id} className="online-training-item">
            <iframe
              title={training.title}
              width="560"
              height="315"
              src={training.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="training-details">
              <h3>{training.title}</h3>
              <p>{language === 'bg' ? 'Инструктор' : 'Instructor'}: {training.instructor}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="back-button-container"> {/* Контейнер за бутона за навигация назад */}
        <Link to="/" className="back-button">Назад</Link> {/* Използване на Link компонента с пътя към home страницата */}
      </div>
    </animated.div>
  );
};

export default OnlineTraining;