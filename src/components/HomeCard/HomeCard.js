import React from 'react';
import './HomeCard.scss';
import Button from '../Button/Button';

const HomeCard = ({ name, imgSrc, location, rooms, area, price }) => {
  return (
    <div className="home">
      <img src={imgSrc} alt="House 1" className="home__img" />
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg>
          <use href="/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use href="/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>{rooms} rooms</p>
      </div>
      <div className="home__area">
        <svg>
          <use href="/sprite.svg#icon-expand"></use>
        </svg>
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <svg>
          <use href="/sprite.svg#icon-key"></use>
        </svg>
        <p>${price}</p>
      </div>
      <Button text="Contact realtor" />
    </div>
  );
};

export default HomeCard;
