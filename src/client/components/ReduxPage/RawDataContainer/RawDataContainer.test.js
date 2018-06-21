import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { BrowserRouter } from 'react-router-dom'
import RawDataContainer from './RawDataContainer'

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

describe('<RawDataContainer />', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      match: {
        path: '/redux/class'
      },
    }
    component = shallow(<RawDataContainer {...props} />, createContext())
  })

  it('should render <ReduxPage />', () => {
    expect(component.exists()).equal(true)
  })
})
