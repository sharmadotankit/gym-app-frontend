import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">FiTnEsS FrEaK</Link>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/portfolio">portfolio</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/signup">Signup</Link></li>

          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar
