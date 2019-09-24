import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './js/reducers/rootReducer';

// eslint-disable-next-line
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  navigation: {
    activePage: 'HOME',
  },
  home: {
    spin: false,
  },
};

const store = createStore(rootReducer, initialState, storeEnhancers(applyMiddleware(thunk)));

export default store;
