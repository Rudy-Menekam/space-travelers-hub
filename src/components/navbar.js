import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <NavLink
          className={styles.navLink}
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
        <NavLink
          className={styles.navLink}
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
