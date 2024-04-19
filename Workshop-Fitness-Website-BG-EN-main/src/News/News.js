import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { animated, useSpring } from 'react-spring';
import '../App.css';
import { useLanguage } from '../LanguageContext/LanguageContext';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const newsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const { language } = useLanguage(); 

  const newsList = [
    {
      bg: 'Откриване на нов фитнес център', 
      en: 'Opening of a New Fitness Center',
      description_bg: 'Заповядайте на официалното откриване на нашия нов фитнес център, оборудван с най-съвременни уреди и съоръжения.',
      description_en: 'Join us for the grand opening of our new fitness center equipped with state-of-the-art equipment and facilities.' 
    },
    { 
      bg: 'Нов треньор със звезден статус в екипа ни', 
      en: 'New Star Trainer Joining Our Team',
      description_bg: 'Представяме ви нашия нов треньор със световно признат статус, който ще ви помогне да постигнете вашите фитнес цели.',
      description_en: 'Introducing our new trainer with a globally recognized status who will help you achieve your fitness goals.' 
    },
    { 
      bg: 'Специална промоция за нови клиенти', 
      en: 'Special Promotion for New Clients',
      description_bg: 'Възползвайте се от нашата специална промоция за всички нови клиенти и започнете вашето фитнес приключение още днес!',
      description_en: 'Take advantage of our special promotion for all new clients and start your fitness journey today!' 
    },
    { 
      bg: 'Ден на отворените врати - бъдете наши гости', 
      en: 'Open House Day - Be Our Guests',
      description_bg: 'Присъствайте на деня на отворените врати и се насладете на безплатни тренировки, семинари и изненади.',
      description_en: 'Attend our open house day and enjoy free workouts, seminars, and surprises.' 
    },
    { 
      bg: 'Нови тренировъчни програми за начинаещи', 
      en: 'New Workout Programs for Beginners',
      description_bg: 'Представяме ви нови тренировъчни програми, създадени специално за начинаещи, които искат да започнат своето фитнес приключение.',
      description_en: 'Introducing new workout programs designed specifically for beginners who want to start their fitness journey.' 
    },
    { 
      bg: 'Участие в състезание "Спортник на годината"', 
      en: 'Participation in "Athlete of the Year" Competition',
      description_bg: 'Нашият екип ще участва в престижното състезание "Спортник на годината" и ще се бори за титлата.',
      description_en: 'Our team will participate in the prestigious "Athlete of the Year" competition and compete for the title.' 
    },
    { 
      bg: 'Ексклузивно интервю с нашия основен треньор', 
      en: 'Exclusive Interview with Our Head Trainer',
      description_bg: 'Прочетете ексклузивното интервю с нашия основен треньор, в което той споделя своите най-добри съвети за трениране и хранене.',
      description_en: 'Read the exclusive interview with our head trainer where he shares his best tips for training and nutrition.' 
    },
    { 
      bg: 'Организиране на фитнес камп в планината', 
      en: 'Organizing a Fitness Camp in the Mountains',
      description_bg: 'Присъединете се към нашия фитнес камп в планината, където ще се забавлявате и ще тренирате в един прекрасен природен пейзаж.',
      description_en: 'Join our fitness camp in the mountains where you will have fun and train in a beautiful natural landscape.' 
    },
    { 
      bg: 'Тематични тренировки по време на празниците', 
      en: 'Themed Workouts During the Holidays',
      description_bg: 'Преживейте празниците с нашите тематични тренировки, които са забавни, енергични и ви помагат да се подготвите за сезона.',
      description_en: 'Experience the holidays with our themed workouts that are fun, energetic, and help you get ready for the season.' 
    },
    { 
      bg: 'Обновяване на оборудването в залата', 
      en: 'Updating the Equipment in the Gym',
      description_bg: 'Заповядайте в нашия обновен фитнес център, където ви очаква обновено оборудване и подобрени условия за тренировка.',
      description_en: 'Visit our newly updated fitness center where you will find upgraded equipment and improved training conditions.' 
    },
  ];

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const closeDescription = () => {
    setSelectedNews(null);
  };

  const closeButtonLabel = language === 'bg' ? 'Затвори' : 'Close';

  return (
    <animated.div style={newsAnimation} className="news-container">
      {selectedNews && (
        <div className="news-details">
          <h3>{language === 'bg' ? selectedNews.bg : selectedNews.en}</h3>
          <p>{language === 'bg' ? selectedNews.description_bg : selectedNews.description_en}</p>
          <button className="close-button" onClick={closeDescription}>{closeButtonLabel}</button>
        </div>
      )}
      <ul>
        {newsList.map((news, index) => (
          <li key={index} onClick={() => handleNewsClick(news)}>
            <span>{language === 'bg' ? news.bg : news.en}</span>
          </li>
        ))}
      </ul>
      <div className="back-button-container"> 
        <Link to="/" className="back-button">Назад</Link> {/* Използване на Link компонента с пътя към home страницата */}
      </div>
    </animated.div>
  );
}

export default News;
