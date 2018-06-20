import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Header from '../Header'
import HomePage from '../HomePage'
import ComponentsPage from '../ComponentsPage'
import DashboardPage from '../DashboardPage'
import ReduxPage from '../ReduxPage'
import NotFoundPage from '../NotFoundPage'

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/redux" component={ReduxPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Fragment>
)

export default hot(module)(App)
