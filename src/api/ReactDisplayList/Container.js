import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './Container.scss'

const Div = styled.div`
  transform: translate(${props => props.x}px, ${props => props.y}px);
`

const Container = props => {
  const { children, x, y } = props
  return (
    <Div x={x} y={y} className="dl-container">{children}</Div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number
}

Container.defaultProps = {
  children: null,
  x: 0,
  y: 0,
}

export default Container
