import { CREATE_POLL, CREATE_POLL_SUCCESS, CREATE_POLL_ERROR } from './constants';

export const createPoll = () => ({
  type: CREATE_POLL,
});

export const createPollSuccess = () => ({
  type: CREATE_POLL_SUCCESS,
});

export const createPollError = error => ({
  type: CREATE_POLL_ERROR,
  error,
});
