import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import MeetTeam from './components/MeetTeam';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Industries />
        <Products />
        <AboutUs />
        <MeetTeam />
        <Blogs />
        <ContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
