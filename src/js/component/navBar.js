import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { menuAction } from '../actions/actions';

const styles = {
  flexContainer: {
    display: 'block',
    background: '#395C6B',
    'text-align': 'right',
    'padding-right': '50px',
  },
  item: {
    display: 'inline-block',
    'text-align': 'center',
    'vertical-align': 'middle',
    color: '#BCD3E2',

  },
};

const NavBar = (props) => {
  const { classes, fireMenu } = props;
  return (
    <MenuList className={classes.flexContainer} open>
      <MenuItem className={classes.item} onClick={() => fireMenu('HOME')}>Home</MenuItem>
      <MenuItem className={classes.item} onClick={() => fireMenu('ABOUT')}>About</MenuItem>
      <MenuItem className={classes.item} onClick={() => fireMenu('RESUME')}>Resume</MenuItem>
      <MenuItem className={classes.item} onClick={() => fireMenu('CONTACT')}>Contact</MenuItem>
    </MenuList>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fireMenu: x => dispatch(menuAction(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(NavBar));
