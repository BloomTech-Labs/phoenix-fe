import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar.js';
import Footer from './components/Landing/Footer.js';
import Routes from './components/Routes/Routes.js';



function App() {

  return (
    <div className="App">

      <Navbar />
       <Routes /> 
      <Footer />
    </div>
  );
}

export default App;
