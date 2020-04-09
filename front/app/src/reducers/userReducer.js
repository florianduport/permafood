import {
  LOGIN_STARTED,
  LOGIN_SUCCESS
} from '../actions/types';

const initState = {
  loading: false,
  isConnected : false,
  login: {
    username:"johndoe@test.com",
    password: "test123",
    error: ""
  }
};

export default function userReducer( state = initState, action) {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        isConnected: false,
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
    default:
      return state;
  }
}
