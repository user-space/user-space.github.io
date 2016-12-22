import React from 'react';
import ReactDOM from 'react-dom';
import { Field as ReduxFormField } from 'redux-form';


const Field = ({name, label}) =>
    <div>
      <label htmlFor={name}>{label}</label>
      <ReduxFormField name={name} component="input" type="text"/>
    </div>

export default Field
