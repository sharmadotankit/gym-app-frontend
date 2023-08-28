import React, {useContext, useEffect, useState} from 'react';
import MuscleCard from "../../comp/MuscleCard/MuscleCard";
import './Exercise.scss';
import {
    fetchBodyParts,
} from '../../utils/actions/apiActions';
import {useNavigate} from "react-router-dom";
import { ExerciseContext } from '../../context/exercise.context';


function Exercise(props) {
    const [bodyParts,setBodyParts] = useState([]);
    const navigate = useNavigate();
    const {setSelectedMuscle} = useContext(ExerciseContext);

    useEffect(()=>{
        async function fetchBodyPart(){
            const response = await fetchBodyParts();
            setBodyParts(response);
        }
        fetchBodyPart();
    },[]);

    const handleMuscleCardClick = (item) =>{
        setSelectedMuscle(item);
        navigate(`/exercise-list/${item}`);
    }

    return (
        <div className='exercise-main-container'>
            <h1>Let us begin with the muscle you want to train today :</h1>
            {bodyParts.length==0?
                    <div style={{height:'100vh'}}>
                        <h1>Loading....</h1>
                    </div>
                    :
                    <div className='exercise-container'>
                        {
                            bodyParts.map((item,i)=>{
                                return <span onClick={()=>handleMuscleCardClick(item)} key={i}><MuscleCard name={item} /></span>
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Exercise;