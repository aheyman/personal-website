import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, CardActions, Button, Dialog,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


const styles = {

};

function about(props) {
  const { isOpen } = props;
  if (isOpen) { return 'About'; }
  return null;
}

const mapStateToProps = state => ({

  isOpen: state.navigation.activePage === 'ABOUT',

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(about));
