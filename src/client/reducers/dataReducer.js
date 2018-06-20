import * as Actions from '../actions'

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.FETCH_DATA:
      return action.payload
    default:
      return state
  }
}

export default dataReducer
