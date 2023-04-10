import React from 'react';
import Navigation from '../components/containers/Navigation';

function Resume() {
  document.title = "Joshua OBrien - Portfolio"

  return (
    <div>
      <Navigation title='Resume'/>
        <Navigation title='Resume'/>
      <iframe title="Resume" src={`${process.env.PUBLIC_URL}/JoshuaOBrienRS.pdf`} width="100%" height="500px"/>
        <Resume />
    </div>
  );
};   

export default Resume;