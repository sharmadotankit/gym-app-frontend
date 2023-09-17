import React, { useContext, useEffect, useState } from "react";
import "../App/App.css";
import Navbar from "../routes/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "../routes/Home/Home";
import Signup from "../routes/Auth/Signup";
import Login from "../routes/Auth/Login";
import Dashboard from "../routes/Dashboard/Dashboard";
import Profile from "../routes/Profile/Profile";
import "../common.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Exercise from "../routes/Exercise/Excercise";
import ProtectedRoute from "../routes/ProtectedRoute";
import Favourite from "../routes/Favourite/Favourite";
import Saved from "../routes/Saved/Saved";
import ExerciseList from "../routes/ExerciseList/ExerciseList";
import ExerciseDescription from "../routes/ExerciseDescription/ExerciseDescription";
import BMI from "../routes/BMI/BMI";
import { UserContext } from "../context/user.context";
import jwt_decode from "jwt-decode";
import Payment from "../routes/Payment/Payment";
import PaymentFailed from "../routes/PaymentFailed/PaymentFailed";
import PaymentSuccess from "../routes/PaymentSuccess/PaymentSuccess";
import { connectToServer } from "../utils/actions/allActions";
import ServerConnectingComponent from "../comp/ServerConnectingComponent";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("_id");
  const height = localStorage.getItem("height");
  const weight = localStorage.getItem("weight");
  const isPremium = localStorage.getItem("isPremium");
  const [isServerConnected, setIsServerConnected] = useState(false);

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setCurrentUser({
      name: null,
      email: null,
      token: null,
      id: null,
      isLoggedIn: false,
    });

    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("height", "");
    localStorage.setItem("weight", "");
    localStorage.setItem("isPremium", "");
  };

  useEffect(() => {
    try {
      const connectFunction = async () => {
        const connectionResponse = await connectToServer();
        if (connectionResponse.status) {
          setIsServerConnected(true);
        }
      };

      connectFunction();

      if (!token) {
        handleLogout();
        return;
      } else {
        let decode = jwt_decode(token);
        if (decode.exp * 1000 < Date.now()) {
          handleLogout();
          return;
        }
        if (decode.exp * 1000 - Date.now() < 1800) {
          handleLogout();
          return;
        }
      }

      if (isLoggedIn != "true") {
        handleLogout();
        return;
      }

      setCurrentUser({
        name: name,
        email: email,
        token: token,
        id: id,
        isLoggedIn: true,
        height: height,
        weight: weight,
        isPremium,
      });

      if (
        location.pathname === "/Sustainability-CSR" ||
        location.pathname === "/privacy-policy" ||
        location.pathname === "/terms-of-service" ||
        location.pathname.includes("/view-order-details/")
      ) {
        navigate(location.pathname);
      }
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  return (
    <div className="app">
      {isServerConnected ? (
        <>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Navbar />}>
              {!isLoggedIn ||
                (!token && <Route path="/" element={<Login />}></Route>)}
              <Route index element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user-dashboard" element={<ProtectedRoute />}>
                <Route path="/user-dashboard" element={<Dashboard />}>
                  <Route index element={<Profile />} />
                  <Route path="/user-dashboard/profile" element={<Profile />} />
                  <Route
                    path="/user-dashboard/favourite"
                    element={<Favourite />}
                  />
                  <Route path="/user-dashboard/saved" element={<Saved />} />
                  <Route
                    path="/user-dashboard/bmi-calculator"
                    element={<BMI />}
                  />
                </Route>
              </Route>
              <Route path="/home" element={<Home />} />
              <Route path="/exercise" element={<ProtectedRoute />}>
                <Route path="/exercise" element={<Exercise />} />
              </Route>

              <Route path="/payment-failed" element={<ProtectedRoute />}>
                <Route path="/payment-failed" element={<PaymentFailed />} />
              </Route>

              <Route path="/payment-success/:id" element={<ProtectedRoute />}>
                <Route
                  path="/payment-success/:id"
                  element={<PaymentSuccess />}
                />
              </Route>

              <Route path="/payment" element={<ProtectedRoute />}>
                <Route path="/payment" element={<Payment />} />
              </Route>

              <Route
                path="/exercise-list/:muscleName"
                element={<ProtectedRoute />}
              >
                <Route
                  path="/exercise-list/:muscleName"
                  element={<ExerciseList />}
                />
              </Route>

              <Route
                path="/exercise-description/:exerciseName"
                element={<ProtectedRoute />}
              >
                <Route
                  path="/exercise-description/:exerciseName"
                  element={<ExerciseDescription />}
                />
              </Route>
            </Route>
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<ServerConnectingComponent />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
