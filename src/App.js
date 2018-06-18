import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { hot } from 'react-hot-loader'

import UI from 'ui'
import store, { history } from './client/store/configureStore'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <UI />
    </ConnectedRouter>
  </Provider>
)

export default hot(module)(App)
