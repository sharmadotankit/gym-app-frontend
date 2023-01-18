import React from 'react'
import "../Home/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from '../Home/images/first.jpg'
import second from '../Home/images/2.jpg'
import third from '../Home/images/3.jpg'
import fourth from '../Home/images/4.jpg'
import fifth from '../Home/images/5.jpg'
import sixth from '../Home/images/6.jpg'



function Home() {
 

  return (
<>
    
  <Carousel showIndicators showArrows infiniteLoop
  useKeyboardArrows  >
      
      
       <div>
        <img  src={first}  alt="1"/>
        <p className='legend'># BE THE BEST VERSION OF YOU!!!!
        <button className='btn'>Join the cult</button>
        </p>
        
        </div>
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
