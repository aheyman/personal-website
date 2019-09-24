import * as msg from '../constants/action-types';

// eslint-disable-next-line
export const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case msg.HOME_SPIN: {
      return {
        ...state,
        spin: action.payload,
      };
    }
    default:
      return state;
  }
};
