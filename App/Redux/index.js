import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as formReducer } from 'redux-form'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    startup: require('./StartupRedux').reducer,
    live: require('./LiveRedux').reducer,
    account: require('./AccountRedux').reducer,
    form: formReducer
  })

  return configureStore(rootReducer, rootSaga)
}
