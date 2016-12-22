import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import * as app from 'event/app'
import * as space from 'event/space'
import { urls } from 'userspace-sdk-js'
import { Link } from 'react-router'
import ChartPie from './ChartPie'
import ChartLine from './ChartLine'


const Home = ({apps, spaces, free, ratio, fill, total, sizes}) =>
<div className="container-fluid">
    <div className="row">
        <button className="btn btn-just-icon btn-round btn-twitter">
            <i className="fa fa-plus"></i>New
        </button>
    </div>
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header card-header-icon" data-background-color="red">
                    <i className="material-icons">pie_chart</i>
                </div>
                <div className="card-content">
                    <h4 className="card-title">Active users over time</h4>
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

</div>

const HomeClass = React.createClass({
    componentWillMount: function() {
        this.props.actions.listApps();
        this.props.actions.listSpaces();
    },
    render: function() {
        return Home(this.props)
    },
    componentDidMount : function() {
        mixpanel.track("Home did mount");
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
  {listApps: app.list, listSpaces: space.list}
)(HomeClass);
