import * as msg from '../constants/action-types';

// eslint-disable-next-line
export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case msg.MENU_SELECT: {
      return {
        ...state,
        activePage: action.payload,
      };
    }
    default:
      return state;
  }
};
