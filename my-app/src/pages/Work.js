import React from 'react';

import PageContainer from '../components/containers/PageContainer';
import Navigation from '../components/containers/Navigation';
import WorkItem from '../components/WorkModule';
import classes from './Work.module.css';


function Work() {
  document.title = "Joshua OBrien - Portfolio"


  return (
    <PageContainer title='Portfolio'>
      <Navigation title='Work'/>
      <article className={classes.workBox}>
        <WorkItem />
      </article>
    </PageContainer>
  );
};   

export default Work;