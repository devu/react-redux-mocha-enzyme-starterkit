import { expect } from 'chai'
import appReducer from '../appReducer'

describe('app reducer', () => {
  it('default should work', () => {
    const input = appReducer({}, { type: 'default' })
    const output = {}
    expect(input).to.eql(output)
  })
})
