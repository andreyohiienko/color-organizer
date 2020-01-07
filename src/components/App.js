import '../stylesheets/App.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NewColor, Menu, Colors } from './containers'

class App extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    }
  }

  componentWillMount() {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
      </div>
    )
  }
}

App.childContextTypes = {
  store: PropTypes.object.isRequired,
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
