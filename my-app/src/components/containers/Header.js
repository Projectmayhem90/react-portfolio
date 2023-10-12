import React from 'react';
import banner from '../../images/Header-Do-SMTHG-GRT.jpg'

function Header(props) {
  return (
    <header className="header">
      <img className="banner" src={banner} alt=""/>
    </header>
  );
};



export default Header;