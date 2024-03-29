import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import DietList from './DietList/DietList';
import ExpertServices from './ExpertServices/ExpertServices';
import ExtraServices from './ExtraServices/ExtraServices';
import Food from './Food/Food';
import Header from './Header/Header';
import Home from './Home/Home';
import KidsTraining from './KidsTraining/KidsTraining';
import { LanguageProvider } from './LanguageContext/LanguageContext';
import News from './News/News';
import OnlineTraining from './OnlineTraining/OnlineTraining';

import './App.css';

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/expert-services" element={<ExpertServices />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/extra-services" element={<ExtraServices />} />
            <Route path="/kids-training" element={<KidsTraining />} />
            <Route path="/food" element={<Food />} />
            <Route path="/diet-list" element={<DietList />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;