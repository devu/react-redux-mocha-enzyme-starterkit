import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'red' }

const Main = () => (
  <div>
    <h4>Main Home Page content</h4>
    <div className="home-main">
      <NavLink exact to="/home/buttons" activeStyle={activeStyle}>
        Buttons
      </NavLink>
      {' | '}
      <NavLink to="/home/icons" activeStyle={activeStyle}>
        Icons
      </NavLink>
      {' | '}
      <NavLink to="/home/selectors" activeStyle={activeStyle}>
        Selectors
      </NavLink>
      {' | '}
      <NavLink to="/home/inputs" activeStyle={activeStyle}>
        Text Inputs
      </NavLink>
      {' | '}
      <NavLink to="/home/grids" activeStyle={activeStyle}>
        Grids
      </NavLink>
      {' | '}
      <NavLink to="/home/tables" activeStyle={activeStyle}>
        Tables
      </NavLink>
    </div>
  </div>
)

export default Main
