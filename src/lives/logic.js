import { createLogic } from 'redux-logic';

import { client } from '../apollo';
import { createPollMutation } from './queries';

import { createPollSuccess, createPollError } from './actions';
import { CREATE_POLL } from './constants';

const createPollLogic = createLogic({
  type: CREATE_POLL,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const currentUser = getState().users.currentUser;

    client
      .mutate({
        mutation: createPollMutation,
        variables: {
          ...action,
          createdById: currentUser.id,
        },
      })
      .then((result) => {
        dispatch(createPollSuccess(result.data.createPoll));
      })
      .catch((err) => {
        dispatch(createPollError(err));
      })
      .then(() => done());
  },
});

export default [createPollLogic];
