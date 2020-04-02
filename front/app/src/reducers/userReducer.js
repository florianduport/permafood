import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/types';

const initState = {
  loading: false,
  isConnected : false,
  login: {
    username:"",
    password: ""
  },
  error: null
};

export default function userReducer( state = initState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isConnected : true,
        login: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
