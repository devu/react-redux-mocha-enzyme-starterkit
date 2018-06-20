import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
  dataReducer,
  routing: routerReducer
})

export default rootReducer
