import * as serviceWorker from './serviceWorker'
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
// import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    }
  }

  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: PropTypes.object,
}

const store = storeFactory()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
