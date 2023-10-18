import React from 'react';

import PageContainer from '../components/containers/PageContainer';
import WorkItem from '../components/WorkModule';
import classes from './Work.module.css';


function Work() {
  document.title = "Joshua OBrien - Portfolio"


  return (
    <PageContainer title='Portfolio'>
      <article className={classes.workBox}>
        <WorkItem />
      </article>
    </PageContainer>
  );
};   

export default Work;