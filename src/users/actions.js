import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './constants';

export const register = user => ({
  type: REGISTER,
  user,
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user,
});

export const registerError = error => ({
  type: REGISTER_ERROR,
  error,
});

export const login = user => ({
  type: LOGIN,
  user,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = error => ({
  type: LOGOUT_ERROR,
  error,
});
