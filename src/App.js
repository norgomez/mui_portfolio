import React from 'react';
import { Brand, Navbar, CardLinks, Footer, Header } from './components';
import { BrowserRouter, Route  } from 'react-router-dom';
import  Home  from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        
          <Navbar>
            <Route path="/home" element={<Home />} />
          </Navbar>
        
        <Header />
        <CardLinks />
        

        
        <Brand />
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;