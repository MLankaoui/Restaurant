import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Story from './pages/Story/Story';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/our-story' element={<Story />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
