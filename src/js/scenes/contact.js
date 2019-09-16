import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, CardActions, Button, Dialog, Paper,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import UserForm from '../component/userForm';


const styles = {

};

function contact(props) {
  const { isOpen, classes } = props;
  if (isOpen) {
    return (
      <Paper>
        <Card className={classes.card}>
          LinkedIn
        </Card>
        <Card className={classes.card}>
          GitHub
        </Card>
        <Card className={classes.card}>
          GitHub
        </Card>
        <UserForm />
      </Paper>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'CONTACT',
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(contact));
