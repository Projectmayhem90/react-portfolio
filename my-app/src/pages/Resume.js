import React from 'react';
import PageContainer from '../components/containers/PageContainer';
import ResumeItem from '../components/ResumeModule';
import classes from './Resume.module.css';

function DownloadComponent() {
  return (
    <div>
      <PageContainer title='Resume'>
        <article className={classes.resumeBox}>
          <ResumeItem />
          {/* Adding the download link below the ResumeItem */}
        </article>
      </PageContainer>
    </div>
  );
}

export default DownloadComponent;