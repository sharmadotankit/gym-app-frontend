import { ExerciseContext } from "../../context/exercise.context";
import { useContext, useEffect } from "react";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import './ExerciseDescription.scss';

const ExerciseDescription = () =>{
    const {selectedExercise} = useContext(ExerciseContext);
    const navigate = useNavigate();

    console.log("selected Exercise",selectedExercise)
    useEffect(()=>{
        if(selectedExercise==null){
            toast.error("Exercise description not found!");
            navigate('/');
        }
    },[]);

    return (<div style={{textAlign:'center'}}>
            <h1 style={{textDecoration:'underline',fontSize:'50px'}}>{selectedExercise?.name.toString().toUpperCase()}</h1>
            <div className="exercise-description-div">
                <img src={selectedExercise?.gifUrl} alt='exercise image' />
                <div className="description-div">
                    <h2>Description : </h2>
                    <p>Body Part : {selectedExercise?.bodyPart} </p>
                    {selectedExercise?.equipment?<p>Equipment : {selectedExercise.equipment}</p>:''}
                    {selectedExercise?.target?<p>Target : {selectedExercise.target}</p>:''}
                    <div className="button-div">
                        <button className="begin-exercise">Save Exercise</button>
                        <button className="begin-exercise">Add to Favourite</button>
                    </div>
                </div>

                
            </div>
            </div>
            );
}

export default ExerciseDescription;