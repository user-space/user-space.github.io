import React from 'react';
import ReactDOM from 'react-dom';

var Navigation = ({title, children}) =>
<nav className="navbar navbar-transparent navbar-absolute">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"> {title} </a>
        </div>
        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="material-icons">notifications</i>
                        <span className="notification">5</span>
                        <p className="hidden-lg hidden-md">
                            Notifications
                            <b className="caret"></b>
                        </p>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#">Mike John responded to your email</a>
                        </li>
                        <li>
                            <a href="#">You have 5 new tasks</a>
                        </li>
                        <li>
                            <a href="#">Youre now friend with Andrew</a>
                        </li>
                        <li>
                            <a href="#">Another Notification</a>
                        </li>
                        <li>
                            <a href="#">Another One</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="material-icons">person</i>
                        <p className="hidden-lg hidden-md">Profile</p>
                    </a>
                </li>
                <li className="separator hidden-lg hidden-md"></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
                <div className="form-group form-search is-empty">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="material-input"></span>
                </div>
            </form>
        </div>
    </div>
</nav>

export default Navigation
