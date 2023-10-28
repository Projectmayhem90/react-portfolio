import React from 'react';
import Navigation from './Navigation';
import styles from './Header.module.css';

function Header(props) {
  
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} ${styles.dynamicBackground}`}>
         {/* Other header content if needed */}
      </div>
      <Navigation />
    </header>
  );
}

export default Header;