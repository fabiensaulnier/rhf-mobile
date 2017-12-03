import {
  CREATE_POLL,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_ERROR,
  CREATE_VOTE,
  CREATE_VOTE_SUCCESS,
  CREATE_VOTE_ERROR,
} from './constants';

const initialState = {
  createPollForm: {
    error: false,
    loading: false,
    success: false,
    values: {
      questions: [],
    },
  },
  createVoteForm: {
    error: false,
    loading: false,
    success: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POLL:
      return {
        ...state,
        createPollForm: {
          ...state.createPollForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case CREATE_POLL_SUCCESS:
      return {
        ...state,
        createPollForm: {
          ...state.createPollForm,
          error: false,
          success: true,
          loading: false,
        },
      };
    case CREATE_POLL_ERROR:
      return {
        ...state,
        createPollForm: {
          ...state.createPollForm,
          error: action.error,
          success: false,
          loading: false,
        },
      };
    case CREATE_VOTE:
      return {
        ...state,
        createVoteForm: {
          ...state.createVoteForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case CREATE_VOTE_SUCCESS:
      return {
        ...state,
        createVoteForm: {
          ...state.createVoteForm,
          error: false,
          success: true,
          loading: false,
        },
      };
    case CREATE_VOTE_ERROR:
      return {
        ...state,
        createVoteForm: {
          ...state.createVoteForm,
          error: action.error,
          success: false,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
