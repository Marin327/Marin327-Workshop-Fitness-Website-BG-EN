import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const Food = () => {
  const { language } = useLanguage();
  const foodAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const dietTypes = {
    bg: [
      {
        name: 'Вегетарианска диета',
        description: 'Това е хранителен режим, който изключва месото, но включва плодове, зеленчуци, яйца и млечни продукти.',
      },
      {
        name: 'Веганска диета',
        description: 'Веганската диета изключва всички видове животински продукти, включително месо, мляко, яйца и мед.',
      },
      {
        name: 'Палео диета',
        description: 'Палео диетата се базира на храни, които са налични през каменната епоха, като месо, риба, плодове и зеленчуци.',
      },
      {
        name: 'Кето диета',
        description: 'Кето диетата е ниско въглехидратна и високомазна диета, която насърчава тялото да влезе в състояние на кетоза.',
      },
      {
        name: 'Аткинс диета',
        description: 'Диетата Аткинс е ниско въглехидратна диета, която се фокусира върху потреблението на протеини и мазнини, а не въглехидрати.',
      },
      {
        name: 'Сурова храна (Raw food) диета',
        description: 'Суровата храна диета се основава на консумацията на необработени, непопарени и неразгазени храни, като плодове, зеленчуци и ядки.',
      },
      {
        name: 'Медитеранеен диета',
        description: 'Медитеранеан диетата се характеризира с високо потребление на плодове, зеленчуци, зърнени храни, риба и здравословни мазнини, като маслиново масло.',
      },
      {
        name: 'Японска диета',
        description: 'Японската диета е базирана на хранителните принципи, характерни за японската кухня, като риба, суши, зеленчуци и зелени чайове.',
      },
      {
        name: 'Гладуване (Intermittent Fasting)',
        description: 'Гладуването е хранителен режим, при който периодично се ограничава времето за хранене с цел подобряване на здравето и контролиране на теглото.',
      },
      {
        name: 'Дукан диета',
        description: 'Дукан диетата е ниско въглехидратна и високопротеинова диета, която се състои от четири фази и се основава на консумацията на протеини и ограничаване на въглехидратите.',
      },
      {
        name: 'Южно-плажанска диета',
        description: 'Южно-плажанската диета се фокусира върху консумацията на нискокалорични храни, богати на протеини и мазнини, като същевременно се ограничава въглехидратите.',
      },
      {
        name: 'Майкъл Фелпс диета',
        description: 'Диетата на Майкъл Фелпс е хранителен режим, който включва високо потребление на калории и протеини, за да поддържа енергийните нужди на професионален спортист като него.',
      },
      {
        name: 'Майка Бреди диета',
        description: 'Диетата на Майка Бреди е хранителен режим, който се фокусира върху потреблението на органична и пълнозърнеста храна, с цел поддържане на здравословен начин на живот.',
      },
      {
        name: 'Овесена каша диета',
        description: 'Овесената каша диета се състои от консумацията на овесени ядки като основен източник на хранене, като се комбинират с различни добавки като плодове, ядки и мед.',
      },
      {
        name: '5:2 диета',
        description: '5:2 диетата се характеризира с периодично ограничаване на калорийния прием до 25% от обичайното ниво за два дни от седмицата, като останалите дни се храни нормално.',
      },
    ],
    en: [
      {
        name: 'Vegetarian Diet',
        description: 'This is a diet that excludes meat but includes fruits, vegetables, eggs, and dairy products.',
      },
      {
        name: 'Vegan Diet',
        description: 'The vegan diet excludes all animal products, including meat, milk, eggs, and honey.',
      },
      {
        name: 'Paleo Diet',
        description: 'The paleo diet is based on foods that were available during the stone age, such as meat, fish, fruits, and vegetables.',
      },
      {
        name: 'Keto Diet',
        description: 'The keto diet is a low-carb, high-fat diet that encourages the body to enter a state of ketosis.',
      },
      {
        name: 'Atkins Diet',
        description: 'The Atkins diet is a low-carb diet that focuses on consuming proteins and fats rather than carbohydrates.',
      },
      {
        name: 'Raw Food Diet',
        description: 'The raw food diet is based on consuming unprocessed, uncooked, and unrefined foods such as fruits, vegetables, and nuts.',
      },
      {
        name: 'Mediterranean Diet',
        description: 'The Mediterranean diet is characterized by high consumption of fruits, vegetables, grains, fish, and healthy fats such as olive oil.',
      },
      {
        name: 'Japanese Diet',
        description: 'The Japanese diet is based on the nutritional principles characteristic of Japanese cuisine, including fish, sushi, vegetables, and green teas.',
      },
      {
        name: 'Intermittent Fasting',
        description: 'Intermittent fasting is a dietary approach that periodically restricts the time for eating to improve health and control weight.',
      },
      {
        name: 'Dukan Diet',
        description: 'The Dukan diet is a low-carb, high-protein diet consisting of four phases and is based on consuming proteins and limiting carbohydrates.',
      },
      {
        name: 'South Beach Diet',
        description: 'The South Beach diet focuses on consuming low-calorie, protein-rich, and fat-rich foods while limiting carbohydrates.',
      },
      {
        name: 'Michael Phelps Diet',
        description: 'The Michael Phelps diet is a dietary regimen that includes high calorie and protein consumption to meet the energy demands of a professional athlete like him.',
      },
      {
        name: 'Mother Brady Diet',
        description: 'The Mother Brady diet is a dietary regimen that focuses on consuming organic and whole grain foods to maintain a healthy lifestyle.',
      },
      {
        name: 'Oatmeal Diet',
        description: 'The oatmeal diet consists of consuming oats as the main source of nutrition, combined with various additives such as fruits, nuts, and honey.',
      },
      {
        name: '5:2 Diet',
        description: 'The 5:2 diet involves periodically restricting calorie intake to 25% of the usual level for two days a week, while eating normally on the remaining days.',
      },
    ],
  };

  const [selectedDiet, setSelectedDiet] = useState(null);

  const dietList = dietTypes[language] || [];

  const handleDietClick = (index) => {
    setSelectedDiet(dietList[index]);
  };

  const closeDescription = () => {
    setSelectedDiet(null);
  };

  const backButtonLabel = language === 'bg' ? 'Назад' : 'Back';
  const closeButtonLabel = language === 'bg' ? 'Затвори' : 'Close'; // Премести дефиницията тук

  return (
    <animated.div style={foodAnimation} className="food-container">
      <p>
        {language === 'bg'
          ? 'Разгледайте различните хранителни режими, които предлагаме в нашия фитнес център.'
          : 'Explore the various diet types we offer at our fitness center.'}
      </p>
      <ul>
        {dietList.map((diet, index) => (
          <li key={index} onClick={() => handleDietClick(index)}>
            {diet.name}
          </li>
        ))}
      </ul>
      {selectedDiet && (
        <div className="diet-details">
          <h3>{selectedDiet.name}</h3>
          <p>{selectedDiet.description}</p>
          <button onClick={closeDescription}>{closeButtonLabel}</button>
        </div>
      )}
      <div className="back-button-container" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button onClick={() => window.history.back()}>{backButtonLabel}</button>
      </div>
    </animated.div>
  );
};

export default Food;