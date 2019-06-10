/* eslint import/no-named-default:0 */

import { expect } from 'chai'
import sinon from 'sinon'
import configureStore from 'redux-mock-store'
import { setStore } from 'store/storeContainer'

import { startApplication, __RewireAPI__ as RewireAPI } from '../appController'

const configure = initialState => {
  const mockStore = configureStore()(initialState)
  setStore(mockStore)
  return mockStore
}

// method stubs
const startApplicationStub = sinon.stub()
// services stubs
const startApplicationServiceStub = sinon.stub().returns(Promise.resolve([{ stuff: 'stuff' }]))

describe('appController', () => {
  describe('startApplication', () => {
    beforeEach(() => {
      RewireAPI.__Rewire__('startApplicationService', startApplicationServiceStub)
    })
    afterEach(() => {
      startApplicationStub.resetHistory()
      RewireAPI.__ResetDependency__('startApplicationService')
    })
    it('should execute sequence of actions', async () => {
      const mockStore = configure({ application: {} })

      await startApplication()

      const expectedActions = [{ type: 'INITIALISE_APP' }, { type: 'APP_INITIALISED' }]

      const actions = mockStore.getActions()
      expect(actions).to.be.deep.equal(expectedActions)
      expect(startApplicationServiceStub).to.be.calledOnce
    })
  })
})
