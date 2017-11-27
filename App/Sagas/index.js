import { takeLatest } from 'redux-saga/effects'
import RhfApi from '../Services/RhfApi'

/* ------------- Types ------------- */

import { AccountTypes } from '../Redux/AccountRedux'
import { CompetitionTypes } from '../Redux/CompetitionRedux'
import { LiveTypes } from '../Redux/LiveRedux'
import { ScreenTypes } from '../Redux/ScreenRedux'
import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */

import { signUp, signIn } from './AccountSagas'
import { fetchClassement, fetchMatchs, fetchStatistiques } from './CompetitionSagas'
import { createLive, getLives } from './LiveSagas'
import { openScreen, closeSplash } from './ScreenSagas'
import { startup } from './StartupSagas'

/* ------------- API ------------- */

const RHF_API = RhfApi.create()


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(AccountTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AccountTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(CompetitionTypes.FETCH_CLASSEMENT_REQUEST, fetchClassement, RHF_API),
    takeLatest(CompetitionTypes.FETCH_MATCHS_REQUEST, fetchMatchs, RHF_API),
    takeLatest(CompetitionTypes.FETCH_STATISTIQUES_REQUEST, fetchStatistiques, RHF_API),
    takeLatest(LiveTypes.CREATE_LIVE_REQUEST, createLive),
    takeLatest(LiveTypes.GET_LIVES_REQUEST, getLives),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(ScreenTypes.CLOSE_SPLASH, closeSplash)
  ]
}
