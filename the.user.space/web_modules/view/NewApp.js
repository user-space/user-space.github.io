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

const NewApp = ({ handleSubmit, actions, info, manifest, image, url, loaded, pristine, reset, submitting, checking, done }) =>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <form className="form-horizontal" onSubmit={handleSubmit(actions.create)}>
                    <div className="card-header card-header-text" data-background-color="rose">
                        <h4 className="card-title">Application registration</h4>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <label className="col-sm-3 label-on-left">Where can we find it?</label>
                            <div className="col-sm-9">
                                <div className="form-group label-floating is-empty">
                                    <label className="control-label"></label>
                                    <Field component="input" name="url" type="text" placeholder="your application url goes here" className="form-control"  />
                                    <span className="help-block">something like https://userspace.github.io/todomvc</span>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{display: loaded && !done ? 'block': 'none'}}>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="picture-container">
                                        <div className="picture">
                                            <img src={image} className="picture-src" id="picturePreview" title="" />
                                            <Field component="input" disabled={!loaded} name="image" type="file" />
                                        </div>
                                        <h6>Upload an icon</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <label className="col-sm-2 label-on-left">Name</label>
                                    <div className="col-sm-10">
                                        <div className="form-group label-floating is-empty">
                                            <label className="control-label"></label>
                                            <Field component="input" name="name" disabled={!loaded} type="text" placeholder="give it a name" className="form-control"  />
                                            <span className="help-block">just letters and numbers, you may separate words with spaces but keep it short</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-sm-2 label-on-left">Brief description</label>
                                    <div className="col-sm-10">
                                        <div className="form-group label-floating is-empty">
                                            <label className="control-label"></label>
                                            <Field component="textarea" name="description" disabled={!loaded} placeholder="tell us what should we know about it" className="form-control"  />
                                            <span className="help-block">this is what the user will read to know more about your application, try to be short and sharp</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6" />
                      <button type="submit" className="btn btn-fill btn-rose" disabled={pristine || submitting || checking} >Done</button>
                      <button type="submit" className="btn btn-fill btn-rose" disabled={pristine || submitting || checking} onClick={reset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div className="row" style={{display: done ? 'block': 'none'}}>
        <div className="row">
            <div className="col-md-6">
                <a className="btn btn-fill btn-rose" onClick={actions.edit}>Edit again</a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header card-header-text" data-background-color="green">
                        <i className="material-icons">code</i>
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">New manifest.json</h4>
                        <p className="category">with the new values</p>
                        <div className="row">
                            <a className="btn btn-fill btn-rose"
                              href={`data:application/octet-stream;charset=utf-8;base64,${new Buffer(JSON.stringify(info,null,2)).toString('base64')}`}
                              download='manifest.json'>Download</a>
                        </div>
                        <div className="row">
                            <pre>{JSON.stringify(info, null, 2)}</pre>
                        </div>
                    </div>
                    <div className="card-footer">
                        You should update or create the <span>manifest.json</span> file in your application in order finish the process
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header card-header-text" data-background-color="red">
                        <i className="material-icons">error</i>
                    </div>
                    <div className="card-content">
                        <h4 className="card-title">Current manifest.json</h4>
                        <p className="category">{`as found at ${url}/manifest.json`}</p>
                        <div className="row">
                            <a className="btn btn-fill btn-rose">Check again</a>
                        </div>
                        <div className="row">
                            <pre>{JSON.stringify(manifest, null, 2)}</pre>
                        </div>
                    </div>
                    <div className="card-footer">
                        We are checking that the name, description, icon and signature match.
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

const NewAppClass = reduxForm({
  form: 'newApp' // a unique name for this form
})(NewApp);

export default connect(
    state => ({
      enableReinitialize: true,
      initialValues: {
        url: state.app.url,
        image: state.app.image,
        name: state.app.info.name,
        description: state.app.info.description,
      },
      image: state.app.image,
      info: state.app.info,
      manifest: state.app.manifest,
      loaded: state.app.loaded,
      checking: state.app.checking,
      done: state.app.done,
    }),
    {create: app.create, edit: app.edit}
)(NewAppClass);
