import { createLogic } from 'redux-logic';

import { client } from '../redux';

import { createLiveSuccess, createLiveError } from './actions';
import { CREATE_LIVE } from './constants';

const createLiveLogic = createLogic({
  type: CREATE_LIVE,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const currentUser = getState().users.currentUser;

    client
      .mutate({
        mutation: createLiveMutation,
        variables: {
          ...action,
          createdById: currentUser.id,
        },
      })
      .then((result) => {
        dispatch(createLiveSuccess(result.data.createLive));
      })
      .catch((err) => {
        dispatch(createLiveError(err));
      })
      .then(() => done());
  },
});

export default [createLiveLogic];
