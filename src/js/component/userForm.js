/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Paper } from '@material-ui/core';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const userSubmitForm = () => (
  <Paper>
    <h1>React Final Form - Simple Example</h1>
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({
        handleSubmit, form, submitting, pristine, values,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Paper>
);

export default userSubmitForm;
