import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter } from 'react-router-dom'
import ReduxPage from './ReduxPage'

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

describe('<ReduxPage />', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      match: {
        path: '/redux'
      },
    }
    component = shallow(<ReduxPage {...props} />, createContext())
  })

  it('should render <ReduxPage />', () => {
    expect(component.exists()).equal(true)
    expect(component.find('.redux-page').exists()).equal(true)
  })
})
