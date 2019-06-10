import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

class TestContainer extends PureComponent {
  render() {
    return (
      <div className="test-container" data-qa="test-route">
        TestContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appName: state.application.baseURL
  }
}

export default connect(mapStateToProps)(TestContainer)
