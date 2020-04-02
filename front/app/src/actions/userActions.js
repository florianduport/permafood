import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types';
import axios from 'axios';

function validateEmail(email) {
  return email !== undefined && email.length > 0;
}

function validatePassword(password) {
  return password !== undefined && password.length > 0
}

const validate = (username, password) => {
  return validateEmail(username) && validatePassword(password);
}

//export const login = ({username, password}) => {
export const loginAction = (login) => {

  return (dispatch, getState) => {
    dispatch(loginStarted());

    if(validate(login.username, login.password)){
      axios
       .post(`/users/authenticate`,
      {
         username : login.username,
         password : login.password
       })
       .then(res => {
         dispatch(loginSuccess(res.data));
       })
       .catch(err => {
         dispatch(loginFailure(err.message));
       });
    } else {
      dispatch(loginFailure("YO"));
    }
  }
}

const loginStarted = () => ({
  type: LOGIN_STARTED
});

const loginSuccess = todo => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...todo
  }
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error
  }
});
