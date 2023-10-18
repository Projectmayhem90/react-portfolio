import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/work" activeClassName={styles.active}>
            Portfolio
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/resume" activeClassName={styles.active}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;