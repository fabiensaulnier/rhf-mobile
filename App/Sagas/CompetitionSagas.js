import { call, put } from 'redux-saga/effects'
import CompetitionActions from '../Redux/CompetitionRedux'

export function * fetchClassement (api, action) {
  const { data } = action
  const response = yield call(api.getClassement, data)
  if (response.ok) {
    yield put(CompetitionActions.fetchClassementSuccess(response.data))
  } else {
    yield put(CompetitionActions.fetchClassementFailure())
  }
}

export function * fetchMatchs (api, action) {
  const { data } = action
  const response = yield call(api.getMatchs, data)
  if (response.ok) {
    yield put(CompetitionActions.fetchMatchsSuccess(response.data))
  } else {
    yield put(CompetitionActions.fetchMatchsFailure())
  }
}

export function * fetchStatistiques(api, action) {
  const { data } = action
  const response = yield call(api.getMatchs, data)
  if (response.ok) {
    yield put(CompetitionActions.fetchStatistiquesSuccess(response.data))
  } else {
    yield put(CompetitionActions.fetchStatistiquesFailure())
  }
}
