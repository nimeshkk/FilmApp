/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';
import appConstants from '../appConstants/appConstants.json';


const FETCH_USERS = 'FETCH_USERS';

const FETCH_USERS_REQUEST = `${FETCH_USERS}_REQUEST`;
const FETCH_USERS_SUCCESS = `${FETCH_USERS}_SUCCESS`;
const FETCH_USERS_FAILURE = `${FETCH_USERS}_FAILURE`;


const initialState = {
  loading: false,
  loginResponse: {},
  error: '',
};


const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error.message,
});



const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: axios.post('https://localhost:57928/api/Users/login?useCookies=false&useSessionCookies=false',
  {
    "email": "administrator@localhost",
    "password": "Administrator1!",
    "twoFactorCode": "",
    "twoFactorRecoveryCode": ""
  },

  )
    .then(response => {
      console.log(response);

      return response.data;

    })

    .catch(error => {
      console.error(error.message);
      // throw error.message;
    }),
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        userList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


const store = createStore(reducer, applyMiddleware(promiseMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

export default store;






