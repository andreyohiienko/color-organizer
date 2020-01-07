import * as serviceWorker from './serviceWorker'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

render(<App store={store} />, document.getElementById('root'))

serviceWorker.unregister()
