import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Story from './pages/Story/Story';
import Menu from './pages/Menu/Menu';
import BookTable from './pages/BookTable/Booktable';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import { useState, useEffect } from 'react';
import Catering from './pages/Catering/Catering';

const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
    },2500);
  },[])

  return (
    <Router>
      <div>
        
        <Navbar />
        <div className="content">
          {loading ? (
            <Preloader /> 
          ) : (
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/our-story" element={<Story />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/book-a-table' element={<BookTable />} />
              <Route path='/catering' element={<Catering />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
