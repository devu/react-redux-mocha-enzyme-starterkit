import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './Clip.scss'

const Div = styled.div`
  transform: translate(${props => props.x}px, ${props => props.y}px);
`

const Clip = props => {
  const { children, x, y } = props
  return (
    <Div x={x} y={y} className="dl-clip">{children}</Div>
  )
}

Clip.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number
}

Clip.defaultProps = {
  children: null,
  x: 0,
  y: 0,
}

export default Clip
