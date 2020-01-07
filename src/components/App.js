import '../stylesheets/App.scss'
import React from 'react'
import { NewColor, Menu, Colors } from './containers'
import PropTypes from 'prop-types'

const App = (props, { store }) => (
  <div className="app">
    <Menu />
    <NewColor />
    <Colors />
  </div>
)

App.contextTypes = {
  store: PropTypes.object,
}

App.propTypes = {
  store: PropTypes.object,
}

export default App
