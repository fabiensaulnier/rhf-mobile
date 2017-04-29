import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getLivesRequest: ['data'],
  getLivesSuccess: ['payload'],
  getLivesFailure: null,
  createLiveRequest: ['data'],
  createLiveSuccess: ['payload'],
  createLiveFailure: null
})

export const LiveTypes = Types
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
export const getLivesRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const getLivesSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const getLivesFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// request the data from an api
export const createLiveRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const createLiveSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const createLiveFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIVES_REQUEST]: getLivesRequest,
  [Types.GET_LIVES_SUCCESS]: getLivesSuccess,
  [Types.GET_LIVES_FAILURE]: getLivesFailure,
  [Types.CREATE_LIVE_REQUEST]: createLiveRequest,
  [Types.CREATE_LIVE_SUCCESS]: createLiveSuccess,
  [Types.CREATE_LIVE_FAILURE]: createLiveFailure
})
