import React from 'react';
import { Footer, Blog, Features, Header  } from './containers';
import { Brand, Navbar, CardLinks } from './components';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
          <div>
            <Navbar />
            <Header />
            <CardLinks />
          </div>
          
          <Brand />
          <Features />
          <Blog />
          <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;