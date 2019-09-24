import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import store from './store';

const palette = {
  primary: { main: '#004D40', contrastText: '#FFFDE7' },
  secondary: { main: '#69655a' },
  type: 'dark',
};

const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

const themeName = 'Aqua Deep Kabul Guinea Fowl';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme({ typography, palette, themeName })}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
