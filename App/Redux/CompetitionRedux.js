import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchClassementRequest: ['data'],
  fetchClassementSuccess: ['payload'],
  fetchClassementFailure: null,
  fetchMatchsRequest: ['data'],
  fetchMatchsSuccess: ['payload'],
  fetchMatchsFailure: null,
  fetchStatistiquesRequest: ['data'],
  fetchStatistiquesSuccess: ['payload'],
  fetchStatistiquesFailure: null
})

export const CompetitionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const fetchClassementRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const fetchClassementSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const fetchClassementFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })


// request the data from an api
export const fetchMatchsRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const fetchMatchsSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const fetchMatchsFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })


// request the data from an api
export const fetchStatistiquesRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const fetchStatistiquesSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const fetchStatistiquesFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_CLASSEMENT_REQUEST]: fetchClassementRequest,
  [Types.FETCH_CLASSEMENT_SUCCESS]: fetchClassementSuccess,
  [Types.FETCH_CLASSEMENT_FAILLURE]: fetchClassementFailure,
  [Types.FETCH_MATCHS_REQUEST]: fetchMatchsRequest,
  [Types.FETCH_MATCHS_SUCCESS]: fetchMatchsSuccess,
  [Types.FETCH_MATCHS_FAILLURE]: fetchMatchsFailure,
  [Types.FETCH_STATISTIQUES_REQUEST]: fetchStatistiquesRequest,
  [Types.FETCH_STATISTIQUES_SUCCESS]: fetchStatistiquesSuccess,
  [Types.FETCH_STATISTIQUES_FAILLURE]: fetchStatistiquesFailure
})
