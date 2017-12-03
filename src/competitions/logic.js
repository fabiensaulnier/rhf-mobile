import { createLogic } from 'redux-logic';

import { client } from '../redux';
import { createEventMutation } from './queries';

import { CREATE_EVENT } from './constants';
import { createEventSuccess, createEventError } from './actions';

const createEventLogic = createLogic({
  type: CREATE_EVENT,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const event = getState().events.createForm.values;
    const currentUser = getState().users.currentUser;

    client
      .mutate({
        mutation: createEventMutation,
        variables: {
          ...event,
          start: action.start,
          end: action.end,
          createdById: currentUser.id,
        },
      })
      .then((result) => {
        dispatch(createEventSuccess(result.data.createEvent));
      })
      .catch((err) => {
        dispatch(createEventError(err));
      })
      .then(() => done());
  },
});

export default [createEventLogic];
