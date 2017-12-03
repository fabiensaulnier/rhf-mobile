import { CREATE_COMPETITION, CREATE_COMPETITION_SUCCESS, CREATE_COMPETITION_ERROR } from './constants';

export const createEvent = () => ({
  type: CREATE_COMPETITION,
});

export const createEventSuccess = () => ({
  type: CREATE_COMPETITION_SUCCESS,
});

export const createEventError = error => ({
  type: CREATE_COMPETITION_ERROR,
  error,
});
