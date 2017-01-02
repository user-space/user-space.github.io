import React from 'react'
import getRoutes from 'routes'
import { Provider } from 'react-redux';

import store from 'store'

const Routes = getRoutes(store);

const Root = () =>
  <Provider store={store}>
      <Routes />
  </Provider>

class RootClass extends React.Component {
  render() {
    return Root(this.props)
  }
  componentDidMount() {
    mixpanel.track("Root did mount");
  }
}

export default RootClass
