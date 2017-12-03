import { CREATE_LIVE, CREATE_LIVE_SUCCESS, CREATE_LIVE_ERROR } from './constants';

export const createPoll = () => ({
  type: CREATE_LIVE,
});

export const createPollSuccess = () => ({
  type: CREATE_LIVE_SUCCESS,
});

export const createPollError = error => ({
  type: CREATE_LIVE_ERROR,
  error,
});
