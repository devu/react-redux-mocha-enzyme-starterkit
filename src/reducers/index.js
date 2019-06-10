import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import application from './appReducer'

const rootReducer = combineReducers({
  application,
  routing: routerReducer
})

export default rootReducer
