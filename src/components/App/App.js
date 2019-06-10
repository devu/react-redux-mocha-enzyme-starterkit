import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AppRouteSelect } from './Routes'
import './style.scss'

class App extends PureComponent {
  render() {
    const { appName } = this.props
    return (
      <div className="app-container">
        { appName }
        <AppRouteSelect />
      </div>
    )
  }
}

App.propTypes = {
  appName: PropTypes.string,
}

App.defaultProps = {
  appName: 'Boilerplate'
}

const mapStateToProps = state => {
  return {
    appName: state.application.baseURL
  }
}

export default connect(mapStateToProps)(App)
