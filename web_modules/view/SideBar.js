import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { logout } from 'event/user'
import connect from 'lib/connect'

var SideBar = ({actions}) =>
<div className="sidebar" data-active-color="rose" data-background-color="black" data-image="assets/img/sidebar-1.jpg">
    <div className="logo">
        <a href="http://user.space" className="simple-text">
            My User Space
        </a>
    </div>
    <div className="logo logo-mini">
        <a href="https://user.space" className="simple-text">
            MyUS
        </a>
    </div>
    <div className="sidebar-wrapper">
        <div className="user">
            <div className="photo">
                <img src="assets/img/faces/avatar.jpg" />
            </div>
            <div className="info">
                <a href="#info" className="simple-text">
                    Tania Andrew
                </a>
            </div>
        </div>
        <ul className="nav">
            <li>
                <Link to="/home">
                    <i className="material-icons">home</i>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to="/apps">
                    <i className="material-icons">apps</i>
                    <p>Applications</p>
                </Link>
            </li>
            <li>
                <Link to="/spaces">
                    <i className="material-icons">sd_storage</i>
                    <p>Spaces</p>
                </Link>
            </li>
            <li>
                <a target='_blank' href={`http://user.space/login?token=${localStorage.id_token}`}>
                    <i className="material-icons">dashboard</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a onClick={actions.logout}>
                    <i className="material-icons">exit_to_app</i>
                    <p>Logout</p>
                </a>
            </li>
        </ul>
    </div>
</div>


export default connect(undefined, {logout})(SideBar)
