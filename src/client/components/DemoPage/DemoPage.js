import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Main from './Main'
import DemoOne from './DemoOne'
import DemoTwo from './DemoTwo'

const ReduxPage = ({ match }) => (
  <div className="demo-page">
    <Route path={match.path} component={Main} />
    <Route path={`${match.path}/1`} component={DemoOne} />
    <Route path={`${match.path}/2`} component={DemoTwo} />
  </div>
)

ReduxPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired
}

export default ReduxPage
