import React, { useEffect } from 'react';
import './App.css';
import ReactGa from 'react-ga';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Routes from './components/routes.js';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-158783725-1');

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <Navbar />
      {Routes}
      <Footer />
    </div>
  );
}

export default App;
