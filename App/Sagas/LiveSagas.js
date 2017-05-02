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
import LiveActions from '../Redux/LiveRedux'
import ScreenActions from '../Redux/ScreenRedux'
import firebase from '../Services/Firebase'
import LiveConfig from '../Config/LiveConfig'

export function * createLive (action) {
  const { data } = action

  try {
    const ref = firebase.database().ref('lives').push();
    const item = yield call([ref, ref.set], {
      teamHome: data.teamHome,
      teamAway: data.teamAway,
      level: data.level,
      status: LiveConfig.status.INIT,
      date: data.date,
      user: '',
      events: []
    });
    yield put(LiveActions.createLiveSuccess(item));
    yield put(ScreenActions.openScreen("home"));

  } catch (error) {
    yield put(LiveActions.createLiveFailure());
  }
}

export function * getLives (action) {
  const { data } = action

  try {
    const ref = firebase.database().ref('lives');
    const items = yield call([ref, ref.once], 'value');
    yield put(LiveActions.getLivesSuccess(items.val()));
  }
  catch (error) {
    yield put(LiveActions.getLivesFailure());
  }
}
