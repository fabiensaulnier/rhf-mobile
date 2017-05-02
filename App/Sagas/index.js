import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ScreenTypes } from '../Redux/ScreenRedux'
import { LiveTypes } from '../Redux/LiveRedux'
import { AccountTypes } from '../Redux/AccountRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { openScreen, closeSplash } from './ScreenSagas'
import { createLive, getLives } from './LiveSagas'
import { signUp, signIn } from './AccountSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(ScreenTypes.CLOSE_SPLASH, closeSplash),
    takeLatest(LiveTypes.CREATE_LIVE_REQUEST, createLive),
    takeLatest(LiveTypes.GET_LIVES_REQUEST, getLives),
    takeLatest(AccountTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AccountTypes.SIGN_IN_REQUEST, signIn)
  ]
}
