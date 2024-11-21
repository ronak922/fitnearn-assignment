import React from 'react';
import LandingPage from './components/LandingPage';
import Cards from './components/Cards';
import Coach from './components/Coach';
import Features from './components/Features';
import Today from './components/Today';
import Works from './components/Works';
import Say from './components/Say';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <LandingPage />
      <Cards />
      <Coach/>
      <Features/>
      <Today/>
      <Works/>
      <Say/>
      <Footer></Footer>
    </div>
  );
}

export default App;
