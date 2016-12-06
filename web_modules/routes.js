import React from 'react'
import { Router, hashHistory, withRouter } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'

import { App, Landing, Home, NewApp } from 'view'

const routes = {
  path : '/',
  component : withRouter(App),
  indexRoute : { component : Landing },
  childRoutes: [
      { path : "home", component : Home },
      { path : "new-app", component : NewApp },
  ]
}

export default (store) => () =>
      <Router routes={routes}
          history={syncHistoryWithStore(hashHistory, store)}
          render={applyMiddleware(useRelativeLinks())}  />
