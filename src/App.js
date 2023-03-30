// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './pages/Home';
import About from './pages/About';
import Portfolio from './components/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Work />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;