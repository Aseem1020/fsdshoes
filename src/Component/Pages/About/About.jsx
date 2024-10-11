import React from 'react';
import './About.scss';
import goals from '../../../Assets/About/goals.png';
import about1 from '../../../Assets/About/about-1.jpg';

const About = () => {
  return (
    <section className='about-main'>
      <div className='about-image'>
        <img src={about1} alt='Our history' />
        <div className='overlay-text'>
          <h1>About Us</h1>
        </div>
      </div>

      <div className='about-content'>
        <div className='about-text'>
          <h2>History and Evolution</h2>
          <p>Solemates is India’s largest sports and athleisure footwear brand in terms of value and volume in Indore, MP. Introduced in 2018, the brand offers a diverse portfolio for the entire family with multiple styles, colors, and price points.</p>
        </div>

        <div className='about-goals'>
          <h2>Our Goals</h2>
          <img src={goals} alt='Our goals' className='goals-img' />
          <p>Our Vision is to encourage free, creative confidence & self-expression & raise shoe-consciousness.</p>
          <p>Our Mission is to emerge as the most preferred sports and athleisure brand in India, becoming an integral part of the active lifestyle of every Indian.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
