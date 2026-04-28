import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const mySkills = [
    "Рівень англійської B2",
    "Вмію працювати з ОС Windows, Linux, MacOS",
    "Знаю мови програмування C, C++, C#, Python",
    "Вмію працювати з комп'ютерними мережами"
  ];

  return (
    <div className={`min-h-screen py-10 px-4 transition-colors duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      
      <div className="max-w-4xl mx-auto flex justify-end mb-4">
        <button 
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full font-medium transition shadow-md ${
            theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
          }`}
        >
          {theme === 'light' ? ' Нічний режим' : ' Денний режим'}
        </button>
      </div>

      <div className={`max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        
        <Header />

        <main className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <Education 
              date="Червень 2027"
              degree="Бакалавр з Кібербезпеки"
              institution="НУ Львівська політехніка"
            />
          </div>

          <div className="space-y-6">
            <Skills skillList={mySkills} />
          </div>

          <div className="md:col-span-2">
             <Reviews />
          </div>
          
          <ContactForm />

          <div className="md:col-span-2">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;