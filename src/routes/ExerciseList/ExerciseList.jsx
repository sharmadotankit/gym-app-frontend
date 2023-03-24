import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchExerciseByBodyParts} from '../../utils/actions/apiActions';
import ExerciseCard from "../../comp/ExerciseCard/ExerciseCard";
import exerciseData from './data.json';
import './ExerciseList.scss';

function ExerciseList(props) {
    let { muscleName } = useParams();
    const [exercisesForSelectedMuscle,setExercisesForSelectedMuscles]= useState([]);


    useEffect( ()=>{
        const fetchExerciseData = async()=>{
                // let itemResponse = await fetchExerciseByBodyParts(muscleName);
                // setExercisesForSelectedMuscles(itemResponse.data);
                setExercisesForSelectedMuscles(exerciseData)
        }
        fetchExerciseData();
    },[])

    return (
        <div>
            {exercisesForSelectedMuscle.length==0?
            <>
                Loading...
            </>:
            <div className='exercise-list-div'>
                <h1>Exercises for {muscleName}:-</h1>
                <span className='exercise-card-span'>
                { 
                    exercisesForSelectedMuscle.map((item,i)=>{
                            return <ExerciseCard item={item} key={i}/> 
                        })
                }
                </span>
            </div>
            }
        </div>
    );
}

export default ExerciseList;