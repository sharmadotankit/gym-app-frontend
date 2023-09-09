import axios from 'axios';



const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const signUp =  (data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(`${backendUrl}/api/auth/create-user`,data);
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
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}

export const handleForgotPassword = async(data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(`${backendUrl}/api/auth/forgot-password`,data);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}

export const resetPasswordForUser = async(data)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(`${backendUrl}/api/auth/reset-password`,data);
            resolve(response.data);
        }catch(err){
            reject(err);
        }
    });
}