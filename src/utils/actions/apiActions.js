import axios from 'axios';

let API_KEY = process.env.React_APP_API_NINJA_KEY



export const fetchMuscleList =  (data)=>{
    console.log("API KEY",API_KEY)
    return new Promise(async (resolve,reject)=>{
        try{
            var muscle = 'biceps';
            let options = {
                url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
                headers: {
                    'X-Api-Key': process.env.React_APP_API_NINJA_KEY
                },
            }

            let response = await axios.request(options);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}