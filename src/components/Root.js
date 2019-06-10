import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <App history={history} />
    </Provider>
  )
}
Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
}
export default Root
