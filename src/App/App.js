import React from 'react';
import "../App/App.css"
import Navbar from '../comp/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../comp/Home/Home';
import Footer from '../comp/Footer/Footer';



function App() {
  return (
    <div className="app">
     <Navbar/> 
     <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
     </Router>
    <Footer/>
    </div>
  );
}

export default App;
