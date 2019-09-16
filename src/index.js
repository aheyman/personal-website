import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, amber, red } from '@material-ui/core/colors';
import App from './App';
import store from './store';

const muiTheme = createMuiTheme({
  palette: {
    primary: grey,
    accent: amber,
    error: red,
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
