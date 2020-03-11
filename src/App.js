import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import LandingPage from './components/LandingPage.js'



function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])
  return (
    <div className="App">
      <header className="App-header">

        {/* <Router>
          <Switch>
            <Route path="/one" > </Route>
            <Route path="/two" > </Route>
          </Switch>
        </Router> */}
        {/* <Navbar />  */}
        <LandingPage/>
      </header>
    </div>
  );
}

export default App;
