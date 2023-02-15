import axios from 'axios';



const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const signUp =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(`${backendUrl}/api/auth/create-user`,data);
            console.log("Response of create user", response);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}

export const login =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(`${backendUrl}/api/auth/login`,data);
            console.log("Response of create user", response);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}