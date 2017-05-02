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

import { call, put, select } from 'redux-saga/effects'
import ScreenActions from '../Redux/ScreenRedux'
import firebase from '../Services/Firebase'

export const getUser = (state) => state.account.current

// process STARTUP actions
export function * startup (action) {
  const user = yield select(getUser);
  const auth = firebase.auth()

  if (auth.authenticated) {
    yield put(ScreenActions.openScreen('home'))
  } else {
    yield put(ScreenActions.openScreen('login'))
  }
  yield put(ScreenActions.closeSplash())
}
