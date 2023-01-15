import React from 'react'
import "../Navbar/Navbar.css"

function Navbar() {
  return (

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">FiTnEsS FrEaK</a>
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul class="nav navbar-nav navbar-right">
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
