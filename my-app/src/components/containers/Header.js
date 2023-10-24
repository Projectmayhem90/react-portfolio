import React from 'react';
import banner from '../../images/Header-Do-SMTHG-GRT.jpg'
import Navigation from './Navigation';


function Header(props) {
  const headerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <header className="header" style={headerStyle}>
      <Navigation />
      {/* Other header content if needed */}
    </header>
  );
}

export default Header;