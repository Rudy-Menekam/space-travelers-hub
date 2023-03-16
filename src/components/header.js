import { NavLink } from 'react-router-dom';
import React from 'react';
import planet from '../image/planet.png';

const Header = () => (
  <nav id="nav">
    <img src={planet} alt="Planet" />
    <h1 className="logo">Space Travelers Hub</h1>
    <ul className="navlinks">
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
      </li>
      <div className="Line-2" />
      <li>
        <NavLink
          to="/my_profile"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Header;
