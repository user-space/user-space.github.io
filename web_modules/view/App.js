import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'
import SideBar from './SideBar'

var App = ({title, children}) =>
<div className="wrapper">
    <SideBar />
    <div className="main-panel">
        <Navigation title={title || 'Title'} />
        <div className="content">
            {children}
        </div>
        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="copyright pull-right">
                    &copy; 2016 <a href="https://user.space">User Space</a>, friction-less full-stack webapps
                </p>
            </div>
        </footer>
    </div>
</div>

export default App
