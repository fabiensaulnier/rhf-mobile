/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import OpenScreenActions from '../Redux/OpenScreenRedux'
import firebase from '../Services/Firebase'

export function * signUp (action) {
  const { data } = action

  console.log(data)

  try {
    const auth = firebase.auth();
    const user = yield call([auth, auth.createUserWithEmailAndPassword], data.email, data.password);
    yield put(LoginActions.signUpSuccess(user));
    yield put(OpenScreenActions.openScreen("launchScreen"));

  } catch (error) {
    yield put(LoginActions.signUpFailure());
  }
}
