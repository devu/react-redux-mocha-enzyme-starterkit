import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import { setStore } from 'store/storeContainer'

import App, { __RewireAPI__ as rewireAPI } from '../App'

const initialState = {
  assetPlan: {
    loading: false,
    planDetails: {
      mappedData: {
        uuid: '',
        status: 'https://schema.pearson.com/ns/contentlifecyclestatus/wip'
      }
    }
  },
  application: {
    initialised: false,
  },
  routing: {
    location: {
      pathname: '/',
      search: '',
      hash: ''
    }
  }
}

const configure = propState => {
  const mockStore = configureStore()(propState)
  setStore(mockStore)
  return mockStore
}

const setup = propOverrides => {
  const props = Object.assign(
    {
      initialised: true,
      history: {
        location: {
          hash: ''
        }
      }
    },
    propOverrides
  )

  const wrapper = shallow(<App store={configure(initialState)} {...props} />).dive()

  return {
    wrapper
  }
}

const fetchLibStub = sinon.stub().returns(Promise.resolve())
const startApplicationStub = sinon.stub().returns(Promise.resolve())

describe('App', () => {
  beforeEach(() => {
    rewireAPI.__Rewire__('startApplication', startApplicationStub)
  })

  afterEach(() => {
    fetchLibStub.resetHistory()
    startApplicationStub.resetHistory()
    rewireAPI.__ResetDependency__('startApplication')
  })

  it('Should render App container', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).to.equal(true)
  })
})
