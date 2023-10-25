import React from 'react';
import banner from '../../images/Header-Do-SMTHG-GRT.jpg';
import Navigation from './Navigation';
import styles from './Header.module.css';

function Header(props) {
  const headerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <header className={styles.header} style={headerStyle}>
      <Navigation />
      {/* Other header content if needed */}
    </header>
  );
}

export default Header;