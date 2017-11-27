import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as formReducer } from 'redux-form'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    account: require('./AccountRedux').reducer,
    competition: require('./CompetitionRedux').reducer,
    live: require('./LiveRedux').reducer,
    startup: require('./StartupRedux').reducer,
    form: formReducer
  })

  return configureStore(rootReducer, rootSaga)
}
