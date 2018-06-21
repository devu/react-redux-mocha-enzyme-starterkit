import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'red' }

const Main = () => (
  <div>
    <h4>Pearson UI Components showcase</h4>
    <p>
      <a href="https://uxframework.pearson.com/ui-kit"> Reference: https://uxframework.pearson.com/ui-kit</a>
    </p>
    <div className="home-main">
      <NavLink exact to="/components/buttons" activeStyle={activeStyle}>
        Buttons
      </NavLink>
      {' | '}
      <NavLink to="/components/icons" activeStyle={activeStyle}>
        Icons
      </NavLink>
      {' | '}
      <NavLink to="/components/selectors" activeStyle={activeStyle}>
        Selectors
      </NavLink>
      {' | '}
      <NavLink to="/components/inputs" activeStyle={activeStyle}>
        Text Inputs
      </NavLink>
      {' | '}
      <NavLink to="/components/grids" activeStyle={activeStyle}>
        Grids
      </NavLink>
      {' | '}
      <NavLink to="/components/tables" activeStyle={activeStyle}>
        Tables
      </NavLink>
    </div>
  </div>
)

export default Main
