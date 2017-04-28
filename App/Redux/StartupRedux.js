import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  goOnline: null,
  goOffline: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  onlineList: [],
  offlineList: [],
  connectionChecked: false
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const goOnline = (state, action) =>
  state.merge({ connectionChecked: true, connected: true })

// request the temperature for a city
export const goOffline = (state, action) =>
  state.merge({ connectionChecked: true, connected: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.goOnline]: goOnline,
  [Types.goOffline]: goOffline
})
