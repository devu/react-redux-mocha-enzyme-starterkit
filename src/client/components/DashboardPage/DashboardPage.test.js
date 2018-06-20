/* eslint no-console:0 */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import DashboardPage from './DashboardPage'

describe('<DashboardPage />', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      match: {
        path: '/dashboard'
      },
    }
    component = shallow(<DashboardPage {...props} />)
  })

  it('should render <Dashboard />', () => {
    expect(component.exists()).equal(true)
    expect(component.find('.dashboard-page').exists()).equal(true)
  })
})
