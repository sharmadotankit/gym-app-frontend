import axios from 'axios';

// let API_KEY = process.env.React_APP_API_NINJA_KEY
let API_KEY = process.env.REACT_APP_WGER_API_KEY;

const baseUrl = 'https://wger.de/api/v2/';



export const fetchMuscleList =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let headers = {
                'Accept': 'application/json',
                'Authorization': `Token ${API_KEY}`
            }
            let response = await axios.request(`${baseUrl}/muscle`,headers);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}