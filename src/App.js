import React from 'react';
import { Footer, Blog, Features, Header  } from './containers';
import { Brand, Navbar, CardLinks } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div>
          <Navbar />
          <Header />
          <CardLinks />
        </div>
        <Brand />
        <Features />
        <Blog />
        <Footer />
    </div>
  )
};

export default App;