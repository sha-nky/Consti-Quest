import React from 'react';

function HeroSection({ onStart }){
  return (
    <div className="flex flex-grow flex-col items-center justify-center text-center my-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Learn About Your Rights Through Quests!
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Explore the Constitution through interactive quests. Become aware of laws concerning women's safety, children's rights, and more!
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Start Your Quest
      </button>
    </div>
  )
}

export default HeroSection
