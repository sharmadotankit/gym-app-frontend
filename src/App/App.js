import React from 'react';
import "../App/App.css"
import Navbar from '../routes/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../routes/Home/Home';
import Signup from '../routes/Auth/Signup';
import Login from "../routes/Auth/Login";
import Dashboard from "../routes/Dashboard/Dashboard";
import Profile from "../routes/Profile/Profile";
import "../common.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import Exercise from "../routes/Exercise/Excercise";
import ProtectedRoute from "../routes/ProtectedRoute";
import Favourite from "../routes/Favourite/Favourite";
import Saved from "../routes/Saved/Saved";
import GetStarted from "../routes/GetStarted/GetStarted";
import ExerciseList from "../routes/ExerciseList/ExerciseList";
import ExerciseDescription from '../routes/ExerciseDescription/ExerciseDescription';
import BMI from '../routes/BMI/BMI';



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
              <Route path="/user-dashboard"  element = {<ProtectedRoute/>} >
                  <Route path="/user-dashboard" element={<Dashboard/>}>
                      <Route index element={<Profile/>}/>
                      <Route path="/user-dashboard/profile" element={<Profile/>} />
                      <Route path="/user-dashboard/favourite" element={<Favourite/>} />
                      <Route path="/user-dashboard/saved" element={<Saved/>} />
                      <Route path="/user-dashboard/bmi-calculator" element={<BMI/>} />       
                  </Route>
              </Route>
              <Route path="/home" element={<Home/>}/>
              <Route path="/exercise"  element = {<ProtectedRoute/>}>
                <Route path="/exercise" element={<Exercise/>} />
              </Route>

              <Route path="/exercise-list/:muscleName"  element = {<ProtectedRoute/>}>
                  <Route path="/exercise-list/:muscleName" element={<ExerciseList/>} />
              </Route>

              <Route path="/exercise-description/:exerciseName"  element = {<ProtectedRoute/>}>
                  <Route path="/exercise-description/:exerciseName" element={<ExerciseDescription/>} />
              </Route>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
