import { AsyncStorage } from 'react-native';
import { createLogic } from 'redux-logic';

import firebase from '../firebase'
import { LOGIN, LOGOUT, REGISTER } from './constants';

import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
} from './actions';

const loginLogic = createLogic({
  type: LOGIN,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const { email, password } = action.user;
      const auth = firebase.auth();

      await auth.signInWithEmailAndPassword(email, password);

      console.log('oii')

      // await AsyncStorage.setItem('token', user.token);

      dispatch(loginSuccess());
    } catch (error) {
      dispatch(loginError(error));
    }

    done();
  },
});

const registerLogic = createLogic({
  type: REGISTER,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    try {
      const auth = firebase.auth();
      await auth.createUserWithEmailAndPassword(action.email, action.password);

      // await AsyncStorage.setItem('token', user.token);

      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerError(error));
    }

    done();
  },
});

const logoutLogic = createLogic({
  type: LOGOUT,
  latest: true,
  async process({ getState, action }, dispatch, done) {
    try {
      await AsyncStorage.clear();

      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(logoutError(error));
    }

    done();
  },
});

export default [registerLogic, loginLogic, logoutLogic];