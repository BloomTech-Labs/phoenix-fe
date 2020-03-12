import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import Calendar from './components/Calendar/Calendar'
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import CalendarSearch from './components/Calendar/CalendarSearch'
function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])
  return (
    <div className="App">
      <header className="App-header">
        {/* <CalendarSearch /> */}
        <Calendar />
        {/* <Router>
          <Switch>
            <Route path="/one" > </Route>
            <Route path="/two" > </Route>
          </Switch>
        </Router> */}
      
      </header>
    </div>
  );
}

export default App;
