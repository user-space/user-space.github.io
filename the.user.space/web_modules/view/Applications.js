import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import * as app from 'event/app'
import connect from 'lib/connect'

var Applications = ({apps}) =>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header card-header-text" data-background-color="green">
                    <h4 className="card-title">Applications</h4>
                    <p className="category">List of your applications</p>
                </div>
                <div className="card-content table-responsive">
                    <table className="table table-hover">
                        <thead className="text-warning">
                            <tr>
                                <th>URL</th>
                                <th>Name</th>
                                <th>Active users</th>
                                <th>Last used</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apps.map(app=>
                                    <tr key={app.id}>
                                        <td><a href={app.url} target='_blank'>{app.url}</a></td>
                                        <td>{app.name}</td>
                                        <td>{app.sessions}</td>
                                        <td>11/05/2016</td>
                                        <td>
                                            <button className="btn btn-warning btn-round">
                                                <i className="fa fa-pencil"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-round">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

const ApplicationsClass = React.createClass({
    componentWillMount: function() {
        this.props.actions.listApps();
    },
    render: function() {
        return Applications(this.props)
    }
})

export default connect(
    state => ({
        apps: state.app.list,
    }),
  {listApps: app.list}
)(ApplicationsClass);
