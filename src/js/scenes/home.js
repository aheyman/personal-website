import React from 'react';
import {
  Paper, Grid, List, ListItemText, ListItem, Link,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Lens } from '@material-ui/icons';
import wedding from '../../static/images/wedding.png';
import { spinMe } from '../actions/actions';


const subreddits = [
  { val: 'ProgrammerHumor', id: 1 },
  { val: 'nba', id: 2 },
  { val: 'buildapcsales', id: 3 },
  { val: 'functionalProgramming', id: 4 },
  { val: 'arrestedDevelopment', id: 5 },
  { val: 'archlinux', id: 6 },
  { val: 'theSopranos', id: 7 },
  { val: 'gaming', id: 8 },
  { val: 'math', id: 9 },
  { val: 'rit', id: 10 },
];

const quickBackground = [
  'I\'m predominately a backend JVM developer (Java professionally; Scala recreationally)',
  'I\'ve periodically filled in with our React front-end team when needed (usually middleware and below)',
  'This website is mostly used for me to play around with different front-end tools/approaches',
  'Best viewed on a screen bigger than a phone',
  'The home photo was taken at a friend\'s wedding, click the image to dance!',
];

const styles = theme => ({

  media: {
    [theme.breakpoints.down('md')]: {
      height: '300px',
      width: '150px',
    },
  },
  pitch: {
    padding: theme.spacing(1),
    margin: theme.spacing(3),
    backgroundColor: '#1b1b1b',
  },
  background: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  headers: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    fontSize: 'large',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
  },
  '@keyframes swingAnimation': {
    '0%': { transform: 'rotate(0deg)' },
    '25%': { transform: 'rotate(6deg)' },
    '75%': { transform: 'rotate(-6deg)' },
    '100%': { transform: 'rotate(0deg)' },
  },
  container: {
    animation: '$swingAnimation ease-in-out 3s 1;',
    [theme.breakpoints.down('md')]: {
      height: '300px',
      width: '150px',
    },
  },

});

function home(props) {
  const {
    isOpen, classes, spin, graphicSpin,
  } = props;

  const subs = (
    <List>
      {subreddits.map((x) => {
        const sub = `/r/${x.val}`;
        return (
          <Link href={`https://www.reddit.com/${sub}`} color="textSecondary">
            <ListItem>
              <ListItemText primary={sub} key={x.id} />
            </ListItem>
          </Link>
        );
      })}

    </List>
  );
  const backStory = quickBackground.map(x => (
    <ListItem>
      <Lens transform="scale(.5)" />
      <ListItemText primary={x} />
    </ListItem>
  ));
  if (isOpen) {
    return (
      <Paper className={classes.background}>
        <Grid container spacing={2} alignContent="center" justify="center">
          <Grid item onClick={() => graphicSpin(true)}>
            <img className={spin ? classes.container : classes.media} onAnimationEnd={() => graphicSpin(false)} src={wedding} alt="Me at a Wedding" />
          </Grid>
          <Grid item>
            <Paper className={classes.headers}>
            Quick Background
            </Paper>
            <Paper className={classes.pitch}>
            Hello, welcome to my React Playground!
              <List>
                {backStory}
              </List>
            </Paper>
            <Paper className={classes.headers}>
            Contents
            </Paper>
            <Paper className={classes.pitch}>
              {'I\'m not exactly sure what the contents will be, so in the meantime, enjoy these subreddits:'}
              {subs}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'HOME',
  spin: state.home.spin,
});

const mapDispatchToProps = dispatch => ({
  graphicSpin: x => dispatch(spinMe(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(home));
