import React from 'react';
import './ExerciseCard.scss';

function ExerciseCard({item}) {
    const {name,target,gifUrl,bodyPart,equipment} = item;

    console.log(name,target,gifUrl,bodyPart,equipment)


    return (
        <div className='card-container'>
                <h3>{name}</h3>
                <img src={gifUrl} height="300px" width='90%'/>
                <button>Start</button>
        </div>
    );
}
 
export default ExerciseCard;