import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../../utils/actions/authActions";
import { UserContext } from "../../context/user.context";
import { toast } from "react-toastify";
import loginBackground from "../../assets/login_page-img.png";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { setCurrentUser } = useContext(UserContext);
  let { state } = useLocation();

  let pathAfterLogin = state?.pathAfterLogin;
  if (pathAfterLogin) {
    localStorage.setItem("pathAfterLogin", JSON.stringify(pathAfterLogin));
  }

  const [error, setError] = useState("");
  const handleUserInfoChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOnLogin = async () => {
    try {
    setError("");
    const { email, password } = userData;
    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setError("Enter a valid email");
      return;
    }

    if (!password) {
      setError("Enter a valid password");
      return;
    }

   
      let response = await login(userData);
      if (response.status) {
        setCurrentUser({
          name: response?.data?.name,
          email: response?.data?.email,
          token: response?.data?.token,
          id: response?.data?._id,
          isLoggedIn: true,
          height: response?.data?.height,
          weight: response?.data?.weight,
        });

        localStorage.setItem("name", response?.data?.name);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("_id", response?.data?._id);
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("height", response?.data?.height);
        localStorage.setItem("weight", response?.data?.weight);

        let pathToRedirect = JSON.parse(localStorage.getItem("pathAfterLogin"));
        if (pathAfterLogin) {
          let pathName = pathToRedirect.pathname;
          navigate(pathName);
          return;
        }
        toast.success("User login successful");
        navigate("/user-dashboard");
      } 
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="signUpDiv">
        <div className="div-left">
          <h1>Results, not promises.</h1>
          <img src={loginBackground} />
          <h1>Power, perseverance, and discipline</h1>
        </div>
        <div className="div-right">
          <div className="container-signup">
            <h1 className="signup-heading">Login</h1>
            <p className="signup-heading">
              Please fill in this form to login to your account.
            </p>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
              onChange={handleUserInfoChange}
            />

            <label htmlFor="psw-repeat">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="psw-repeat"
              onChange={handleUserInfoChange}
            />
            <button
              type="submit"
              className="registerbtn"
              onClick={handleOnLogin}
            >
              Login
            </button>

            <div className="">
              <p>
                Do not have an account?{" "}
                <Link to="/signup" className="button-link">
                  Register
                </Link>
                .
              </p>
              {error ? (
                <h4 style={{ color: "red", marginTop: "20px" }}>{error}</h4>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
