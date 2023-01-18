import React from 'react'
import "../Navbar/Navbar.css"

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
          <a className="navbar-brand" href="/">FiTnEsS FrEaK</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <li><a href="/">Home</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">portfolio</a></li>
            <li><a href="/">services</a></li>
            <li><a href="/">contact</a></li>

          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar
