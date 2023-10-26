import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import ResumeItem from '../ResumeModule';

function Navigation() {
  return (
    <div className={styles.navigationContainer}> {/* New section container */}
      <div className={styles.nameText}>Joshua O'Brien</div> 

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/portfolio" activeClassName={styles.active}>
              Portfolio
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <ResumeItem />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;