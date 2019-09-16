import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, CardActions, Button, Dialog,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import WorkItem from '../component/workItem';


const styles = {

};

const data = [
  {
    company: 'L3Harris',
    title: 'Senior Associate Software Engineer',
    startDate: '05/2018',
    endDate: 'Present',
    description: 'Primary Java Backend with (limited) React coverage as needed',
    location: 'Rochester',
    url: 'l3harris.com',
  },
  {
    company: 'Paychex',
    title: 'Software Developer Co-op',
    startDate: '01/2017',
    endDate: '09/2017',
    description: 'Primary Java Backend',
    location: 'Rochester',
    url: 'paychex.com',
  },
];

function resume(props) {
  const { isOpen } = props;
  if (isOpen) {
    const workItems = data.map(role => (<WorkItem {...role} />));
    return (
      <ul>
        {workItems}
      </ul>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'RESUME',
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(resume));
