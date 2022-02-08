import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <FaBeer />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/singin">Sing In</Link></li>
          <li><Link to="/singup">Sing Up</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
