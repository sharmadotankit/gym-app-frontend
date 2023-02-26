import React from 'react'
import { Link,Outlet } from "react-router-dom";
import FfLogo  from "../../assets/logo.png";
import './Navbar.scss';

function Navbar() {
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
                <Link className='nav-link' to='/signup'>
                    SignUp
                </Link>
                <Link className='nav-link' to='/login'>
                    SignIn
                </Link>

                <Link className='nav-link' to='/login'>
                    SignOut
                </Link>
            </div>
        </nav>
        <Outlet/>
      </React.Fragment>
  )
}
export default Navbar;