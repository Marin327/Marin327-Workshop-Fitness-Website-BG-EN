import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импорт на Link компонента от react-router-dom
import { animated, useSpring } from 'react-spring';
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const DietDetails = () => {
  const { language } = useLanguage();

  const dietList = [
    {
      name: language === 'bg' ? 'Палео диета' : 'Paleo Diet',
      description: language === 'bg' ? 'Консумация на храни, които са били на разположение на нашите предци (мясо, риба, плодове, зеленчуци).' : 'Consumption of foods available to our ancestors (meat, fish, fruits, vegetables).',
    },
    {
      name: language === 'bg' ? 'Веганска диета' : 'Vegan Diet',
      description: language === 'bg' ? 'Изключване на всички продукти от животински произход.' : 'Exclusion of all animal products.',
    },
    {
      name: language === 'bg' ? 'Кето диета' : 'Keto Diet',
      description: language === 'bg' ? 'Ниско въглехидратна и високомазнена диета, която цели стимулиране на процеса на кетоза в организма.' : 'Low-carb, high-fat diet that aims to stimulate the process of ketosis in the body.',
    },
   
    {
      name: language === 'bg' ? 'Медитеранска диета' : 'Mediterranean Diet',
      description: language === 'bg' ? 'Богата на зеленчуци, маслиново масло, риба и орехи, тази диета е вдъхновена от храненето в средиземноморските страни.' : 'Rich in vegetables, olive oil, fish, and nuts, this diet is inspired by the eating habits in Mediterranean countries.',
    },
    {
      name: language === 'bg' ? 'Аткинс диета' : 'Atkins Diet',
      description: language === 'bg' ? 'Ниско въглехидратна диета, която акцентира върху консумацията на протеини и мазнини.' : 'Low-carb diet that focuses on consuming proteins and fats.',
    },
    {
      name: language === 'bg' ? 'Диета за отслабване с детоксикация' : 'Detox Diet for Weight Loss',
      description: language === 'bg' ? 'Фокусира се на консумацията на храни, които помагат за детоксикацията на организма.' : 'Focuses on consuming foods that help detoxify the body.',
    },
    {
      name: language === 'bg' ? 'Диета с ниско съдържание на захари' : 'Low Sugar Diet',
      description: language === 'bg' ? 'Ограничава въглехидратите с високо съдържание на захари и фокусира върху здравословните алтернативи.' : 'Limits carbohydrates with high sugar content and focuses on healthy alternatives.',
    },
    {
      name: language === 'bg' ? 'Главоболна диета' : 'Headache Diet',
      description: language === 'bg' ? 'Избягване на храни и напитки, които често предизвикват главоболие (например, чоколад, червено вино).' : 'Avoidance of foods and drinks that often trigger headaches (e.g., chocolate, red wine).',
    },
    {
      name: language === 'bg' ? 'Диета за повишаване на енергията' : 'Energy Boost Diet',
      description: language === 'bg' ? 'Консумация на храни, богати на витамини и минерали, за подпомагане на енергийния баланс.' : 'Consumption of foods rich in vitamins and minerals to support energy balance.',
    },
    {
      name: language === 'bg' ? 'Сериозно вегетарианство' : 'Serious Vegetarianism',
      description: language === 'bg' ? 'Цялостна вегетарианска диета с акцент върху разнообразните и здравословни растителни продукти.' : 'Comprehensive vegetarian diet with a focus on diverse and healthy plant-based products.',
    },
    {
      name: language === 'bg' ? 'Диета за кръвната група' : 'Blood Type Diet',
      description: language === 'bg' ? 'Специфична диета, предполагаща, че определени храни са по-подходящи за хора с различни кръвни групи.' : 'Specific diet assuming that certain foods are more suitable for people with different blood types.',
    },
    {
      name: language === 'bg' ? 'Диета за сърдечно-съдовата система' : 'Cardiovascular Health Diet',
      description: language === 'bg' ? 'Основана на принципите за поддържане на здравето на сърдечно-съдовата система чрез правилно хранене.' : 'Based on principles for maintaining cardiovascular health through proper nutrition.',
    },
    {
    name: language === 'bg' ? 'Диета за поддържане на нивата на холестерола' : 'Cholesterol Maintenance Diet',
    description: language === 'bg' ? 'Фокусира се на консумацията на храни, които помагат за контролиране на нивата на холестерола.' : 'Focuses on consuming foods that help control cholesterol levels.',
    },
    {
    name: language === 'bg' ? 'Диета за поддържане на здравето на черния дроб' : 'Colon Health Diet',
    description: language === 'bg' ? 'Подпомагаща диета, която помага за здравето на черния дроб и храносмилателната система.' : 'Supportive diet that helps maintain the health of the colon and digestive system.',
    },
    {
    name: language === 'bg' ? 'Диета за спортисти и активни хора' : 'Athlete and Active Lifestyle Diet',
    description: language === 'bg' ? 'Балансирана диета, предназначена за поддържане на енергията и възстановяването след физическо натоварване.' : 'Balanced diet designed to maintain energy and aid recovery after physical exertion.',
    },
    ];
    
    const [selectedDiet, setSelectedDiet] = useState(null);
  
    const dietAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 500,
    });
    
    const handleDietSelect = (diet) => {
      setSelectedDiet(selectedDiet === diet ? null : diet);
    };
    
    return (
      <div>
        <div className="diet-list">
          {dietList.map((diet, index) => (
            <div key={index} onClick={() => handleDietSelect(diet)} className="diet-item">
              {diet.name}
            </div>
          ))}
        </div>
        {selectedDiet && (
          <animated.div style={dietAnimation} className="diet-details-container">
            <h2>{selectedDiet.name}</h2>
            <p>{selectedDiet.description}</p>
            <button onClick={() => handleDietSelect(selectedDiet)}>{language === 'bg' ? 'Затвори' : 'Close'}</button>
          </animated.div>
        )}
        <div style={{ textAlign: 'right', position: 'fixed', bottom: '20px', right: '20px' }}>
  <Link to="/" className="back-button">{language === 'bg' ? 'Назад' : 'Back'}</Link> 
</div>
      </div>
    );
  }
  
  export default DietDetails;
