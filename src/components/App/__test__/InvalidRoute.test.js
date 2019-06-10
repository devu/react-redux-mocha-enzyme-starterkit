import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import InvalidRoute from '../InvalidRoute'

const setup = () => {
  const wrapper = shallow(<InvalidRoute />)

  return {
    wrapper
  }
}

describe('App', () => {
  it('Should render InvalidRoute component', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).to.equal(true)
  })

  it('should provide valid object with route details from hash', () => {
    const { wrapper } = setup()
    expect(wrapper.contains('Invalid route selected')).to.equal(true)
  })
})
