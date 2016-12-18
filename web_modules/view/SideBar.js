import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

var SideBar = ({children}) =>
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
                <a target='_blank' href={`http://localhost:1337/login?token=${localStorage.id_token}`}>
                    <i className="material-icons">dashboard</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a href={`http://localhost:1337/sign/${new Buffer(window.location.origin + window.location.pathname).toString('base64')}`}>
                    <i className="material-icons">perm_identity</i>
                    <p>Change user</p>
                </a>
            </li>
        </ul>
    </div>
</div>


export default SideBar
