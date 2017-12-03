import Expo from 'expo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import core from './core';
import nav from './nav';
import competitions from './competitions';
import lives from './lives';
import users from './users';

// LOGIC
const deps = {};

const logicMiddleware = createLogicMiddleware(
  [...nav.logic, ...competitions.logic, ...lives.logic, ...users.logic],
  deps,
);

// STORE CODE

export const store = createStore(
  combineReducers({
    core: core.reducer,
    competitions: competitions.reducer,
    lives: lives.reducer,
    users: users.reducer,
    nav: nav.reducer,
  }),
  {}, // initial state
  compose(applyMiddleware(logicMiddleware)),
);
