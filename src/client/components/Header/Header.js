import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'blue' }

const Header = () => (
  <Fragment>
    <div className="header">
      <NavLink exact to="/home" activeStyle={activeStyle}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/dashboard" activeStyle={activeStyle}>
        Dashboard
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  </Fragment>
)

export default Header
