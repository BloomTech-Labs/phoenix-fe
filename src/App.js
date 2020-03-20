import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import Calendar from './components/Cal2/Calen';




function App() {

  useEffect(() => {
   ReactGa.initialize('UA-158783725-1')

  ReactGa.pageview(window.location.pathname + window.location.search)
//pathway to connect the routes and search
}, [])
  return (
    <div className="App">
      
        
      {/* <i class="fab fa-facebook"></i>  */}
        <div class="calendar-rectangle">
  <div id="calendar-content" class="calendar-content">
  <Calendar />
  </div>
  <div>
  <i class="fab fa-facebook"></i> 
  </div>
</div>
      
      
    </div>
  );
}

export default App;
