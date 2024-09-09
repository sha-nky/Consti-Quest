import React from 'react';

import { backgroundImage } from '../assets'

import '../Styles/Home.css'

function HeroSection(){
  return (
    <section className="home" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h3>Understanding the Constitution</h3>
        <p>"The Constitution is the foundational legal document that outlines the structure, powers, and principles of a government, ensuring the rights and duties of its citizens."</p>
      </div>
    </section>
  )
}

export default HeroSection
