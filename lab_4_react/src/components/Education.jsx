import React from 'react';

const Education = ({ date, degree, institution }) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-gray-300 pb-2 mb-4">
        Освіта
      </h2>
      
      <article className="mb-4">
        <h3 className="text-sm text-gray-900 font-medium mb-1">
          {date}
        </h3>
        
        <p className="text-gray-900 leading-relaxed">
          <span className="font-semibold">{degree}</span> у <span className="italic">"{institution}"</span>
        </p>
      </article>
    </section>
  );
};

export default Education;