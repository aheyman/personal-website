import { combineReducers } from 'redux';
import { navReducer } from './navReducer';
import { homeReducer } from './homeReducer';

export const rootReducer = combineReducers({
  navigation: navReducer,
  home: homeReducer,
});

export default rootReducer;
