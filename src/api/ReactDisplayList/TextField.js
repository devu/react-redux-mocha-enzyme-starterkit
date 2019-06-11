import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './TextField.scss'

const Div = styled.div`
background-color: #eee;
color: black;
width: ${props => props.w}px;
height: ${props => props.h}px
transform: translate(${props => props.x}px, ${props => props.y}px);
`

const TextField = props => {
  const {
    children, x, y, w, h
  } = props
  return (
    <Div x={x} y={y} w={w} h={h} className="dl-text-field">
      {children}
    </Div>
  )
}

TextField.propTypes = {
  children: PropTypes.node,
  x: PropTypes.number,
  y: PropTypes.number,
  w: PropTypes.number,
  h: PropTypes.number
}

TextField.defaultProps = {
  children: null,
  x: 0,
  y: 0,
  w: 100,
  h: 20
}

export default TextField
