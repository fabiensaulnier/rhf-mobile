import { createLogic } from 'redux-logic';

import { client } from '../redux';

import { CREATE_COMPETITION } from './constants';
import { createCompetitionSuccess, createCompetitionError } from './actions';

const createCompetitionLogic = createLogic({
  type: CREATE_COMPETITION,
  latest: true,
  process({ getState, action }, dispatch, done) {
    const event = getState().events.createForm.values;
    const currentUser = getState().users.currentUser;

    client
      .mutate({
        mutation: 'createCompetitionMutation',
        variables: {
          ...event,
          start: action.start,
          end: action.end,
          createdById: currentUser.id,
        },
      })
      .then((result) => {
        dispatch(createCompetitionSuccess(result.data.createCompetition));
      })
      .catch((err) => {
        dispatch(createCompetitionError(err));
      })
      .then(() => done());
  },
});

export default [createCompetitionLogic];
