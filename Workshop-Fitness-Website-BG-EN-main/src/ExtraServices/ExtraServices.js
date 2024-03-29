import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const ExtraServices = () => {
  const { language } = useLanguage();

  const extraServicesAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const specialWorkouts = [
    { 
      en: 'HIIT for fast calorie burning', 
      bg: 'HIIT за бързо изгаряне на калории', 
      description_en: 'High-Intensity Interval Training (HIIT) is a quick and effective way to burn calories and improve cardiovascular health. It involves short bursts of intense exercise followed by brief rest periods.', 
      instructor: 'John Doe', 
      duration: '45 minutes', 
      difficulty: 'Intermediate', 
      benefits_en: ['Improves cardiovascular health', 'Boosts metabolism', 'Increases endurance'], 
      benefits_bg: ['Подобрява сърдечната дейност', 'Ускорява метаболизма', 'Увеличава издръжливостта']
    },
    { 
      en: 'Bodyweight strength training', 
      bg: 'Силов тренинг със собствено тегло', 
      description_en: 'Bodyweight strength training uses your own body weight to provide resistance and build muscle strength. It can be done anywhere without the need for special equipment, making it convenient for all fitness levels.', 
      instructor: 'Jane Smith', 
      duration: '60 minutes', 
      difficulty: 'Beginner to Advanced', 
      benefits_en: ['Builds muscle strength', 'Improves balance and flexibility', 'Increases functional strength'], 
      benefits_bg: ['Увеличава мускулната сила', 'Подобрява баланса и гъвкавостта', 'Увеличава функционалната сила']
    },
    { 
      en: 'Cardio dances for fun', 
      bg: 'Кардио-танци за забавление', 
      description_en: 'Cardio dances are a fun way to burn calories and improve cardiovascular health. They involve rhythmic movements set to music, making workouts enjoyable and engaging.', 
      instructor: 'Maria Garcia', 
      duration: '50 minutes', 
      difficulty: 'Beginner', 
      benefits_en: ['Burns calories', 'Improves coordination', 'Boosts mood'], 
      benefits_bg: ['Изгаря калории', 'Подобрява координацията', 'Подобрява настроението']
    },
    { 
      en: 'Yoga for relaxation and flexibility', 
      bg: 'Йога за релаксация и гъвкавост', 
      description_en: 'Yoga focuses on breath control, meditation, and various poses to promote relaxation, flexibility, and strength. It helps reduce stress and improve overall well-being.', 
      instructor: 'Elena Rodriguez', 
      duration: '60 minutes', 
      difficulty: 'All levels', 
      benefits_en: ['Promotes relaxation', 'Increases flexibility', 'Strengthens muscles'], 
      benefits_bg: ['Подобрява релаксацията', 'Увеличава гъвкавостта', 'Укрепва мускулите']
    },
    { 
      en: 'Boxing for fitness and stress relief', 
      bg: 'Бокс за фитнес и стрес релаксация', 
      description_en: 'Boxing workouts involve a combination of punches, kicks, and other movements to improve cardiovascular health, strength, and coordination. They are also effective for stress relief and boosting confidence.', 
      instructor: 'Carlos Martinez', 
      duration: '45 minutes', 
      difficulty: 'Intermediate', 
      benefits_en: ['Improves cardiovascular health', 'Builds strength and endurance', 'Reduces stress and anxiety'], 
      benefits_bg: ['Подобрява сърдечната дейност', 'Увеличава сила и издръжливост', 'Намалява стреса и тревожността']
    },
    { 
      en: 'Back workout for proper foundation', 
      bg: 'Тренировка на гърба за правилна основа', 
      description_en: 'Back workouts target muscles in the upper and lower back to improve posture, stability, and strength. Strengthening these muscles is essential for maintaining proper spinal alignment and preventing injury.', 
      instructor: 'Anna Johnson', 
      duration: '45 minutes', 
      difficulty: 'Intermediate', 
      benefits_en: ['Improves posture', 'Strengthens back muscles', 'Reduces risk of injury'], 
      benefits_bg: ['Подобрява поставата', 'Укрепва мускулите на гърба', 'Намалява риска от нараняване']
    },
    { 
      en: 'Functional training for overall fitness', 
      bg: 'Функционален тренинг за цялостна форма', 
      description_en: 'Functional training focuses on movements that mimic everyday activities to improve balance, flexibility, and strength. It helps enhance overall fitness and performance in daily life.', 
      instructor: 'David Lee', 
      duration: '60 minutes', 
      difficulty: 'All levels', 
      benefits_en: ['Enhances functional fitness', 'Improves balance and coordination', 'Increases muscle endurance'], 
      benefits_bg: ['Подобрява функционалния фитнес', 'Увеличава баланса и координацията', 'Увеличава издръжливостта на мускулите']
    },
    { 
      en: 'Pilates for strong core muscles', 
      bg: 'Пилатес за силна коремна мускулатура', 
      description_en: 'Pilates exercises focus on strengthening the core muscles, improving posture, and enhancing flexibility. It helps develop a strong and stable core, which is essential for overall fitness and injury prevention.', 
      instructor: 'Sophia Williams', 
      duration: '50 minutes', 
      difficulty: 'Intermediate', 
      benefits_en: ['Strengthens core muscles', 'Improves posture', 'Increases flexibility'], 
      benefits_bg: ['Укрепва мускулите в корема', 'Подобрява поставата', 'Увеличава гъвкавостта']
    },
    { 
      en: 'Lower body workout', 
      bg: 'Тренировка на долната част на тялото', 
      description_en: 'Lower body workouts target muscles in the legs, hips, and glutes to improve strength, stability, and endurance. They are essential for overall lower body development and functional movement.', 
      instructor: 'Michael Brown', 
      duration: '55 minutes', 
      difficulty: 'All levels', 
      benefits_en: ['Strengthens lower body muscles', 'Improves balance and stability', 'Enhances athletic performance'], 
      benefits_bg: ['Укрепва мускулите на долната част на тялото', 'Подобрява баланса и стабилността', 'Подобрява спортната производителност']
    },
    { 
      en: 'Crossfit for intensive preparation', 
      bg: 'Кросфит за интензивна подготовка', 
      description_en: 'CrossFit workouts involve varied functional movements performed at high intensity to improve cardiovascular health, strength, and endurance. They are suitable for individuals looking for a challenging and diverse fitness program.', 
      instructor: 'Mark Johnson', 
      duration: '60 minutes', 
      difficulty: 'Advanced', 
      benefits_en: ['Increases strength and power', 'Enhances cardiovascular fitness', 'Boosts mental toughness'], 
      benefits_bg: ['Увеличава сила и мощ', 'Подобрява сърдечния фитнес', 'Укрепва умствената устойчивост']
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeDescription = () => {
    setSelectedService(null);
  };

  const backButtonLabel = language === 'bg' ? 'Назад' : 'Back';
  const closeButtonLabel = language === 'bg' ? 'Затвори' : 'Close';

  return (
    <animated.div style={extraServicesAnimation} className="services-container">
      {selectedService && (
        <div className="extra-service-details">
          <h3>{language === 'en' ? selectedService.en : selectedService.bg}</h3>
          <p>{language === 'en' ? selectedService.description_en : selectedService.description_bg}</p>
          <p><strong>{language === 'en' ? 'Instructor' : 'Инструктор'}:</strong> {selectedService.instructor}</p>
          <p><strong>{language === 'en' ? 'Duration' : 'Продължителност'}:</strong> {selectedService.duration}</p>
          <p><strong>{language === 'en' ? 'Difficulty' : 'Трудност'}:</strong> {selectedService.difficulty}</p>
          <p><strong>{language === 'en' ? 'Benefits' : 'Ползи'}:</strong></p>
          <ul>
            {language === 'en' ? selectedService.benefits_en.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            )) : selectedService.benefits_bg.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <button className="close-button" onClick={closeDescription}>{closeButtonLabel}</button>
        </div>
      )}
      <div className="back-button-container">
        <Link to="/" className="back-button">{backButtonLabel}</Link>
      </div>
      <ul>
        {specialWorkouts.map((workout, index) => (
          <li key={index} onClick={() => handleServiceClick(workout)}>
            {language === 'en' ? workout.en : workout.bg}
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default ExtraServices;