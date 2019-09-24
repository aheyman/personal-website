import * as msg from '../constants/action-types';

export const menuAction = payload => ({
  type: msg.MENU_SELECT,
  payload,
});

export const spinMe = payload => ({
  type: msg.HOME_SPIN,
  payload,
});
