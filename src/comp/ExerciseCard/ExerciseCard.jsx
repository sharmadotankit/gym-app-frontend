import React, { useContext } from "react";
import "./ExerciseCard.scss";
import { useNavigate } from "react-router-dom";
import { ExerciseContext } from "../../context/exercise.context";

function ExerciseCard({ item }) {
  const { name, target, gifUrl, bodyPart, equipment } = item;
  const navigate = useNavigate();
  const { setSelectedExercise } = useContext(ExerciseContext);
  const handleExerciseDescription = () => {
    setSelectedExercise(item);
    navigate(`/exercise-description/${name}`);
  };

  return (
    <div
      className="exercise-name-card-container"
      onClick={handleExerciseDescription}
    >
      <div>
        <img src={gifUrl} alt="exercise-gif" height="80px" />
      </div>
      <div className="exercise-name-div">
        <h3>{name.toString().toUpperCase()}</h3>
        <p>Click to View Tutorial!!</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
