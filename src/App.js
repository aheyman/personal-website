import React from 'react';
import { connect } from 'react-redux';
import NavBar from './js/component/navBar';
import Base from './js/scenes/index';

const App = props => (
  <>
    <NavBar />
    <Base props={props} />
  </>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(App);
