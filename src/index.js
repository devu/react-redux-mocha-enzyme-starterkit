import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import configureStore, { history } from './client/store/configureStore'
import Root from './client/components/Root'
import './client/styles/styles.scss'
import initialState from './client/reducers/initialState'

require('./favicon.ico')

const store = configureStore(initialState)
const mountNode = document.getElementById('react-root')

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  mountNode
)

if (module.hot) {
  module.hot.accept('./client/components/Root', () => {
    const NewRoot = require('./client/components/Root').default // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      mountNode
    )
  })
}
