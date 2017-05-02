import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { LiveTypes } from '../Redux/LiveRedux'
import { LoginTypes } from '../Redux/LoginRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { openScreen } from './OpenScreenSagas'
import { createLive, getLives } from './LiveSagas'
import { signUp } from './LoginSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(LiveTypes.CREATE_LIVE_REQUEST, createLive),
    takeLatest(LiveTypes.GET_LIVES_REQUEST, getLives),
    takeLatest(LoginTypes.SIGN_UP_REQUEST, signUp)
  ]
}
