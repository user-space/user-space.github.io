import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import connect from 'lib/connect'
import * as app from 'event/app'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

class NewApp extends React.Component {
  render() {
    const { handleSubmit, actions } = this.props;
    return (
      <form onSubmit={handleSubmit(actions.create)}>
        <Field name="app" label="Application Id" type="text" component={renderField}/>
        <Field name="url" label="Application URL" type="text" component={renderField}/>
        <Field name="name" label="Application Name" type="text" component={renderField}/>
        <Field name="secret" label="Secret" type="text" component={renderField}/>
        <Field name="owner" label="Owner Id" type="text" component={renderField}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}   

NewApp = reduxForm({
  form: 'contact' // a unique name for this form
})(NewApp);

export default connect(
    state => ({
    }),
    {create: app.create}
)(NewApp);
