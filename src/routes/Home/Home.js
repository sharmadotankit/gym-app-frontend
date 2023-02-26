import React from 'react'
import "./Home.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import first from './images/first.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'
import fourth from './images/4.jpg'
import fifth from './images/5.jpg'
import sixth from './images/6.jpg'
import sideBarPhoto from '../../assets/Fitness Freak Side Moto.png'
import {useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();
    const handleExerciseClick = () =>{
        navigate('/exercise');
    }

 return (
  <div className='home-container'>
      <div className="title">
          <button onClick={handleExerciseClick} className='get-started-button'>Get Started</button>
          <img src={sideBarPhoto} alt='sideBar' />
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
      </div>
 </div>
   )
}

export default Home
