import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
} from './constants';

import { USER_READY } from '../core/constants';

const initialState = {
  currentUser: null,
  isLoggedIn: true,
  loginForm: {
    error: false,
    loading: false,
    success: false,
  },
  registerForm: {
    error: false,
    loading: false,
    success: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_READY:
      return { ...state, currentUser: action.user };
    case REGISTER:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        registerForm: {
          ...state.registerForm,
          error: false,
          success: true,
          loading: false,
        },
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          error: action.error,
          success: false,
          loading: false,
        },
      };
    case LOGIN:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        loginForm: {
          ...state.loginForm,
          error: false,
          success: true,
          loading: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          error: action.error,
          success: false,
          loading: false,
        },
      };
    case LOGOUT:
      return {
        ...state,
        initialState,
      };
    default:
      return state;
  }
};

export default reducer;
