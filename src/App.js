import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import Navbar from "./components/Navbar.js"

function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <Navbar /> 
      </header>
    </div>
  );
}

export default App;
