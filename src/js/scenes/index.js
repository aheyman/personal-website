import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Contact from './contact';
import Home from './home';
import Resume from './resume';


const useStyles = makeStyles(theme => ({

  paper: {
    padding: theme.spacing(2),
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Home />
      <Contact />
      <Resume />
    </Box>
  );
}
