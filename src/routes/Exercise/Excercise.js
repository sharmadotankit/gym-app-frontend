import React, {useEffect} from 'react';
import {
    fetchMuscleList
} from '../../utils/actions/apiActions'

function Exercise(props) {
    useEffect(()=>{

        async function fetchMuscle(){
            const response = await fetchMuscleList();
            console.log("Resposne",response)
        }

        fetchMuscle();

    },[]);

    return (
        <div>I am exercise</div>
    );
}

export default Exercise;