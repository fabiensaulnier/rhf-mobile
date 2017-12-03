import { APP_ERROR, ASSETS_READY, USER_READY } from './constants';

export const assetsReady = () => ({
  type: ASSETS_READY,
});

export const userReady = user => ({
  type: USER_READY,
  user,
});

export const appError = () => ({
  type: APP_ERROR,
});
