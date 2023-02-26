import React from 'react';
import "../App/App.css"
import Navbar from '../routes/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../routes/Home/Home';
import Signup from '../routes/Auth/Signup';
import Login from "../routes/Auth/Login";
import Dashboard from "../routes/Dashboard/Dashboard";
import "../common.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";



function App() {
  return (
    <div className="app">
        <ToastContainer/>
     <Router>
      <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/user-dashboard" element={<Dashboard/>}/>
              <Route path="/home" element={<Home/>}/>
          </Route>
        </Routes>
     </Router>
   
    </div>
  );
}

export default App;
