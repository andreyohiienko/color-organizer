import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/AddColorForm.scss'
import { addColor } from '../actions'

const AddColorFrom = ({ store }) => {
  let _title, _color

  const submit = e => {
    e.preventDefault()
    store.dispatch(addColor(_title.value, _color.value))
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }

  return (
    <form onSubmit={submit} className="add-color">
      <input
        ref={input => (_title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => (_color = input)} type="color" required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorFrom
