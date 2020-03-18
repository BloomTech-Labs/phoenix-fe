import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import Navbar from "./components/Navbar.js";
import Terms from "./components/Terms.js";
import LandingPage from './components/LandingPage.js';

function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])
  return (
    <div className="App">
        <Navbar />
        <LandingPage />    
        <Terms /> 
    </div>
  );
}

export default App;
