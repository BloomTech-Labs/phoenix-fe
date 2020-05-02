import React, { useEffect } from 'react';
import './App.css';
<<<<<<< HEAD
import ReactGa from 'react-ga';
<<<<<<< HEAD
// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route
// } from "react-router-dom"
import Registration from "./components/Registration"
=======
import Navbar from "./components/Navbar.js";
import Terms from "./components/Terms.js"
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
=======
// import ReactGa from 'react-ga';
import Navbar from './components/Nav/Navbar.js';
import Footer from './components/Landing/Footer.js';
import Routes from './components/Routes/Routes.js';
import MockEvents from './components/MockEvents';
import Panel from './components/Landing/Carosel/Panels'
>>>>>>> 428a25d21eef981c9553d03b6e5dc65829f65ab2

function App() {
  // useEffect(() => {

  //     ReactGa.initialize('UA-158783725-1');
  //     ReactGa.pageview(window.location.pathname + window.location.search);

<<<<<<< HEAD
  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
      <Registration /> 
        {/* <Router>
          <Switch>
            <Route path="/one" > </Route>
            <Route path="/two" > </Route>
          </Switch>
        </Router> */}
        
=======
        <Navbar />         
>>>>>>> 0b2637594c8bb4f41ea4f57df82491515d511140
      </header>
      <div>
        <Terms /> 
      </div>
=======
  // }, []);
  return (
    <div className="App">

      <Navbar />
       <Routes /> 
      <Footer />
>>>>>>> 428a25d21eef981c9553d03b6e5dc65829f65ab2
    </div>
  );
}

export default App;
