import React from 'react';

import PageContainer from '../components/containers/PageContainer';
import Navigation from '../components/containers/Navigation';
import WorkModule from '../components/workModule';
import classes from './Work.module.css';


function Work() {
  document.title = "Joshua OBrien - Portfolio"


  return (
    <PageContainer title='Portfolio'>
      <Navigation title='Work'/>
      <article className={classes.workBox}>
      </article>
    </PageContainer>
  );
};   

export default Work;