import { CREATE_COMPETITION, CREATE_COMPETITION_SUCCESS, CREATE_COMPETITION_ERROR } from './constants';

const initialState = {
  createForm: {
    error: false,
    loading: false,
    success: false,
    values: {
      location: {
        error: false,
        address: null,
        postalCode: null,
      },
      start: null,
      end: null,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMPETITION:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          error: false,
          success: false,
          loading: true,
        },
      };
    case CREATE_COMPETITION_SUCCESS:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          lastSubmitted: {
            location: state.createForm.values.location,
            start: state.createForm.values.start,
            end: state.createForm.values.end,
          },
          error: false,
          success: true,
          loading: false,
        },
      };
    case CREATE_COMPETITION_ERROR:
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
