import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import './Saved.scss';
import {fetchSavedExercise} from '../../utils/actions/allActions'
import ExerciseCard from '../../comp/ExerciseCard/ExerciseCard';
import {toast} from 'react-toastify';

function Saved() {
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [savedExercise,setSavedExercise] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(()=>{
        if(!currentUser){
          navigate('/')   
        }else{
            fetchData();
        }
    },[]);

    const fetchData = async() =>{
        const response = await fetchSavedExercise(token,currentUser.id);
        if(response.data.status){
            setSavedExercise(response.data.data);
        }else{
            toast.error("Something went wrong while fetching saved exercise.")
        }
    }
    return (
        <div className='saved-container'>
            <h1>Saved Exercises:-</h1>
             {savedExercise.length==0?
            <>
                No Saved Exercise Found
            </>:
            <div className='exercise-list-div'>
                
                <span className='exercise-card-span'>
                { 
                    savedExercise.map((item,i)=>{
                            return <ExerciseCard item={item} key={i}/> 
                        })
                }
                </span>
            </div>
            }
        </div>
    );
}

export default Saved;