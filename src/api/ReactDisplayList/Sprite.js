import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './Sprite.scss'

const Div = styled.div`
  transform: translate(${props => props.x}px, ${props => props.y}px);
`

const Sprite = props => {
  const {
    children, x, y, w, h
  } = props
  return (
    <Div x={x} y={y} w={w} h={h} className="dl-sprite">
      {children}
    </Div>
  )
}

Sprite.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  w: PropTypes.number,
  h: PropTypes.number
}

Sprite.defaultProps = {
  children: null,
  x: 0,
  y: 0,
  w: 1,
  h: 1
}

export default Sprite
