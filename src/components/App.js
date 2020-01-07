import '../stylesheets/App.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SortMenu from './SortMenu'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { sortFunction } from '../lib/array-helpers'

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
    const { store } = this.props
    const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))
    return (
      <div className="app">
        <SortMenu />
        <AddColorForm />
        <ColorList colors={sortedColors} />
      </div>
    )
  }
}
App.childContextTypes = {
  store: PropTypes.object,
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
