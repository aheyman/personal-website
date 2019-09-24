import React from 'react';
import {
  Paper, Box, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import UserForm from '../component/userForm';
import LinkedIn from '../../static/images/LinkedIn.png';
import Github from '../../static/images/github.png';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  boxes: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  buttons: {
    width: '100px',
    height: '100px',
  },
});

const data = [{
  url: 'https://www.linkedin.com/in/andrewheyman/',
  alt: 'LinkedIn Profile',
  asset: LinkedIn,
}, {
  url: 'https://github.com/aheyman',
  alt: 'GitHub Profile',
  asset: Github,
}];

const generateButtons = (def, classes) => {
  const {
    url, asset, alt,
  } = def;
  return (
    <Box className={classes.boxes}>
      <a href={url}>
        <Button>
          <img src={asset} alt={alt} className={classes.buttons} />
        </Button>
      </a>
      {alt}
    </Box>
  );
};

function contact(props) {
  const { isOpen, classes } = props;
  if (isOpen) {
    return (
      <Paper className={classes.root}>
        <Box display="flex" flexDirection="row" justifyContent="center">
          {data.map(x => (generateButtons(x, classes)))}
        </Box>
      </Paper>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'CONTACT',
});

export default connect(
  mapStateToProps,
)(withStyles(styles)(contact));
