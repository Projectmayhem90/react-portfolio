// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/containers/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/about" element={<About />}></Route> */}
      <Route path="/work" element={<Work />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/" element={<About />} />
      </Routes>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;