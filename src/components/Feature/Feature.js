import React from 'react';
import './Feature.scss';

const Feature = ({ title, text, svgName }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use href={`/sprite.svg#${svgName}`}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{title}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};

export default Feature;
