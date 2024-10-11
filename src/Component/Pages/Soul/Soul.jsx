import React from 'react';
import './Soul.scss';
import csrImage1 from '../../../Assets/Souls/soul_img1 (1).jpg';
import csrImage2 from '../../../Assets/Souls/soul_img1 (2).jpg';
import csrImage3 from '../../../Assets/Souls/soul_img1 (3).jpg';

const Soul = () => {
  return (
    <section className='soul'>
      <div className="wavy-heading-container">
        <h1 className="wavy-heading">Shoes & Souls</h1>
      </div>
      <div className='soul-content'>
        <p>
          Solemates believes that businesses grow due to society and hence it's important that we give back to help grow the society as well.
          Solemates, in collaboration with Clothes Box Foundation, organized a shoe distribution drive across India - Happy Walking.
        </p>
        <p>
          We distributed shoes among underprivileged kids to make something as simple as walking exciting for them. The drive was organized across several states, benefiting over 7000 people.
        </p>
      </div>

      <div className='soul-images'>
        <img src={csrImage1} alt='CSR Initiative 1' />
        <img src={csrImage2} alt='CSR Initiative 2' />
        <img src={csrImage3} alt='CSR Initiative 3' />
      </div>
    </section>
  );
};

export default Soul;
