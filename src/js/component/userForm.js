/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  TextField,
} from 'final-form-material-ui';
import {
  Paper, Grid, Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing(2),
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};


const onSubmit = async (values) => {

};

const userSubmitForm = props => (
  <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({
        handleSubmit, submitting, values,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="firstName"
                  component={TextField}
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  fullWidth
                  required
                  name="lastName"
                  component={TextField}
                  type="text"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  fullWidth
                  required
                  component={TextField}
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="notes"
                  component={TextField}
                  multiline
                  label="Notes"
                />
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                    Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      )}
    />
  </div>
);
export default withStyles(styles)(userSubmitForm);
