import React from 'react'
import { Router, hashHistory, withRouter } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'

import { App, Landing, Home, NewApp, Applications, Spaces } from 'view'

const routes = [{
    component : withRouter(App),
    childRoutes: [
        { path : "/home", component : Home },
        { path : "/apps", component : Applications },
        { path : "/spaces", component : Spaces },
        { path : "/new-app", component : NewApp },
    ]},{
        path : '/',
        indexRoute : { component : Landing },
    }]

export default (store) => () =>
      <Router routes={routes}
          history={syncHistoryWithStore(hashHistory, store)}
          render={applyMiddleware(useRelativeLinks())}  />
