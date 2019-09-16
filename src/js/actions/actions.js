import axios from 'axios';
import * as msg from '../constants/action-types';

export const menuAction = payload => ({
  type: msg.MENU_SELECT,
  payload,
});
