import React from 'react';
import Navigation from '../components/containers/Navigation';
import PageContainer from '../components/containers/PageContainer';
import ResumeItem from '../components/ResumeModule';
import classes from './resume.module.css';


function Resume() {
  return (
    <div>
      <PageContainer title='Resume'>
        <Navigation title='Resume' />
        <article className={classes.resumeBox}>
          <ResumeItem />
        </article>
        <Resume
          data="/my-app/public/JoshuaOBrienRS.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>It seems you don't have a PDF plugin for this browser.
            You can <a href="/JoshuaOBrienRS.pdf">click here to download the PDF file.</a>
          </p>
        </Resume>
      </PageContainer>
    </div>
  );
}

export default Resume;
