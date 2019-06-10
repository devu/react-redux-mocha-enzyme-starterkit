import { INITIALISE_APP } from 'actions/constants'

const appReducer = (state = {}, action) => {
  const { type } = action

  switch (type) {
    case INITIALISE_APP:
      return { ...state, initialised: true }
    default:
      return state
  }
}

export default appReducer
