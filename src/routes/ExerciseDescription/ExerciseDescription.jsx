import { ExerciseContext } from "../../context/exercise.context";
import { useContext, useEffect } from "react";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import './ExerciseDescription.scss';
import { UserContext } from "../../context/user.context";
import {saveExerciseToProfile} from '../../utils/actions/allActions'

const ExerciseDescription = () =>{
    const {selectedExercise,selectedMuscle} = useContext(ExerciseContext);
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    let token = localStorage.getItem('Token');

    useEffect(()=>{
        if(!token){
            navigate("/login");
        }else{
            if(selectedExercise==null){
                toast.error("Exercise description not found!");
                navigate('/');
            }
        }
    },[]);


    const handleSaveExercise = async () =>{
        try{
            let data = {
                userId: currentUser.id,
                selectedExercise: JSON.stringify(selectedExercise),
            }
            const response = await saveExerciseToProfile(token, data);
            console.log("response",response)
            if(response.status==200){
                toast.success(response.data.message);
            }else{
                toast.error(response?.response?.data?.message)
            }
        }catch(err){
            console.log("error",err)
        }  
    } 

    const handleNavigateToExerciseList = () =>{
        navigate(-1);
        
    }

    return (<div style={{textAlign:'center',margin:'auto'}}>
            <div className="exercise-description-div">
                <div className="div-left">
                    <img src={selectedExercise?.gifUrl} alt='exercise image' />
                </div>
                
                <div className="description-div">
                    <h1 style={{textDecoration:'underline',fontSize:'50px',color:'black'}}>{  selectedExercise?.name.charAt(0).toUpperCase() + selectedExercise?.name.slice(1) }</h1>
                    <h2>Description : </h2>
                    <p>Body Part : {selectedExercise?.bodyPart.charAt(0).toUpperCase() + selectedExercise?.bodyPart.slice(1)  } </p>
                    {selectedExercise?.equipment?<p>Equipment : { selectedExercise?.equipment.charAt(0).toUpperCase() + selectedExercise?.equipment.slice(1) }</p>:''}
                    {selectedExercise?.target?<p>Target : {selectedExercise?.target.charAt(0).toUpperCase() + selectedExercise?.target.slice(1) }</p>:''}
                    <div className="button-div">
                        <p>Note : To access this exercise from your profile. You can save this exercise.</p>
                        <button className="begin-exercise" onClick={handleSaveExercise}>Save Exercise</button>
                        <button className="begin-exercise" style={{backgroundColor:'#005255'}} onClick={handleNavigateToExerciseList}>Go Back To Exercise List</button>
                    </div>
                </div>
            </div>
            </div>
            );
}

export default ExerciseDescription;