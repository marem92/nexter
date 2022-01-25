import React from 'react';
import './Realtors.scss';
import Realtor from '../Realtor/Realtor';

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <Realtor
          imgSrc={'images/realtor-1.jpeg'}
          alt={'Realtor 1'}
          name={'Erik Feinman'}
          sold={'245'}
        />
        <Realtor
          imgSrc={'images/realtor-2.jpeg'}
          alt={'Realtor 2'}
          name={'Kim Brown'}
          sold={'212'}
        />
        <Realtor
          imgSrc={'images/realtor-3.jpeg'}
          alt={'Realtor 3'}
          name={'Toby Ramsey'}
          sold={'198'}
        />
      </div>
    </div>
  );
};

export default Realtors;
