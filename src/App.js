import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGa from 'react-ga';

function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview('/')
}, [])
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
    </div>
  );
}

export default App;
