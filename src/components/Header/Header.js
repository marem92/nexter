import React from 'react';
import './Header.scss';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className="header">
      <img src="images/logo.png" alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <Button text="View our properties" />
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src="images/logo-bbc.png" alt="Seen on logo 1" />
        <img src="images/logo-forbes.png" alt="Seen on logo 2" />
        <img src="images/logo-techcrunch.png" alt="Seen on logo 3" />
        <img src="images/logo-bi.png" alt="Seen on logo 4" />
      </div>
    </div>
  );
};

export default Header;
