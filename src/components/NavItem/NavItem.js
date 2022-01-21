import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ link, text }) => {
  return (
    <>
      <li className="nav__item">
        <Link className="nav__link" to={link}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default NavItem;
