// Import necessary dependencies
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

// Define the App component
function App() {
  return (
    // Set up the Router and define the routes
    <Router>
      <div className="Portfolio">
        <Navigation />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// Export the App component as the default export
export default App;