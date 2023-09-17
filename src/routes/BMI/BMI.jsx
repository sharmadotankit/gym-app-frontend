import React, { useContext, useState } from 'react';
import BMIImage from './BMI.png';
import axios from 'axios';
import {UserContext} from "../../context/user.context";

const BMI = ()=> {
    const {currentUser} = useContext(UserContext);
    const [height,setHeight] = useState(currentUser?.height);
    const [weight,setWeight] = useState(currentUser?.weight);
    const [isBMICalculated,setIsBMICalculated] = useState(false);
    const [bmiValue,setBmiValue] = useState(null);
    

    const handleCalculateBMI = async()=>{
        try{
            setIsBMICalculated(true);
            let bmiValue = weight/(height*height);
            setBmiValue(bmiValue);
        }catch(err){
            setIsBMICalculated(false);
        }
    }

  return (
       <div className='profile-main-container'>
            <h1>BMI Calculator</h1>
            <div className='profile-card'>
                <label htmlFor='height'>Enter Height:</label><br/>
                <input 
                    type="number" 
                    value={height}  
                    placeholder='Enter height in meter'
                    onChange={(e)=> setHeight(e.target.value)}
                />
                <br/>

                <label htmlFor='weight'>Weight:</label><br/>
                <input 
                    type="number" 
                    value={weight}
                    placeholder='Enter weight in kg'
                    onChange={(e)=> setWeight(e.target.value) }
                />
                <br/>


                
                <button className='primay-button' onClick={handleCalculateBMI}> Calculate BMI</button>
                {(isBMICalculated && bmiValue)?
                    <>
                        <h3>Your BMI is</h3>
                        <h1>{Number(bmiValue).toFixed(2)}</h1>
                        <img  src={BMIImage} height="350px" style={{width:'100%'}}/>
                    </>
                    :
                    <></>
                }
            </div>
            
        </div>
 
  )
}

export default BMI
