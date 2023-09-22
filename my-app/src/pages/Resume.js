import React from 'react';
import Navigation from '../components/containers/Navigation';

function Resume() {
  return (
    <div>
      <Navigation title='Resume' />
      <object
        data="/react-portfolio/my-app/public/JoshuaOBrienRS.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>It seems you don't have a PDF plugin for this browser.
          you can <a href="/react-portfolio/my-app/public/JoshuaOBrienRS.pdf">click here to download the PDF file.</a>
        </p>
      </object>
      <Navigation title='Resume' />
      <Resume />
    </div>
  );
};

export default Resume;