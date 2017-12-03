import { CREATE_LIVE, CREATE_LIVE_SUCCESS, CREATE_LIVE_ERROR } from './constants';

const initialState = {
  createForm: {
    error: false,
    loading: false,
    success: false,
    values: {
      questions: [],
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIVE:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case CREATE_LIVE_SUCCESS:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          error: false,
          success: true,
          loading: false,
        },
      };
    case CREATE_LIVE_ERROR:
      return {
        ...state,
        createForm: {
          ...state.createForm,
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
