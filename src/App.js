import React from 'react';
import { Brand, Navbar, CardLinks, Footer, Header } from './components';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import  Home  from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Header />
      <CardLinks />
      <Brand />
      <Footer />
      
    </Router>
  )
};

export default App;