import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import doubleUpImage from "../../assets/double-up.svg";
import doubleDownImage from "../../assets/double-down.svg";

const Sidebar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
  return (
    <div>
      <div className="sidebar">
        <div className="profile-picture">
          <img
            src={`https://robohash.org/${currentUser?.name}`}
            alt={"profile-pic"}
          />
          <h1>{currentUser?.name}</h1>
        </div>
        <div className="list-options">
          <Link to="/exercise">
            <li>Start Exercise</li>
          </Link>
          <Link to="/user-dashboard/profile">
            <li>Edit profile</li>
          </Link>
          <Link to="/user-dashboard/bmi-calculator">
            <li>Calculate BMI</li>
          </Link>
          <Link to="/user-dashboard/saved">
            <li>Saved </li>
          </Link>
          <Link to="/" onClick={handleLogout}>
            <li>Logout</li>
          </Link>
        </div>
      </div>

      {isSideBarOpen ? (
        <>
          <div className="smallSideBar">
            <div className="profile-picture">
              <img
                src={`https://robohash.org/${currentUser?.name}`}
                alt={"profile-pic"}
              />
              <h1>{currentUser?.name}</h1>
            </div>
            <div className="list-options">
              <Link to="/exercise">
                <li>Start Exercise</li>
              </Link>
              <Link to="/user-dashboard/profile">
                <li>Edit profile</li>
              </Link>
              <Link to="/user-dashboard/bmi-calculator">
                <li>Calculate BMI</li>
              </Link>
              <Link to="/user-dashboard/saved">
                <li>Saved </li>
              </Link>
              <Link to="/" onClick={handleLogout}>
                <li>Logout</li>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="right-drawer-button">
        <img
          src={isSideBarOpen ? doubleUpImage : doubleDownImage}
          height={"40px"}
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        />
      </div>
    </div>
  );
};
export default Sidebar;
