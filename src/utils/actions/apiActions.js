import axios from 'axios';

// let API_KEY = process.env.React_APP_API_NINJA_KEY
// let API_KEY = process.env.REACT_APP_RAPID_API_ALAZY_HYPOCRITE;
let API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const baseUrl = 'https://exercisedb.p.rapidapi.com';


export const fetchBodyParts =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{

            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                headers: {
                  'X-RapidAPI-Key': API_KEY,
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
              };

            let response = await axios.request(options);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}

// fetchByBodyParts

export const fetchExerciseByBodyParts =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            data = data.replace(" ","%20")
            const options = {
                method: 'GET',
                url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${data}`,
                headers: {
                  'X-RapidAPI-Key': API_KEY,
                  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
              };

            let response = await axios.request(options);
            resolve(response);
        }catch(err){
            reject(err);
        }
    });
}
