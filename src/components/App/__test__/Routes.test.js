import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { AppRouteSelect } from '../Routes'

const setup = propOverrides => {
  const props = Object.assign(
    {
      uuid: undefined
    },
    propOverrides
  )

  const wrapper = shallow(<AppRouteSelect {...props} />)

  return {
    wrapper
  }
}

describe('Routes, <AppRouteSelect>', () => {
  it('Should render AppRouteSelect component', () => {
    const { wrapper } = setup({ uuid: '' })
    expect(wrapper.exists()).to.equal(true)
  })

  it('Should produce valid path for each route', () => {
    const { wrapper } = setup({ uuid: 'some-uuid' })
    const testRoute = wrapper.find('[data-qa~="test-route"]')

    expect(testRoute.props().path).to.equal('/test/:some-uuid')
  })
})
