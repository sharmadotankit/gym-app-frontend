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
    }

    return (
      <React.Fragment>
        <nav className="navigation">
            <Link to='/' className='logo-container'>
                <img src={FfLogo} alt='logo-img' className={`logo`}/>
            </Link>

            <div className='app-title'>
                <h1>Fitness Freak</h1>
            </div>

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