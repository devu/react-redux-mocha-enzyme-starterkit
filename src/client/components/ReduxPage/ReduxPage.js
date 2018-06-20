import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Main from './Main'
import DataContainerClass from './DataContainerClass'
import DataContainerFunc from './DataContainerFunc'

const ReduxPage = ({ match }) => (
  <div className="redux-page">
    <Route path={match.path} component={Main} />
    <Route path={`${match.path}/class`} component={DataContainerClass} />
    <Route path={`${match.path}/func`} component={DataContainerFunc} />
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
