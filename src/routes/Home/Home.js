import React from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from './images/first.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'
import fifth from './images/5.jpg'
import sixth from './images/6.jpg'


function Home() {
 return (
  <>
<Carousel showIndicators showArrows infiniteLoop
  useKeyboardArrows  autoPlay>
        <img  src={first}  alt="1"/>
        <img  src={second} alt="2"/>
        <img src={third} alt="3"/>
        <img src={fourth} alt="4"/>
        <img src={fifth} alt="5"/>
        <img src={sixth} alt="6"/>
 </Carousel>
 </>
   )
}

export default Home
