import {createContext, useState} from "react";

export const ExerciseContext = createContext({
    selectedExercise:null,
    setSelectedExercise: ()=>null,
    selectedMuscle:null,
    setSelectedMuscle:()=> null,
});

export const ExerciseProvider = ({children}) =>{
    const [selectedExercise,setSelectedExercise] = useState(null);
    const [selectedMuscle,setSelectedMuscle] = useState(null);
    const value = {selectedExercise,setSelectedExercise,selectedMuscle,setSelectedMuscle}
    return <ExerciseContext.Provider value={value}>{children}</ExerciseContext.Provider>
}