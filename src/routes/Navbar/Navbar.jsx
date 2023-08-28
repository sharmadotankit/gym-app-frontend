import React,{useContext} from 'react'
import { Link,Outlet } from "react-router-dom";
import FfLogo  from "../../assets/logo.png";
import './Navbar.scss';
import {UserContext} from "../../context/user.context";

function Navbar() {
    const {currentUser,setCurrentUser} = useContext(UserContext);

    const handleLogout = () =>{
        setCurrentUser({
            name:null,
            email:null,
            token:null,
            id:null,
            isLoggedIn:false,
        })
        localStorage.setItem("name","");
        localStorage.setItem("email", "");
        localStorage.setItem("_id", "");
        localStorage.setItem("token", "");
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("height", "");
        localStorage.setItem("weight", "");
    }


    return (
      <React.Fragment>
        <nav className="navigation">
            <Link to='/' className='app-title'>
                <h1>Fitness Freak</h1>
            </Link>
            <div className="nav-links-container">
                {currentUser?.isLoggedIn?
                    <>
                        <Link className='nav-link' to='/user-dashboard' >
                            Dashboard
                        </Link>
                        <Link className='nav-link' to='/' onClick={handleLogout}>
                            SignOut
                        </Link>
                    </>
                    :
                    <>
                        <Link className='nav-link' to='/signup'>
                            SignUp
                        </Link>
                        <Link className='nav-link' to='/login'>
                            SignIn
                        </Link>
                    </>
                }
            </div>
        </nav>
        <Outlet/>
      </React.Fragment>
    )
}
export default Navbar;