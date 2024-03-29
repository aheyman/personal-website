import React from 'react';
import {
  Card, withStyles, CardContent, Typography, Box,
} from '@material-ui/core';

const styles = theme => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      padding: theme.spacing(1),
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
  },
  cardCompany: {
    fontSize: '1.10rem',
    color: theme.palette.text.secondary,
  },
  cardDates: {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
  },
  cardDescription: {
    fontsize: '1rem',
    color: theme.palette.text.primary,
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

const workItem = (props) => {
  const {
    title, startDate, endDate, description, location, company, classes, img,
  } = props;

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" direction="row" alignItems="center">
      <img className={classes.media} src={require(`../../static/images/${img.name}`)} alt={img.description} />
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.cardTitle}>
            {title}
          </Typography>
          <Typography className={classes.cardCompany}>
            {company}
            {' - '}
            {location}
          </Typography>
          <Typography className={classes.cardDates}>
            {startDate}
            {' - '}
            {endDate}
          </Typography>
          <Typography className={classes.cardDescription}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};


export default withStyles(styles)(workItem);
