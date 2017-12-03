import { createLogic } from 'redux-logic';

import { client } from '../apollo';
import { createPollMutation, createVoteMutation } from './queries';

import { createPollSuccess, createPollError, createVoteSuccess, createVoteError } from './actions';
import { CREATE_POLL, CREATE_VOTE } from './constants';

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

const createVoteLogic = createLogic({
  type: CREATE_VOTE,
  latest: true,
  process({ getState, action }, dispatch, done) {
    client
      .mutate({
        mutation: createVoteMutation,
        variables: {
          ...action.values,
        },
      })
      .then((result) => {
        dispatch(createVoteSuccess(result.data.createVote));
      })
      .catch((err) => {
        dispatch(createVoteError(err));
      })
      .then(() => done());
  },
});

export default [createPollLogic, createVoteLogic];
