import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './Stage.scss'

const Div = styled.div`
  background-color: ${props => props.bg};
`

const Stage = props => {
  const { children, bg } = props
  return (
    <Div bg={bg} className="dl-stage">{children}</Div>
  )
}

Stage.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
}

Stage.defaultProps = {
  children: null,
  bg: '#fff'
}

export default Stage
