import React from 'react';
import {
  Card, withStyles, Paper, CardContent, Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

};

const workItem = (props) => {
  const {
    title, startDate, endDate, description, location, url, company, classes,
  } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2" />
        <Typography className={classes.pos} color="textSecondary">
          {startDate}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};


const mapStateToProps = state => ({


});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(workItem));
