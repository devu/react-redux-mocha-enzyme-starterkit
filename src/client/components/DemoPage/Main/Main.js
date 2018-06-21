import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'red' }

const Main = () => (
  <div>
    <h4>Demo Page</h4>
    <div className="home-main">
      <NavLink exact to="/demo/1" activeStyle={activeStyle}>
        Demo 1
      </NavLink>
      {' | '}
      <NavLink exact to="/demo/2" activeStyle={activeStyle}>
        Demo 2
      </NavLink>
    </div>
  </div>
)

export default Main
