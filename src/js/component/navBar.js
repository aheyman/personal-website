import React from 'react';
import {
  Button, Grid, Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { FaHome, FaFile, FaAddressCard } from 'react-icons/fa';
import { menuAction } from '../actions/actions';

const styles = theme => ({
  title: {
    padding: theme.spacing(2),
    textAlign: 'left',
    fontSize: '3rem',
    color: 'white',
    fontFamily: 'Courier',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
  buttons: {
    padding: theme.spacing(2),
    width: '75%',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: '0',
    },
  },
  icon: {
    padding: theme.spacing(1),
    fontSize: 18,
  },
});


const NavBar = (props) => {
  const { classes, fireMenu } = props;
  const navButtons = [
    { disp: 'Home', id: 'HOME', icon: <FaHome className={classes.icon} /> },
    { disp: 'Resume', id: 'RESUME', icon: <FaFile className={classes.icon} /> },
    { disp: 'Contact', id: 'CONTACT', icon: <FaAddressCard className={classes.icon} /> },
  ];

  const navGrid = navButtons.map(btn => (
    <Grid item xs={2}>
      <Button
        variant="text"
        aria-label={btn.disp}
        className={classes.buttons}
        onClick={() => fireMenu(btn.id)}
      >
        {btn.icon}
        {btn.disp}
      </Button>
    </Grid>
  ));

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <div className={classes.title}>
          andrewHeyman(.dev)
          </div>
        </Grid>
        {navGrid}
      </Grid>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => ({
  fireMenu: x => dispatch(menuAction(x)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(NavBar));
