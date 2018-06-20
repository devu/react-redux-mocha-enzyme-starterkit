import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'red' }

const Main = () => (
  <div>
    <h4>React-redux patterns</h4>
    <div className="home-main">
      <NavLink exact to="/redux/class" activeStyle={activeStyle}>
        DataContainer Class
      </NavLink>
      {' | '}
      <NavLink exact to="/redux/func" activeStyle={activeStyle}>
        DataContainer Functional
      </NavLink>
    </div>
  </div>
)

export default Main
