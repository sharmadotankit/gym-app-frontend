import React from 'react'
import "../Home/Home.css"
import first from '../Home/images/first.jpg'
import second from '../Home/images/2.jpg'
import third from '../Home/images/3.jpg'
import fourth from '../Home/images/4.jpg'
import fifth from '../Home/images/5.jpg'
import sixth from '../Home/images/6.jpg'



function Home() {
  return (

    <div id="myCarousel"  className="carousel slide carousel-dark" data-ride="carousel" data-interval="100">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1" ></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
      </ol>

      <div className="carousel-inner">

        <div className="item active"  data-interval="100">
          <img src={first} alt="Los Angeles" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item"  data-interval="100">
          <img src={second} alt="Chicago" style={{ width: "100%", height: "100vh" }} />

        </div>

        <div className="item"  data-interval="100">
          <img src={third} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item"  data-interval="100">
          <img src={fourth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item"  data-interval="100">
          <img src={fifth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item"  data-interval="100">
          <img src={sixth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true">Prev</span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true">Next</span>
        <span class="sr-only">Next</span>
      </button>
     
    </div>



  )
}

export default Home
