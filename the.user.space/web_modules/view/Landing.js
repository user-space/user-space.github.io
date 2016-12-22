import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { login } from 'event/user'

var Landing = ({actions}) =>
<div className="landing-page">
    <link href="assets/css/material-kit.css" rel="stylesheet"/>
    <nav className="navbar navbar-danger navbar-transparent navbar-absolute">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand">The User Space</a>
            </div>

        </div>
    </nav>


    <div className="page-header header-filter" data-parallax="active" style={{backgroundImage: "url('/assets/img/background.jpg')"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="title">Friction-less backend for developers</h1>
                    <h4>Convert your single page application into a full stack one with no effort. Forget about configuring databases and server, focus in your app.</h4>
                    <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-danger btn-raised btn-lg">
                        <i className="fa fa-play"></i> Watch video
                    </a>
                    <a onClick={actions.login} className="btn btn-success btn-raised btn-lg">
                        <i className="fa fa-sign-in"></i> Login
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="main main-raised">
        <div className="container">
            <div className="section text-center">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2 className="title">Build applications with The User Space</h2>
                        <h5 className="description">Applications builded with The User Space will scale unlimited, perform like champions and works out of the box. It also protect the user information by restricting the access just to the owner.</h5>
                    </div>
                </div>

                <div className="features">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="fa fa-server"></i>
                                </div>
                                <h4 className="info-title">Forget about backend</h4>
                                <p>We give you the endpoints ready out-of-the-box, you just worry about what do you need to save and how you will get it</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-success">
                                    <i className="material-icons">verified_user</i>
                                </div>
                                <h4 className="info-title">Integrated Login</h4>
                                <p>The easiest and secured way. Keep focus in your application strengths and leave common problems to the experts</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-fighter-jet"></i>
                                </div>
                                <h4 className="info-title">Start in seconds... literally</h4>
                                <p>Convert a single-page-application into a full-stack with a few lines of code. <a target="_blank" href="https://github.com/user-space/todomvc/commit/2a31fbbdeeed0f6760dbba344028becdccbc4e48">Take a look</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section text-center">
                <h2 className="title">Behind the courtain</h2>

                <div className="team">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-profile card-plain">
                                <div className="col-md-5">
                                    <div className="card-image">
                                        <a>
                                            <img className="img" src="/assets/img/faces/card-profile1-square.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="content">
                                        <h4 className="card-title">Sebastian Javier Marchano</h4>
                                        <h6 className="category text-muted">Founder</h6>

                                        <p className="card-description">
                                            Dont be scared of the truth because we need to restart the human foundation in truth...
                                        </p>

                                        <div className="footer">
                                            <a href="https://twitter.com/sebasjm" className="btn btn-just-icon btn-simple btn-twitter"><i className="fa fa-twitter"></i></a>
                                            <a href="https://facebook.com/sebasjm" className="btn btn-just-icon btn-simple btn-facebook"><i className="fa fa-facebook-square"></i></a>
                                            <a href="https://google.com/+SebastianMarchano" className="btn btn-just-icon btn-simple btn-google"><i className="fa fa-google"></i></a>
                                            <a href="https://github.com/sebasjm" className="btn btn-just-icon btn-simple btn-github"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


            <div className="section section-contacts">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h2 className="text-center title">Work with us</h2>
                        <h4 className="text-center description">Tell us what you do and what you like. We will try to get back to you in a couple of hours.</h4>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Your Name</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Your Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group label-floating">
                                <label className="control-label">Your Messge</label>
                                <textarea className="form-control" rows="4"></textarea>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-md-offset-4 text-center">
                                    <button className="btn btn-primary btn-raised">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <footer className="footer">
        <div className="container">
            <nav className="pull-left">
                <ul>
                    <li>
                        <a href="http://the.user.space">
                            The User Space
                        </a>
                    </li>
                    <li>
                        <a href="https://user.space/about">
                           About Us
                        </a>
                    </li>
                    <li>
                        <a href="https://user.space/blog">
                           Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://user.space/license">
                            Licenses
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="copyright pull-right">
                &copy; 2016, made by User Space
            </div>
        </div>
    </footer>
</div>

export default connect(
  undefined,
  {login}
)(Landing);
