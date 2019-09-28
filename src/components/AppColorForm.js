import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddColorFrom extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    const { _title, _color } = this.refs
    this.props.onNewColor(_title.value, _color.value)
    e.preventDefault()
    // here we display data
    alert(`New color: ${_title.value} ${_color.value}`)
    // then we return inputs in their initial state
    _title.value = ''
    _color.value = '#000000'
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="color title..." required />
        <input ref="_color" type="color" required />
        <button>ADD</button>
      </form>
    )
  }
}

AddColorFrom.propTypes = {
  onNewColor: PropTypes.func,
}

AddColorFrom.defaultProps = {
  onNewColor: f => f,
}

export default AddColorFrom
