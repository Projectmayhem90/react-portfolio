import React from 'react';
import Navigation from '../components/containers/Navigation';
import PageContainer from '../components/containers/PageContainer';
import ResumeItem from '../components/ResumeModule';
import classes from './Resume.module.css';

function DownloadComponent() {
  return (
    <div>
      <PageContainer title='Resume'>
        <Navigation title='Resume' />
        <article className={classes.resumeBox}>
          <ResumeItem />
          {/* Adding the download link below the ResumeItem */}
          <div className={classes.downloadLink}>
            <a href="/JoshuaOBrienRS.pdf" download>Download my Resume</a>
          </div>
        </article>
      </PageContainer>
    </div>
  );
}

export default DownloadComponent;