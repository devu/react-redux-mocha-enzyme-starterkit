import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Dashboard from '../containers/Dashboard'
import Header from './Header'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFoundPage} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
