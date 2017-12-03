import { CREATE_EVENT, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR } from './constants';

export const createEvent = () => ({
  type: CREATE_EVENT,
});

export const createEventSuccess = () => ({
  type: CREATE_EVENT_SUCCESS,
});

export const createEventError = error => ({
  type: CREATE_EVENT_ERROR,
  error,
});
