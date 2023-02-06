import axios from 'axios';



const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const signup = async (data,token)=>{
    return new Promise((resolve,reject)=>{
        try{
            let response = axios.post(`${backendUrl}/api/auth/createUser`,data);
            console.log("Response of create user", response);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}