import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
    login, 
    handleForgotPassword,
    resetPasswordForUser,
   } from "../../utils/actions/authActions";
import { UserContext } from "../../context/user.context";
import { toast } from "react-toastify";
import loginBackground from "../../assets/login_page-img.png";

const Login = () => {
  const navigate = useNavigate();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
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

  const handleForgotPasswordSubmitClick = async () => {
    try {
      setError("");
      const { email } = userData;

      if (
        !email ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        setError("Enter a valid email");
        return;
      }

      const response = await handleForgotPassword({ email });
      console.log(response);

      if (response.status) {
        setIsResetPassword(true);
        setIsForgotPassword(false);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err?.response?.data?.message || "Something went wrong.");
    }
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
          isPremium: response?.data?.isPremium,
        });

        localStorage.setItem("name", response?.data?.name);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("_id", response?.data?._id);
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("height", response?.data?.height);
        localStorage.setItem("weight", response?.data?.weight);
        localStorage.setItem("isPremium", response?.data?.isPremium?"true":'');

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



  const handleOnResetPassword =async () => {
    try {
      const { password, confirmPassword, otp,email } = userData;

      if (!password) {
        setError("Password is required");
        return;
      }

      if (!confirmPassword) {
        setError("Confirm Password is required");
        return;
      }

      if (password != confirmPassword) {
        setError("Password and Confirm Password are not same.");
        return;
      }

      if (
        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
      ) {
        setError("Enter a valid password");
        return;
      }

      if (!otp) {
        setError("Otp is required");
        return;
      }

      if (isNaN(otp) || otp.length <= 3 || otp.length >= 5) {
        setError("Enter a valid otp.");
        return;
      }

      let data={
        password,
        confirmPassword,
        email,
        otp,
      }
      const resetPasswordResponse = await resetPasswordForUser(data);

      console.log(resetPasswordResponse)
      if(resetPasswordResponse.status){
        toast.success(resetPasswordResponse.message);
        setUserData({
          email:'',
          password:'',
          confirmPassword:'',
          otp:'',
        });
        setIsForgotPassword(false);
        setIsResetPassword(false);
      }

      setError("");
    } catch (err) {
      console.log(err)
      setError("");
      toast.error(err.message || "Something went wrong");
    }
  };
  const onKeyDown = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      e.preventDefault();
      handleOnLogin();
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
            {isForgotPassword ? (
              <>
                <h1 className="signup-heading">Forgot Password</h1>
                <p className="signup-heading">
                  Please enter email to recover your account.
                </p>
              </>
            ) : (
              <>
                {isResetPassword ? (
                  <>
                    <h1 className="signup-heading">Reset Password</h1>
                    <p className="signup-heading">
                      Please enter password and otp to reset your password.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="signup-heading">Login</h1>
                    <p className="signup-heading">
                      Please fill in this form to login to your account.
                    </p>
                  </>
                )}
              </>
            )}

            {!isResetPassword ? (
              <>
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={userData.email}
                  id="email"
                  onChange={handleUserInfoChange}
                  onKeyDown={onKeyDown}
                />
              </>
            ) : (
              <></>
            )}

            {isForgotPassword ? (
              <></>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>
                    <label htmlFor="psw-repeat">
                      <b>Password</b>
                    </label>
                  </span>
                  {!isResetPassword ? (
                    <>
                      <span
                        style={{ color: "#F4D160", cursor: "pointer" }}
                        onClick={() =>{
                                        setUserData({
                                          email:'',
                                          password:'',
                                          confirmPassword:'',
                                          otp:'',
                                        });
                                        setIsForgotPassword(true)
                                      }
                                }
                      >
                        Forgot Password?
                      </span>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="psw-repeat"
                  value={userData.password}
                  onChange={handleUserInfoChange}
                  onKeyDown={onKeyDown}
                />

                {isResetPassword ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span>
                        <label htmlFor="psw-repeat">
                          <b>Confirm Password</b>
                        </label>
                      </span>
                    </div>

                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="confirmPassword"
                      id="confirm-psw-repeat"
                      value={userData.confirmPassword}
                      onChange={handleUserInfoChange}
                      onKeyDown={onKeyDown}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >

                      <span>
                        <label htmlFor="psw-repeat">
                          <b>Otp</b>
                        </label>
                      </span>

                      <span
                        style={{ color: "#F4D160", cursor: "pointer" }}
                        onClick={handleForgotPasswordSubmitClick}
                      >
                        Resend Otp
                      </span>
                    </div>

                    <input
                      type="password"
                      placeholder="Enter Otp"
                      name="otp"
                      id="confirm-psw-repeat"
                      value={userData.otp}
                      onChange={handleUserInfoChange}
                      onKeyDown={onKeyDown}
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            )}

            {error && error === "Enter a valid password" ? (
              <div style={{ color: "red", fontSize: "14px" }}>
                <p>Password must be : </p>
                <li>at least 8 character long</li>
                <li>at least 1 symbol</li>
                <li>at least 1 lower case</li>
                <li>at least 1 upper case</li>
              </div>
            ) : null}

            {isForgotPassword ? (
              <>
                <button
                  type="submit"
                  className="registerbtn"
                  onClick={handleForgotPasswordSubmitClick}
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                {isResetPassword ? (
                  <>
                    <button
                      type="submit"
                      className="registerbtn"
                      onClick={handleOnResetPassword}
                    >
                      Reset Password
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="registerbtn"
                      onClick={handleOnLogin}
                    >
                      Login
                    </button>
                  </>
                )}
              </>
            )}

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
