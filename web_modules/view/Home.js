import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { logout } from 'event/user'
import * as app from 'event/app'
import * as space from 'event/space'
import { urls } from 'lib/userspace'

const Home = ({actions, apps, spaces, username, token}) =>
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
                <div className="used">used (17.5Mb)</div>
                <div className="free">free (32.5Mb)</div>
                <div className="restore" />
            </div>
        </div>
        <div className="panel">
            <div className="left">
                <h4>Apps</h4>
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
    }),
  {logout, listApps: app.list, listSpaces: space.list}
)(HomeClass);
