import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-10 text-center shadow-md mb-10">
      
      <h1 className="text-5xl font-extrabold uppercase tracking-tighter mb-4">
        Шпилик Руслан
      </h1>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-4">
        <span>67, вулиця Петлюри, Львів</span>
        <span className="hidden md:inline">|</span>
        <span>+38067123456</span>
        <span className="hidden md:inline">|</span>
        <a 
          href="mailto:ruslanshpylyk@gmail.com" 
          className="hover:text-white transition-colors underline decoration-gray-500"
        >
          ruslanshpylyk@gmail.com
        </a>
      </div>

      <p className="text-xl font-medium tracking-wide border-t border-gray-800 pt-4 inline-block px-10">
        Фахівець з кібербезпеки
      </p>
      
    </header>
  );
};

export default Header;