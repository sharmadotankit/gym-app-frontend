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
import getStartedImg from '../../assets/home-get-started.jpg';
import {useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();
    const handleExerciseClick = () =>{
        navigate('/exercise');
    }

    const features = [
        { title: 'Seize Your Progress: Save Exercises to Your Profile', description: `Your fitness journey is a personal adventure, and now, we're making it even more convenient and personalized with our new "Save to Profile" feature` },
        { title: 'Elevate Your Workout Experience with Visual Guidance', description: `Are you ready to take your fitness journey to the next level? We're excited to introduce our brand new GIF Tutorial Feature` },
        { title: 'Discover Your Healthier Self: BMI Calculator Feature', description: `Your journey to a healthier you begins with knowledge, and that's why we're thrilled to introduce the BMI Calculator Feature` },
        { title: 'Unlock Limitless Workouts: Elevate Your Fitness with Premium Membership!', description: 'Are you ready to take your fitness journey to the next level? Introducing the [Gym App Name] Premium Membership, your gateway to an exclusive world of unlimited exercises and unparalleled results!🚀🏆' },
        { title: 'Train Smarter: Choose Your Focus with Body Part Selection!', description: `Your fitness journey should be as unique as you are, and that's why we're thrilled to introduce the Body Part Selection feature! 🏋️‍♀️🎯` },
      ];

 return (
  <div className='home-container'>
        <div className="title">
            <Carousel 
                showIndicators 
                showArrows 
                infiniteLoop
                useKeyboardArrows  
                autoPlay
            >
                <img  src={first}  alt="1"/>
                <img  src={second} alt="2"/>
                <img src={third} alt="3"/>
                <img src={fourth} alt="4"/>
                <img src={fifth} alt="5"/>
                <img src={sixth} alt="6"/>
            </Carousel>
    </div> 
    <div className='home-body'>
        <h1>Welcome to the Gym Training Application.</h1>
        <div className="feature-list-container">
            <div className="features">
                {features.map((feature, index) => (

                <div className={`feature ${index % 2 === 1 ? 'right-feature' : 'left-feature'}`} key={index} >
                    {index % 2?
                        <>
                        <div>
                        </div>
                        <div className='feature-value'>
                            <span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </span>
                        </div>
                        
                        </>
                        :
                        <>
                        <div className='feature-value'>
                            <span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </span>
                        </div>
                        <div>
                        </div>
                        </>
                    }
                    
                    
                </div>
                ))}
            </div>
        </div>

        <div className='get-start-div'>
            <img src={getStartedImg}  className='get-started-img'/>
            <div className='content'>
                <h1> Start you fitness now!!</h1>
                <button onClick={handleExerciseClick} className='get-started-button'>Get Started</button>
            </div>
        </div>  
    </div>


          
 </div>
   )
}

export default Home
