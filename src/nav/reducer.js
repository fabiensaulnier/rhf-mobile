import { NavigationActions } from 'react-navigation';

import AppNavigator from '../navigator';
import { USER_READY } from '../core/constants';
import { CREATE_EVENT_SUCCESS } from '../events/constants';
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../users/constants';
import { CREATE_POLL_SUCCESS, CREATE_VOTE_SUCCESS } from '../polls/constants';

const reducer = (state, action) => {
  let nextState;

  switch (action.type) {
    case USER_READY:
      if (action.user) {
        nextState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
      } else {
        nextState = AppNavigator.router.getStateForAction(action, state);
      }
      break;
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case CREATE_VOTE_SUCCESS:
    case CREATE_EVENT_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'drawerStack' })],
        }),
        state,
      );
      break;
    case LOGOUT_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default reducer;
