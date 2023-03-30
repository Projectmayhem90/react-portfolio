import React from 'react';

function Work() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="project">
        <h2>Project 1</h2>
        <img src={require('./img/project1.png')} alt="Project 1" />
        <p>PH</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h2>Project 2</h2>
        <img src={require('./img/project2.png')} alt="Project 2" />
        <p>PH</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h2>Project 3</h2>
        <img src={require('./img/project3.png')} alt="Project 3" />
        <p>PH</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h2>Project 4</h2>
        <img src={require('./img/project4.png')} alt="Project 4" />
        <p>PH</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
}

export default Work;