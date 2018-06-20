import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter } from 'react-router-dom'
import DataContainerClass from './DataContainerClass'

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
}

const createContext = () => ({
  context: { router },
  childContextTypes: { router: {} }
})

describe('<DataContainerClass />', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      match: {
        path: '/redux/class'
      },
    }
    component = shallow(<DataContainerClass {...props} />, createContext())
  })

  it('should render <ReduxPage />', () => {
    expect(component.exists()).equal(true)
  })
})
