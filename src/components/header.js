import { Link } from 'react-router-dom';
import React from 'react';
import planet from '../image/planet.png';

const Header = () => (
  <nav id="nav">
    <img src={planet} alt="Planet" />
    <h1 className="logo">
      Space Travelers Hub
    </h1>
    <ul className="navlinks">
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/">Missions</Link>
      </li>
      <div className="Line-2" />
      <li>
        <Link to="/">My Profile</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
