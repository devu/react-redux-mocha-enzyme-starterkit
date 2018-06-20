/* eslint no-underscore-dangle:0 */
import { createStore, compose, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'
// the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

export const history = createHistory()

const configureStoreProd = (initialState) => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [reactRouterMiddleware]

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
}

const configureStoreDev = (initialState) => {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [reactRouterMiddleware]
  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
