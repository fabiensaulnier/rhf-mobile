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
import database from '../Services/Firebase'

export function * createLive (action) {
  const { data } = action

  database.ref('lives').push().set({
    team_home: '',
    team_away: '',
    level: '',
    status: '',
    date: '',
    hours: '',
    user: '',
    events: []
  })
}

export function * getLives (action) {
  const { data } = action

  try {
    const ref = database.ref('lives');
    const items = yield call([ref, ref.once], 'value');
    yield put(LiveActions.getLivesSuccess(items.val()));
  }
  catch (error) {
    yield put(LiveActions.getLivesFailure());
  }
}