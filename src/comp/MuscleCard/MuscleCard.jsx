import React from 'react';
import './MuscleCard.scss';
import waistImage from '../../assets/abs-wrokout.jpg';
import backImage from '../../assets/back.jpg';
import cardioImage from '../../assets/cardio-two.jpg';
import chestImage from '../../assets/chest_workout.jpg';
import lowerArmImage from '../../assets/tricep.jpg';
import lowerLegImage from '../../assets/legs.jpg';
import neckImage from '../../assets/back-two.jpg';
import shoulderImage from '../../assets/shoulder.jpg';
import upperArmsImage from '../../assets/upper_arms.jpg';
import upperLegsImage from '../../assets/upper_legs.jpg';


function MuscleCard(props) {
    const {name} = props;

    let selectedImage = '';
    switch(name){
        case 'back' :   selectedImage = backImage;
                        break;
        case 'cardio' : selectedImage = cardioImage;
                        break;
        case 'chest' :   selectedImage = chestImage;
                        break;
        case 'lower arms' :   selectedImage = lowerArmImage;
                        break;
        case 'lower legs' :   selectedImage = lowerLegImage;
                        break;
        case 'neck' :   selectedImage = neckImage;
                        break;
        case 'shoulders' :   selectedImage = shoulderImage;
                        break;
        case 'upper arms' :   selectedImage = upperArmsImage;
                        break;
        case 'upper legs' :   selectedImage = upperLegsImage;
                        break;
        case 'waist' :   selectedImage = waistImage;
                        break;
        default : selectedImage = shoulderImage;
    }

    return (
        <div className='card-container-muscle' >
            <img src={selectedImage} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}

export default MuscleCard;