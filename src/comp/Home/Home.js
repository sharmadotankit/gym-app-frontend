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

    <div id="myCarousel" className="carousel slide carousel-dark" data-ride="carousel ">

      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">

        <div className="item active">
          <img src={first} alt="Los Angeles" style={{ width: "100%", height: "100vh" }} />

        </div>

        <div className="item">
          <img src={second} alt="Chicago" style={{ width: "100%", height: "100vh" }} />

        </div>

        <div className="item">
          <img src={third} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item">
          <img src={fourth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item">
          <img src={fifth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>

        <div className="item">
          <img src={sixth} alt="New York" style={{ width: "100%", height: "100vh" }} />
        </div>
      </div>
      <a className="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
    </div>



  )
}

export default Home
