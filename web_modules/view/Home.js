import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { logout } from 'event/user'
import * as app from 'event/app'
import * as space from 'event/space'
import { urls } from 'lib/userspace'
import { Link } from 'react-router'
import ChartPie from './ChartPie'
import ChartLine from './ChartLine'


const Home = ({apps, spaces, free, ratio, fill, total, sizes}) =>
<div className="container-fluid">
    <div className="row">
        <div className="progress">
        	<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: `${ratio}%`}}>
            	<span className="sr-only">60% Complete</span>
        	</div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="blue">
                    <i className="material-icons">pie_chart</i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">Spaces usage</h4>
                </div>
                <ChartPie pieName="spaces-usage-pie" series={sizes.concat({size:free}).map(s=>100*s.size/total)}/>
                <div className="card-footer">
                    <h6>Legend</h6>
                    {sizes.map(size=>
                        <span key={size.app}><i className="fa fa-circle text-info"></i> {(spaces.filter(space=> space.app === size.app)[0] || {name: 'pepe'}).name } </span>
                    )}
                    <span><i className="fa fa-circle text-danger"></i> Free </span>
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="red">
                    <i className="material-icons">pie_chart</i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">Active users</h4>
                </div>
                <ChartLine lineName="active-users-pie" />
                <div className="card-footer">
                    <h6>Legend</h6>
                    <i className="fa fa-circle text-info"></i> Apple
                    <i className="fa fa-circle text-warning"></i> Samsung
                    <i className="fa fa-circle text-danger"></i> Windows Phone
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header card-header-text" data-background-color="orange">
                    <h4 className="card-title">Top Spaces</h4>
                    <p className="category">List of your most used spaces</p>
                </div>
                <div className="card-content table-responsive">
                    <table className="table table-hover">
                        <thead className="text-warning">
                            <tr>
                                <th>URL</th>
                                <th>Name</th>
                                <th>Memory</th>
                                <th>Last used</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                spaces.map(space=>
                                    <tr key={space.id}>
                                        <td><a href="#">{space.app}</a></td>
                                        <td>{space.name}</td>
                                        <td>{(sizes.filter(s=>s.app === space.app)[0] || {size:0}).size}</td>
                                        <td>11/05/2016</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card">
                <div className="card-header card-header-text" data-background-color="green">
                    <h4 className="card-title">Top Applications</h4>
                    <p className="category">List of your most used applications</p>
                </div>
                <div className="card-content table-responsive">
                    <table className="table table-hover">
                        <thead className="text-warning">
                            <tr>
                                <th>URL</th>
                                <th>Name</th>
                                <th>Active users</th>
                                <th>Last used</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apps.map(app=>
                                    <tr key={app.id}>
                                        <td><a href="#">{app.url}</a></td>
                                        <td>{app.name}</td>
                                        <td>{app.sessions}</td>
                                        <td>11/05/2016</td>
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

const HomeClass = React.createClass({
    componentWillMount: function() {
        this.props.actions.listApps();
        this.props.actions.listSpaces();
    },
    render: function() {
        return Home(this.props)
    }
})
export default connect(
    state => ({
        apps: state.app.list,
        spaces: state.space.list,
        sizes: state.space.sizes,
        fill : state.space.fill,
        total : state.space.total,
        free : state.space.total - state.space.fill,
        ratio: 100*state.space.fill/state.space.total,
    }),
  {logout, listApps: app.list, listSpaces: space.list}
)(HomeClass);
