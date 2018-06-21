import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter } from 'react-router-dom'
import DemoPage from './DemoPage'

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

describe('<DemoPage />', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      match: {
        path: '/demo'
      },
    }
    component = shallow(<DemoPage {...props} />, createContext())
  })

  it('should render <DemoPage />', () => {
    expect(component.exists()).equal(true)
    expect(component.find('.demo-page').exists()).equal(true)
  })
})
