/* eslint jsx-a11y/click-events-have-key-events: 0, jsx-a11y/no-static-element-interactions: 0 */

import React from 'react'
import PropTypes from 'prop-types'

const DzonyChild = props => {
  const { onClick } = props
  return (
    <div className="button" onClick={onClick} />
  )
}

DzonyChild.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DzonyChild
