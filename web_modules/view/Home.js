import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { logout } from 'event/user'
import * as app from 'event/app'
import * as space from 'event/space'

const Home = ({actions, apps, spaces}) =>
      <section className="main-content">
        <div className="login-box" style={{textAlign: "center"}}>
          <h2>
              <a onClick={actions.logout}>Logout</a>
              <span> - </span>
              <a target="new" href={`http://user.space/login?token=${localStorage.id_token}`}>Dashboard</a>
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
        spaces: state.space.list
    }),
  {logout, listApps: app.list, listSpaces: space.list}
)(HomeClass);
