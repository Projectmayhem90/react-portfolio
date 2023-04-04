// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routers, Route } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/work">Work</a>
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

        <Routers>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Work />
          </Route>
        </Routers>
      </div>
    </BrowserRouter>
  );
}

export default App;