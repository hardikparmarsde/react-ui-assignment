import React from 'react';
import logo from './logo.svg';
import './assets/scss/app.scss';
import Home from './pages/home/home';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
