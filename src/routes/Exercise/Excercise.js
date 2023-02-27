import React, {useEffect, useState} from 'react';
import ExerciseCard from "../../comp/ExerciseCard/ExerciseCard";
import './Exercise.scss';
import {
    fetchMuscleList
} from '../../utils/actions/apiActions'

function Exercise(props) {

    const [muscleList,setMuscleList] = useState([]);

    useEffect(()=>{

        async function fetchMuscle(){
            const response = await fetchMuscleList();
            setMuscleList(response.results);
        }
        fetchMuscle();

    },[]);

    return (
        <div className='exercise-main-container'>
            <h1>Let us begin with the muscle you want to train today :</h1>
            {muscleList.length==0?
                    <>
                        <h1>Loading....</h1>
                    </>
                    :
                    <div className='exercise-container'>
                        {
                            muscleList.map((item)=>{
                                if(item?.name_en?.length>0){
                                    return <ExerciseCard name={item.name_en} imageUrlMain={item.image_url_main} imageUrlSecondary={item.image_url_secondary} isFront = {item.is_front}/>
                                }

                            })
                        }
                    </div>
            }
        </div>
    );
}

export default Exercise;