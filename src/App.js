import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/nav';
import './App.css';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* Redirect any access to /my_portfolio to / */}
        <Route path="/my_portfolio" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
