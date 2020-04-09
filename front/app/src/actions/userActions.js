import axios from 'axios';
import { SubmissionError } from 'redux-form'
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS
} from './types';


function validateEmail(email) {
  return email !== undefined && email.length > 0;
}

function validatePassword(password) {
  return password !== undefined && password.length > 0
}

const validate = (username, password) => {
  return validateEmail(username) && validatePassword(password);
}

export const loginAction = (login) => {

  return (dispatch, getState) => {

    dispatch(loginStarted());

    if(validate(login.username, login.password)){
      return axios
       .post(`/users/authenticate`,
      {
         username : login.username,
         password : login.password,
         deviceId : 1
       })
       .then(res => {
         console.log(res.data)
         if(!res.data.success){
           return Promise.reject(new SubmissionError({
             _error: "Nom d'utilisateur ou mot de passe incorrect"
          }));
         } else {
           dispatch(loginSuccess(res.data));
         }
       })
       .catch(err => {
         return Promise.reject(new SubmissionError({
           _error: "Nom d'utilisateur ou mot de passe incorrect"
        }));
       });
    } else {
      return Promise.reject(new SubmissionError({
        _error: "Nom d'utilisateur ou mot de passe incorrect"
      }));
    }
  }
}

const loginStarted = () => ({
  type: LOGIN_STARTED
});

const loginSuccess = successMessage => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...successMessage
  }
});
