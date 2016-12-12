import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { logout } from 'event/user'
import * as app from 'event/app'
import * as space from 'event/space'
import { urls } from 'lib/userspace'
import { Link } from 'react-router'


const Home = ({actions, apps, spaces, username, token, free, filled, ratio}) =>
      <section className="main-content">
        <div className="login-box" style={{textAlign: "center"}}>
          <h3>{username}</h3>
          <h2>
              <a onClick={actions.logout}>Logout</a>
              <span> - </span>
              <a href={urls.dashboard(token)}>Dashboard</a>
          </h2>
        </div>
        <div className="stats">
            <div className="size">
                <div className="used" style={{ width: `${ratio}%` }}>{`used (${filled} Kb)`}</div>
                <div className="free">{`free (${free} Kb)`}</div>
                <div className="restore" />
            </div>
        </div>
        <div className="panel">
            <div className="left">
                <h4>Apps</h4>
                <Link to="/new-app"> new </Link>
                <ul>{apps.map((app,idx)=>
                    <li key={idx}>e</li>
                )}</ul>
            </div>
            <div className="right">
                <h4>Spaces</h4>
                <ul>{spaces.map((sp,idx)=>
                    <li key={idx}>{sp.attributes.application.name}</li>
                )}</ul>
            </div>
        </div>
      </section>

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
        username: state.user.id,
        token: state.user.token.token,
        free: Math.floor((state.space.total - state.space.fill)/1024),
        filled : Math.floor(state.space.fill/1024),
        ratio: 100*state.space.fill/state.space.total,
    }),
  {logout, listApps: app.list, listSpaces: space.list}
)(HomeClass);
