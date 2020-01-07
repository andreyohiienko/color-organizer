import '../../stylesheets/ColorList.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Color from '../Color'

const ColorList = ({ colors = [] }) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No Colors listed. (Add a Color)</p>
    ) : (
      colors.map(color => <Color key={color.id} {...color} />)
    )}
  </div>
)

ColorList.propTypes = {
  colors: PropTypes.array,
}

export default ColorList
