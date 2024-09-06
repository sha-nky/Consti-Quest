import React from 'react'
import { HeroSection } from '../Components'

function Home() {
  const handleStartClick = () => {
    console.log('Start the quest!');
  };

  return (
    <div>
      <HeroSection onStart={handleStartClick} />
    </div>
  )
}

export default Home