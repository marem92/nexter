import React from 'react';

const Realtor = ({ imgSrc, alt, name, sold }) => {
  return (
    <>
      <img src={imgSrc} alt={alt} className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heding-4--light">{name}</h4>
        <p className="realtors__sold">{sold} houses sold</p>
      </div>
    </>
  );
};

export default Realtor;
