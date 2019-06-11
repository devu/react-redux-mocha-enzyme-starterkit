import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route, Switch } from 'react-router-dom'

// default fallback for invalid route
import InvalidRoute from './InvalidRoute'
import Test from '../Test'
import ReactDisplayList from '../ReactDisplayList'
import DzonyComponent from '../DzonyComponent'

export const AppRouteSelect = ({ uuid }) => {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route data-qa="test-route" exact path={`/test/:${uuid}`} component={Test} />
          <Route
            data-qa="react-display-list"
            exact
            path="/react-display-list"
            component={ReactDisplayList}
          />
          <Route
            exact
            path="/dzony"
            component={DzonyComponent}
          />
          <Route data-qa="invalid-route" component={InvalidRoute} />
        </Switch>
      </HashRouter>
    </div>
  )
}

AppRouteSelect.propTypes = {
  uuid: PropTypes.string
}

AppRouteSelect.defaultProps = {
  uuid: ''
}

export default AppRouteSelect
