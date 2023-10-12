// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/containers/Footer';
import Resume from './pages/Resume';
import './App.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <BrowserRouter basename='/react-portfolio'>
    <Routes>
      {/* <Route path="/about" element={<About />}></Route> */}
      <Route path="/work" element={<Work />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/" element={<About />} />
      <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;