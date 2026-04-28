import React from 'react';

const Skills = ({ skillList }) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-gray-300 pb-2 mb-5">
        Навички
      </h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {skillList.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r">
        <p className="text-sm text-blue-900">
          <span className="font-bold">Сертифікат CISCO:</span>{' '}
          <a 
            href="https://www.cisco.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-blue-700 transition-colors"
          >
            www.cisco.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Skills;