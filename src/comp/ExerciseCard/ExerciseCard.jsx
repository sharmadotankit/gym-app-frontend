import React from 'react';
import './ExerciseCard.scss';
import bodyImageFront from '../../assets/body_image.png';
import bodyImageBack from '../../assets/body_image_back.png'

function ExerciseCard(props) {
    const {name,imageUrlMain,imageUrlSecondary,isFront} = props;

    return (
        <div className='card-container'>
            <h3> {name}</h3>
            <img src={isFront?bodyImageFront:bodyImageBack} className='body-image'/>
            <img src={imageUrlMain.length>0?`https://wger.de${imageUrlMain}`:`https://wger.de${imageUrlSecondary}`} className='muscle-image' alt="images"/>
        </div>
    );
}

export default ExerciseCard;