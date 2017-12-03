import {
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_ERROR,
  CREATE_VOTE,
  CREATE_VOTE_SUCCESS,
  CREATE_VOTE_ERROR,
} from './constants';

export const createPoll = values => ({
  type: CREATE_POLL,
  values,
});

export const createPollSuccess = () => ({
  type: CREATE_POLL_SUCCESS,
});

export const createPollError = error => ({
  type: CREATE_POLL_ERROR,
  error,
});

export const createVote = values => ({
  type: CREATE_VOTE,
  values,
});

export const createVoteSuccess = () => ({
  type: CREATE_VOTE_SUCCESS,
});

export const createVoteError = error => ({
  type: CREATE_VOTE_ERROR,
  error,
});
