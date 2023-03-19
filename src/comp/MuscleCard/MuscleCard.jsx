import React from 'react';
import './MuscleCard.scss';

function MuscleCard(props) {
    const {name} = props;

    return (
        <div className='card-container-muscle' >
            <h3>{name}</h3>
        </div>
    );
}

export default MuscleCard;