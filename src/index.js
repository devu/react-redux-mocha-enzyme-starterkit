import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import configureStore, { history } from './store/configureStore'
import Root from './components/Root'

import initialState from './reducers/initialState'
import { setStore } from './store/storeContainer'

import './styles/styles.scss'

require('./favicon.ico')

const store = configureStore(initialState)
setStore(store)
const mountNode = document.getElementById('react-root')

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  mountNode
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      mountNode
    )
  })
}
