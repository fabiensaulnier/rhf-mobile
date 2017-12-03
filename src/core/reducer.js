import { APP_ERROR, ASSETS_READY, USER_READY, FONTS_READY } from './constants';

const initialState = {
  isUserReady: false,
  hasError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSETS_READY:
      return { ...state, isAssetsReady: true, hasError: false };
    case FONTS_READY:
      return { ...state, isFontsReady: true, hasError: false };
    case USER_READY:
      return { ...state, isUserReady: true, hasError: false };
    case APP_ERROR:
      return { ...state, hasError: true };
    default:
      return state;
  }
};

export default reducer;
