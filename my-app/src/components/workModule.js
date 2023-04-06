import React from 'react';
import classes from './Work.module.css';

function WorkModule() {
    return (
      <section className={classes.workModule}>
        <div className={classes.workExample}>
          <img src={require('../images/pokedexmin.png')} alt="PKmini" />
          <h2>PokedexMini</h2>
          <p>A pokemon mini that works with multiple Api's to show evolution, if avaliable in Pokemon Go, among other things</p>
        </div>
        <div className={classes.workExample}>
          <img src="" alt="Example 2" />
          <h2>Example 2</h2>
          <p>Description of Example 2</p>
        </div>
        <div className={classes.workExample}>
          <img src='' alt="Example 3" />
          <h2>Example 3</h2>
          <p>Description of Example 3</p>
        </div>
        <div className={classes.workExample}>
          <img src='' alt="Example 4" />
          <h2>Example 4</h2>
          <p>Description of Example 4</p>
        </div>
      </section>
    );
  }

export default WorkModule;