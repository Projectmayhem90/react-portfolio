import React from 'react';
import classes from './About.module.css';
import PageContainer from '../components/containers/PageContainer';


import profile from "../images/profile.jpg";


function About(props) {
  return (
    <PageContainer title="Joshua OBrien">
      <div className={classes.aboutHolder}>
        <img
          className={classes.profileImage}
          src={profile}
          alt="" />
        <div className={classes.aboutContent}>
            Throughout my professional journey in my twenties, I underwent a range of occupations without feeling a sense of passion towards any particular field. However, in 2022, I made a conscious decision to pursue a long-held aspiration of mine - software development.
          My work history boasts diverse experiences such as serving as a Construction Project Deployment Manager, with responsibilities that encompassed supervising significant multi-million dollar remodels. I also held the position of Geek Squad Manager, overseeing daily interactions in PC repair and Car installation. In both roles, I honed my skills in employee development and training.
          <br />
          <br />
            At home, I am blessed with a robust support system, consisting of my beloved wife and young son. My personal interests are multi-faceted and include a keen enthusiasm for video games, as well as an avid curiosity about their conceptual and structural foundations.
          Furthermore, music holds a special place in my heart, with a rich history of playing the guitar for over 15 years. For the past seven years, I have channeled my passion for music into producing and creating compositions.
        </div>
      </div>
    </PageContainer>
  );
}

export default About;