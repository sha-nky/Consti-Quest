import React from 'react'
import { HeroSection } from '../Components'

import '../Styles/Home.css';

function Home() {

  return (
    <div className="App mt-28">
      <HeroSection />

      <section className="about" id="about">
        <h1 className="heading"><span>about</span>us</h1>
        <div className="row">
          <div className="image">
            <img src="image-from-rawpixel-id-6284515-png.png" alt="About" />
          </div>
          <div className="content">
            <h3>About Project</h3>
            <p>"Understanding the Constitution" is a project aimed at raising awareness about the rights and protections granted to women and children under the Indian Constitution. The initiative highlights key constitutional provisions, such as Articles 14 (equality before the law), 15 (prohibition of discrimination), and 21A (right to education), which serve as the foundation for safeguarding these vulnerable groups.<br /><br />
              Through real-life scenarios and challenges, the project emphasizes the importance of understanding legal frameworks, promoting empathy, and encouraging individuals to apply constitutional principles in daily life. The goal is to empower citizens with knowledge, fostering a more inclusive and just society by ensuring that the rights of women and children are recognized and upheld.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home