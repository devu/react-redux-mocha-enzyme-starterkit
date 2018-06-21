import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter } from 'react-router-dom'
import DemoOne from './DemoOne'

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

describe('<DemoOne />', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      match: {
        path: '/redux/class'
      },
    }
    component = shallow(<DemoOne {...props} />, createContext())
  })

  it('should render <DemoOne />', () => {
    expect(component.exists()).equal(true)
  })
})
