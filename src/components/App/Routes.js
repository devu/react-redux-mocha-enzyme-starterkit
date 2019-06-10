import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route, Switch } from 'react-router-dom'

// default fallback for invalid route
import InvalidRoute from './InvalidRoute'
import Test from '../Test'

export const AppRouteSelect = ({ uuid }) => {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route
            data-qa="test-route"
            exact
            path={`/test/:${uuid}`}
            component={Test}
          />
          <Route data-qa="invalid-route" component={InvalidRoute} />
        </Switch>
      </HashRouter>
    </div>
  )
}

AppRouteSelect.propTypes = {
  uuid: PropTypes.string.isRequired
}

export default AppRouteSelect
