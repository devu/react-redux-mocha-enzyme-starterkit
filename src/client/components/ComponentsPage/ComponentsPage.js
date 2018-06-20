import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Main from './Main'
import Buttons from './Buttons'
import Icons from './Icons'
import Selectors from './Selectors'
import TextInputs from './TextInputs'
import Grids from './Grids'
import Tables from './Tables'

const ComponentsPage = ({ match }) => (
  <div>
    <Route path={match.path} component={Main} />
    <Route path={`${match.path}/buttons`} component={Buttons} />
    <Route path={`${match.path}/icons`} component={Icons} />
    <Route path={`${match.path}/selectors`} component={Selectors} />
    <Route path={`${match.path}/inputs`} component={TextInputs} />
    <Route path={`${match.path}/grids`} component={Grids} />
    <Route path={`${match.path}/tables`} component={Tables} />
  </div>
)

ComponentsPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired
}

export default ComponentsPage
