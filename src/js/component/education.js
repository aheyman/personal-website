import React from 'react';
import {
  Card, withStyles, CardContent, Typography, Box,
} from '@material-ui/core';

const styles = theme => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      padding: theme.spacing(1),
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  media: {
    padding: theme.spacing(2),
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
      padding: theme.spacing(1),
    },
  },
});

const education = (props) => {
  const {
    school, degree, classes, img,
  } = props;

  const degrees = degree.map(x => <Typography>{x}</Typography>);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" direction="row" alignItems="center">
      <img className={classes.media} src={require(`../../static/images/${img.name}`)} alt={img.description} />
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.cardTitle}>
            {school}
          </Typography>
          {degrees}
        </CardContent>
      </Card>
    </Box>
  );
};


export default withStyles(styles)(education);
