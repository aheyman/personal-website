import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, CardActions, Button, Dialog, Paper,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import wedding from '../../resource/wedding.png';


const styles = {
  image: {
    float: 'left',
  },
  paper: {
    padding: '20px',
    width: '800px',
    float: 'right',
    display: 'block',
    'text-align': 'right',
  },
  card: {
    background: '#E6E1C5',
    margin: '20px',
    width: '50%',
    height: '50px',
    'text-align': 'center',
    color: 'black',
  },

};

function home(props) {
  const { isOpen, classes } = props;
  if (isOpen) {
    return (
      <div>
        <div className={classes.image}>
          <img src={wedding} alt="Wedding" />
        </div>
        <div className={classes.paper}>
          <Paper>
            <Card className={classes.card}>
          Software Engineer
            </Card>
            <Card className={classes.card}>
          Software Engineer
            </Card>
          </Paper>
        </div>
      </div>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'HOME',

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(home));
