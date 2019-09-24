import React from 'react';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import WorkItem from '../component/workItem';
import Education from '../component/education';

const styles = theme => ({
  base: {
    backgroundColor: '#1b1b1b',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
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
});

const workData = [
  {
    company: 'L3Harris',
    title: 'Senior Associate Software Engineer',
    startDate: '05/2018',
    endDate: 'Present',
    description: 'Primary Java Backend with (limited) React coverage as needed',
    location: 'Rochester, NY',
    url: 'l3harris.com',
    img: {
      name: 'harris.png',
      description: 'Harris logo',
    },
  },
  {
    company: 'Paychex',
    title: 'Software Developer Co-op',
    startDate: '01/2017',
    endDate: '09/2017',
    description: 'Java maintenance for the core payroll application',
    location: 'Rochester, NY',
    url: 'paychex.com',
    img: {
      name: 'paychex.png',
      description: 'Paychex logo',
    },
  },
  {
    company: 'Ortho Clinical Diagnostics',
    title: 'Software Developer Intern',
    startDate: '05/2016',
    endDate: '08/2016',
    description: '.Net internal application development',
    location: 'Rochester, NY',
    url: 'https://www.orthoclinicaldiagnostics.com/en-us/home/',
    img: {
      name: 'ortho.png',
      description: 'Ortho Clinical Icon',
    },
  },
  {
    company: 'Manning & Napier Advisors',
    title: 'Operations Associate',
    startDate: '01/2012',
    endDate: '12/2013',
    description: 'Financial operations (trading, settlement, reconciliation)',
    location: 'Rochester, NY',
    url: 'https://www.manning-napier.com/',
    img: {
      name: 'mn.png',
      description: 'Manning Logo Icon',
    },
  },
  {
    company: 'Citi',
    title: 'Operations Analyst',
    startDate: '10/2010',
    endDate: '01/2012',
    description: 'Financial operations (trading, settlement, reconciliation)',
    location: 'Buffalo, NY',
    url: 'https://www.citigroup.com/citi/',
    img: {
      name: 'citi.png',
      description: 'Citi logo',
    },
  },
];

const education = [
  {
    school: 'Rochester Institute of Technology',
    degree: ['Masters of Computer Science', 'Graduate Certificate in Big Data Analysis'],
    img: {
      name: 'rit.png',
      description: 'RIT Icon',
    },
  },
  {
    school: 'Monroe Community College',
    degree: ['Certificate of Mathematics'],
    img: {
      name: 'mcc.png',
      description: 'MCC Icon',
    },
  },
  {
    school: 'SUNY Geneseo',
    degree: ['Bachelors of Arts in Economics', 'Bachelors of Arts in Political Science'],
    img: {
      name: 'geneseo.jpg',
      description: 'Geneseo Icon',
    },
  },
];

function resume(props) {
  const { isOpen, classes } = props;
  if (isOpen) {
    const workItems = workData.map(role => (<WorkItem {...role} />));
    const educationItems = education.map(edx => (<Education {...edx} />));
    const section = (data, headerName) => (
      <>
        <Paper className={classes.headers}>
          {headerName}
        </Paper>
        <Paper className={classes.base}>
          {data}
        </Paper>
      </>
    );
    return (
      <Paper className={classes.background}>
        {section(workItems, 'Work Experience')}
        {section(educationItems, 'Education')}
      </Paper>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  isOpen: state.navigation.activePage === 'RESUME',
});

export default connect(
  mapStateToProps,
)(withStyles(styles)(resume));
