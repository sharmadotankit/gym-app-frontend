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