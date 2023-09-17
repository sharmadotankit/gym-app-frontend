import axios from 'axios';
const backendUrl = process.env.REACT_APP_API_ENDPOINT;

export const saveExerciseToProfile = async (token, payload) => {
    try {
      let header = {
        'Authorization': `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json'
      }
      let res = await axios.post(`${backendUrl}/comman/save-exercise-to-profile`, payload, { headers: header }).then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
      return res;
    } catch (error) {
      return error;
    }
  };

  export const updateUserInformation = async (token, payload) => {
    try {
      let header = {
        'Authorization': `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json'
      }
      
      let res = await axios.post(`${backendUrl}/comman/update-user-information`, payload, { headers: header }).then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
      return res;
    } catch (error) {
      return error;
    }
  };

  export const fetchSavedExercise = async (token, payload) => {
    try {
      let header = {
        'Authorization': `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json'
      }

      let res = await axios.get(`${backendUrl}/comman/fetch-saved-exercise/${payload}`, { headers: header }).then((res) => {
        return res;
      }).catch((err) => {
        return err;
      });
      return res;
    } catch (error) {
      return error;
    }
  };



  export const createCheckoutSession = (token,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        let header = {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json",
        };
        let response = await axios.post(`${backendUrl}/create-checkout-session`,{data:data}, {
          headers: header,
        });
        return resolve(response.data);
      } catch (err) {
        return reject(err);
      }
    });
  };

  export const getUserData = async (token, id) => {
    try {
      let header = {
        'Authorization': `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'application/json'
      }

      let res = await axios.get(`${backendUrl}/get-user-data/${id}`, { headers: header }).then((res) => {
        return res.data;
      }).catch((err) => {
        return err;
      });
      return res;
    } catch (error) {
      return error;
    }
  };


  export const connectToServer = () =>{
    return new Promise(async (resolve,reject)=>{
      try{
          let response = await axios.get(`${backendUrl}/comman/connect-to-server`);
          resolve(response.data);
      }catch(err){
          reject(err);
      }
  });
  }