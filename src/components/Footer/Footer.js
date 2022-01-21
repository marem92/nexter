import React from 'react';
import NavItem from '../NavItem/NavItem';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="nav">
        <NavItem link={'/'} text={'Find your dream home'} />
        <NavItem link={'/'} text={'Request proposal'} />
        <NavItem link={'/'} text={'Download home planer'} />
        <NavItem link={'/'} text={'Contact us'} />
        <NavItem link={'/'} text={'Submit your property'} />
        <NavItem link={'/'} text={'Come work with us!'} />
      </ul>
    </div>
  );
};

export default Footer;
