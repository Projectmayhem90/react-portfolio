// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import DownloadComponent from './pages/Resume.js'
import Footer from './components/containers/Footer';
import './App.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/about" element={<About />}></Route> */}
        <Route path="/portfolio" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<About />} />
        <Route path="/JoshuaOBrienRS.pdf.pdf" element={<DownloadComponent />}></Route>
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;
