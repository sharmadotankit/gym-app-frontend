import React, { useState } from 'react';
import BMIImage from './BMI.png';
import axios from 'axios';

const BMI = ()=> {
    const [height,setHeight] = useState(null);
    const [weight,setWeight] = useState(null);
    const [isBMICalculated,setIsBMICalculated] = useState(false);
    const [bmiValue,setBmiValue] = useState(null);

    const handleCalculateBMI = async()=>{
        try{
            setIsBMICalculated(true);
            const options = {
                method: 'GET',
                url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
                params: {
                  weight: weight,
                  height: height,
                },
                headers: {
                  'X-RapidAPI-Key': 'ac47eef329msh54ec2add5a33035p19f962jsn2d32703ad640',
                  'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
                }
            };
            const response = await axios.request(options);
	        console.log(response.data);
            setBmiValue(response.data.bmi);
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
            </div>
            {(isBMICalculated && bmiValue)?
                    <>
                        <h3>Your BMI is</h3>
                        <h1>{Number(bmiValue).toFixed(2)}</h1>
                        <img  src={BMIImage} height="350px"/>
                    </>
                    :
                    <></>
                }
        </div>
 
  )
}

export default BMI
