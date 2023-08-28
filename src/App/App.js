import React, { useContext, useEffect } from 'react';
import "../App/App.css"
import Navbar from '../routes/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import ExerciseList from "../routes/ExerciseList/ExerciseList";
import ExerciseDescription from '../routes/ExerciseDescription/ExerciseDescription';
import BMI from '../routes/BMI/BMI';
import { UserContext } from '../context/user.context';
import jwt_decode from 'jwt-decode';


function App() {
  const isLoggedIn =  localStorage.getItem('isLoggedIn');
  const token =  localStorage.getItem('token');
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("_id");
  const height = localStorage.getItem("height");
  const weight = localStorage.getItem("weight");

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () =>{
    console.log('came here  logout')
    setCurrentUser({
        name:null,
        email:null,
        token:null,
        id:null,
        isLoggedIn:false,
    });

    localStorage.setItem("name","");
    localStorage.setItem("email", "");
    localStorage.setItem("_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("height", "");
    localStorage.setItem("weight", "");
}

  useEffect(()=>{
    if(!token){
      handleLogout();
      return;
    }else{
      let decode = jwt_decode(token);
      if((decode.exp * 1000)<Date.now()){
        handleLogout();
        return;
      }
      if((decode.exp * 1000)-Date.now() < 1800){
        handleLogout();
        return;
      }
    }

    if(isLoggedIn!='true'){
      handleLogout();
      return;
    }

    setCurrentUser({
      name:name,
      email:email,
      token:token,
      id:id,
      isLoggedIn:true,
      height:height,
      weight:weight,
    });


    if(location.pathname=="/Sustainability-CSR" || location.pathname=="/privacy-policy" || location.pathname=="/terms-of-service" || location.pathname.includes('/view-order-details/') ){
      navigate(location.pathname)
    }
  },[])


  return (
    <div className="app">
        <ToastContainer/>
      <Routes>
          <Route path='/' element={<Navbar/>}>
              {!isLoggedIn || !token && <Route path="/" element={<Login />}></Route>}
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
    </div>
  );
}

export default App;
