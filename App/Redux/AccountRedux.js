import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signUpRequest: ['data'],
  signUpSuccess: ['payload'],
  signUpFailure: null,
  signInRequest: ['data'],
  signInSuccess: ['payload'],
  signInFailure: null
})

export const AccountTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  current: null,
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// SIGN UP
// request the data from an api
export const signUpRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const signUpSuccess = (state, action) =>
  state.merge({ fetching: false, error: null })

// Something went wrong somewhere.
export const signUpFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// SIGN IN
export const signInRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const signInSuccess = (state, action) =>
  state.merge({ fetching: false, error: null})

// Something went wrong somewhere.
export const signInFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure
})
