import React from 'react'
import Navbar from './comp/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './comp/Home/Home';


function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Router>
      <Routes>
        <Route exact path="" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
