import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './js/component/navBar';
import Base from './js/scenes/index';


const styles = {

};


const App = (props) => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.appBar}>
        <NavBar />
      </div>
      <div className={classes.appBody}>
        <Base props={props} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(withStyles(styles)(App));
