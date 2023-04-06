import React from 'react';
import banner from '../../images/Header-Do-SMTHG-GRT.jpg'

function Head(props) {
  return (
    <header className="header">
      <img className="banner" src={banner} />
    </header>
  );
};

export default Head;